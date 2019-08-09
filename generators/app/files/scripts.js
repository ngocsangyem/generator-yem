function scripts(jsPreprocessor) {
	return [
		{
			input: `src/scripts/app.${
				jsPreprocessor === 'none' ? 'js' : 'es6.js'
			}`,
			output: 'src/app/scripts/app.js'
		},
		{
			input: `src/components/sass/footer/index.${
				jsPreprocessor === 'none' ? 'js' : 'es6.js'
			}`,
			output: 'src/app/components/footer/index.js'
		},
		{
			input: `src/components/sass/header/index.${
				jsPreprocessor === 'none' ? 'js' : 'es6.js'
			}`,
			output: 'src/app/components/header/index.js'
		},
		{
			input: `src/components/sass/header/tests/index.${
				jsPreprocessor === 'none' ? 'test.js' : 'test.es6.js'
			}`,
			output: 'src/app/components/header/index.test.js'
		},
		{
			input: `src/components/sass/footer/tests/index.${
				jsPreprocessor === 'none' ? 'test.js' : 'test.es6.js'
			}`,
			output: 'src/app/components/footer/index.test.js'
		}
	];
}

module.exports = scripts;
