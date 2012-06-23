var
md       = require('node-markdown').Markdown,
fs       = require('fs'),
source   = process.argv[2],
title    = process.argv[3] || 'Spry',
markdown,
html;

markdown = fs.readFileSync(source, 'utf8');

html = md(markdown);

fs.writeFileSync('output/index.html', wrap(html), 'utf8');

function wrap (html) {
  return "" +
  "<!doctype html>\n" +
  "<html lang=\"en\">\n" +
  "<head>\n" +
  "<meta charset=\"utf8\">\n" +
  "<title>" + title + "</title>\n" +
  "<link rel=\"stylesheet\" href=\"style.css\"" +
  "</head>\n" + 
  "<html>\n" +
  html +
  "\n</html>";
}