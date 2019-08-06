module.exports = {
	prompts: [
		{
			type: 'list',
			name: 'testFramework',
			message:
				'Which JavaScript ' +
				'testing framework'.blue +
				' would you like to use?',
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
			message:
				'Which ' + 'HTML preprocessor'.blue + ' would you like to use?',
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
			message:
				'What ' +
				'JavaScript preprocessor'.blue +
				' would you like to use?',
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
			message:
				'What would you like to use to ' + 'write styles'.blue + '?',
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
			message: 'What ' + 'Sass syntax'.blue + ' would you like to use ?',
			choices: ['Scss', 'Sass'],
			filter: function(val) {
				var filterMap = {
					Scss: 'scss',
					Sass: 'sass'
				};

				return filterMap[val];
			}
		}
	]
};
