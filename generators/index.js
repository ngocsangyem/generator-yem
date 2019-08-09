const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');

// Call option and prompts
const options = require('./app/config/options');
const promptsFunc = require('./app/_prompts');

// Call file and dir to create
const assets = require('./app/files/assets');
const pug = require('./app/files/pug');
const root = require('./app/files/root');
const sass = require('./app/files/sass');
const tasks = require('./app/files/tasks');
const testing = require('./app/files/testing');
const scripts = require('./app/files/scripts');

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);

		this.promptsFunc = promptsFunc.bind(this);
		this.sassFunc = sass.bind(this);
		this.tasksFunc = tasks.bind(this);
		this.scriptsFunc = scripts.bind(this);

		for (let optionName in options.options) {
			this.option(optionName, options.options[optionName]);
		}
	}
	initializing() {
		this.pkg = require('../package.json');
	}
	prompting() {
		const prompts = this.promptsFunc();
		return this.prompt(prompts).then(answers => {
			this.answers = answers;
			console.log(
				this.answers.authorName,
				this.answers.authorGithub,
				this.answers.projectName,
				this.answers.projectVersion,
				this.answers.testFramework,
				this.answers.htmlOption,
				this.answers.jsPreprocessor,
				this.answers.cssOption,
				this.answers.sassSyntax
			);
		});
	}

	async writing() {
		const sassF = this.sassFunc(this.answers.sassSyntax);
		const taslsF = this.tasksFunc(this.answers.jsPreprocessor);
		const scriptsF = this.scriptsFunc(this.answers.jsPreprocessor);

		const copy = (input, output) => {
			this.fs.copy(
				this.templatePath(input),
				this.destinationPath(output),
				{ globOptions: { dot: true } }
			);
		};

		const copyTpl = (input, output, data) => {
			this.fs.copyTpl(
				this.templatePath(input),
				this.destinationPath(output),
				data
			);
		};

		// Render root
		await root.root.forEach(file => {
			copyTpl(file.input, file.output, this.answers);
		});

		// Render assets
		await assets.assets.forEach(folder => {
			mkdirp(folder, function(err) {
				if (err) console.error(err);
			});
		});

		// Render testing file
		await testing.testing.forEach(file => {
			copyTpl(file.input, file.output, this.answers);
		});

		// Render pug
		await pug.pugs.forEach(file => {
			copyTpl(file.input, file.output, this.answers);
		});

		// Render sass
		await sassF.forEach(file => {
			copyTpl(file.input, file.output, this.answers);
		});

		// Render scripts
		await scriptsF.forEach(file => {
			copyTpl(file.input, file.output, this.answers);
		});

		// Render gulp task
		await taslsF.forEach(file => {
			copyTpl(file.input, file.output, this.answers);
		});
	}

	install() {
		this.installDependencies({
			bower: false,
			skipInstall: this.options['skip-install']
		});
	}
};
