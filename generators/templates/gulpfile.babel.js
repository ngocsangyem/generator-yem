<% if (testFramework === 'mocha' || testFramework === 'jasmine') { %>
import path from 'path';<% } %>
import gulp from 'gulp';
import browserSyncLib from 'browser-sync';
import cfg from './config';
import minimist from 'minimist';
import glob from 'glob';
import gulpLoadPlugins from 'gulp-load-plugins';

const defaultNotification = function(err) {
	return {
		subtitle: err.plugin,
		message: err.message,
		sound: 'Funk',
		onLast: true
	};
};

const args = minimist(process.argv.slice(2));
const dirs = cfg.directories;
const taskTarget = args.production ? dirs.destination : dirs.temporary;
const config = Object.assign({}, cfg, defaultNotification);
const $ = gulpLoadPlugins();<% if (testFramework !== 'none') { %>

// Create karma server
const KarmaServer = require('karma').Server;<% } %>

// BrowserSynce init
const browserSync = browserSyncLib.create();

glob.sync('./tasks/**/*.js')
	.filter(function(file) {
		return /\.(js)$/i.test(file);
	})
	.map(function(file) {
		require(file)(gulp, $, args, config, taskTarget, browserSync);
	});

gulp.task(
	'serve',
	gulp.series([
		'clean'<% if (cssOption === 'sass') { %>,
		'injectSass'<% } %>,
		'injectJs',
		gulp.parallel(
			'sass'<% if (cssOption === 'sass') { %>,
			'pug'<% } %><% if (htmlOption === 'pug') { %>,
			'browserify'<% } %>,
			'fonts',
			'images',
			'concatCss',
			'concatJs'
		),
		'browserSync'
	])
);

gulp.task(
	'build',
	gulp.series([
		'clean',
		gulp.parallel(<% if (htmlOption === 'pug') { %>
			'pug'<% } %><% if (cssOption === 'sass') { %>,
			'sass'<% } %>,
			'fonts',
			'images',
			'concatCss',
			'concatJs',
			'browserify'
		),
		'zip',
		'rev',
		'sitemap',
		'author',
		'size',
		'done'
	])
);

gulp.task('lint', gulp.series('eslint'));<% if (testFramework === 'none') { %>);<% } else { %>

gulp.task('test', function(done) {
	KarmaServer.start(
		{
			configFile: __dirname + '/karma.conf.js',
			singleRun: !args.watch,
			autoWatch: args.watch
		},
		function() {
			done();
		}
	);
});<% } %>
