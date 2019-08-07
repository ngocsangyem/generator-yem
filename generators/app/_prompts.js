const promptsAuthor = require('../app/prompts/_author');
const promptsProject = require('../app/prompts/_project');

function prompts() {
	return [...promptsAuthor, ...promptsProject];
}

module.exports = prompts;
