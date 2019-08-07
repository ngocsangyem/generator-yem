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

	prompting() {
		const prompts = this.promptsFunc();
		return this.prompt(prompts).then(answers => {
			this.answers = answers;
		});
	}
};
