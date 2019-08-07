module.exports = {
	pugs: [
		{
			input: 'src/components/sass/footer/index.pug',
			output: 'src/app/components/footer/index.pug'
		},
		{
			input: 'src/components/sass/header/index.pug',
			output: 'src/app/components/header/index.pug'
		},
		{
			input: 'src/views/pug/_layouts/**/*',
			output: 'src/app/views/_layouts'
		},
		{
			input: 'src/views/pug/index.pug',
			output: 'src/app/views/index.pug'
		}
	]
};
