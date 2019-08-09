function sass(sassSyntax) {
	return [
		{
			input: `src/styles/sass/_includes-${
				sassSyntax === 'sass' ? 'sass' : 'scss'
			}/**/*`,
			output: 'src/app/styles/_includes'
		},
		{
			input: `src/styles/sass/main.${
				sassSyntax === 'sass' ? 'sass' : 'scss'
			}`,
			output: `src/app/styles/main.${
				sassSyntax === 'sass' ? 'sass' : 'scss'
			}`
		},
		{
			input: `src/components/sass/footer/index.${
				sassSyntax === 'sass' ? 'sass' : 'scss'
			}`,
			output: `src/app/components/footer/index.${
				sassSyntax === 'sass' ? 'sass' : 'scss'
			}`
		},
		{
			input: `src/components/sass/header/index.${
				sassSyntax === 'sass' ? 'sass' : 'scss'
			}`,
			output: `src/app/components/header/index.${
				sassSyntax === 'sass' ? 'sass' : 'scss'
			}`
		}
	];
}

module.exports = sass;
