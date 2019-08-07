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

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);
		this.promptsFunc = promptsFunc;
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
		});
	}

	writing() {
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
		root.root.forEach(file => {
			copy(file.input, file.output);
		});

		// Render assets
		assets.assets.forEach(folder => {
			mkdirp(folder);
		});

		// Render pug
		pug.pugs.forEach(file => {
			copy(file.input, file.output);
		});

		// Render sass
		sass.sass.forEach(file => {
			copyTpl(file.input, file.output, this.answers);
		});

		// Render gulp task
		tasks.tasks.forEach(file => {
			copyTpl(file.input, file.output, this.answers);
		});
	}
};
