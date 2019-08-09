/*eslint no-unused-expressions:0 */
const Footer = require('./index');

describe('Footer View', function() {
	beforeEach(() => {
		this.footer = new Footer();
	});

	it('Should run a few assertions', () => {
		expect(this.footer).to.exist;
	});
});
