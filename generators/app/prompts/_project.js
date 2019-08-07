const chalk = require('chalk');
const path = require('path');
const message = require('../helpers/_message');

const promptsProject = [
	{
		type: 'input',
		name: 'projectName',
		message: 'Your project name',
		message: message({
			headline: 'Project Name',
			description: 'Please provide a Project Name (without-spaces):',
			defaultValue: 'Current Name:'
		}),
		default() {
			return path.basename(process.cwd());
		}
		// default: path.basename(process.cwd()) // Default to current folder name
	},
	{
		type: 'input',
		name: 'projectVersion',
		message: 'Version',
		default: '1.0.0'
	},
	{
		type: 'list',
		name: 'testFramework',
		message: `Which JavaScript ${chalk.blue(
			'testing framework'
		)} would you like to use?`,
		choices: ['Jasmine', 'Mocha', 'None'],
		filter: function(val) {
			var filterMap = {
				Jasmine: 'jasmine',
				Mocha: 'mocha',
				None: 'none'
			};

			return filterMap[val];
		}
	},
	{
		type: 'list',
		name: 'htmlOption',
		message: `Which ${chalk.blue(
			'HTML preprocessor'
		)} would you like to use?`,
		choices: ['Pug'],
		filter: val => {
			let filterOptions = {
				Pug: 'pug'
			};

			return filterOptions[val];
		}
	},
	{
		type: 'list',
		name: 'jsPreprocessor',
		message: `What ${chalk.blue(
			'JavaScript preprocessor'
		)} would you like to use?`,
		choices: ['None', 'ES6 (Using Babel)'],
		filter: val => {
			var filterMap = {
				None: 'none',
				'ES6 (Using Babel)': 'es6'
			};

			return filterMap[val];
		}
	},
	{
		type: 'list',
		name: 'cssOption',
		message: `What would you like to use to ${chalk.blue('write styles')}?`,
		choices: ['Sass'],
		filter: function(val) {
			var filterMap = {
				Sass: 'sass'
			};

			return filterMap[val];
		}
	},
	{
		when: answers => {
			return answers.cssOption === 'sass';
		},
		type: 'list',
		name: 'sassSyntax',
		message: `What ${chalk.blue('Sass syntax')} would you like to use ?`,
		choices: ['Scss', 'Sass'],
		filter: function(val) {
			var filterMap = {
				Scss: 'scss',
				Sass: 'sass'
			};

			return filterMap[val];
		}
	}
];

module.exports = promptsProject;
