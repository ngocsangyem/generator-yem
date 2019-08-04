/*eslint no-unused-expressions:0 */
const FooterIndex = require('./index');

describe('Footer View', function() {
	beforeEach(() => {
		this.footer = new FooterIndex();
	});

	it('Should run a few assertions', () => {
		expect(this.footer).to.exist;
	});
});
