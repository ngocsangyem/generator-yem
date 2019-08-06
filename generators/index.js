const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');

// Call option and prompts
const options = require('./app/config/options');
const prompts = require('./app/config/prompts');

// Call file and dir to create
const assets = require('./app/files/assets');
const pug = require('./app/files/pug');
const root = require('./app/files/root');
const sass = require('./app/files/sass');
const tasks = require('./app/files/tasks');

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);
		for (let optionName in options.options) {
			this.option(optionName, options.options[optionName]);
		}
	}

	prompting() {
		return this.prompt(prompts.prompts).then(answers => {
			this.testFramework = answers.testFramework;
			this.htmlOption = answers.htmlOption;
			this.jsPreprocessor = answers.jsPreprocessor;
			this.cssOption = answers.sassSyntax;

			console.log(
				this.testFramework,
				this.htmlOption,
				this.jsPreprocessor,
				this.cssOption
			);
		});
	}
};
