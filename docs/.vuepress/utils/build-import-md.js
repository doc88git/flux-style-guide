const MarkdownIt = require('markdown-it')
const fs = require('fs');

module.exports = function buildExampleComponent(args) {
  const file = `${__dirname}/../apiComponents/${args}.doc.md`
  const content = fs.readFileSync(file, 'utf8');

  const md = new MarkdownIt();

  return md.render(content);
}
