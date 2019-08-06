module.exports = {
	tasks: [
		{
			input: `tasks/es${
				this.jsPreprocessor === 'none' ? '5' : '6'
			}/**/*.js`,
			output: 'tasks'
		}
	]
};
