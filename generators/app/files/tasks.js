function tasks(jsPreprocessor) {
	return [
		{
			input: `tasks/es${jsPreprocessor === 'none' ? '5' : '6'}/**/*.js`,
			output: 'tasks'
		}
	];
}

module.exports = tasks;
