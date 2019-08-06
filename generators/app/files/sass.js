module.exports = {
	scss: [
		{
			input: `src/styles/sass/_include-${
				this.sassSyntax === 'sass' ? 'sass' : 'scss'
			}/**/*`,
			output: 'src/app/styles/_includes'
		},
		{
			input: `src/styles/sass/main.${
				this.sassSyntax === 'sass' ? 'sass' : 'scss'
			}`,
			output: `src/app/styles/main.${
				this.sassSyntax === 'sass' ? 'sass' : 'scss'
			}`
		}
	]
};
