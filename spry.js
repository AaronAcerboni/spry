var fs            = require('fs'),
    m             = require('mustache'),
    siteFile      = fs.readFileSync('site.json', 'utf8'),
    templateIndex = fs.readFileSync('index.mustache', 'utf8'),
    template404   = fs.readFileSync('404.mustache', 'utf8'),
    index         = null,
    _404          = null;

// Generate views
index = JSON.parse(siteFile)["index"];
_404  = JSON.parse(siteFile)["404"];

// Generate index.html;
fs.writeFileSync('index.html', m.to_html(templateIndex, index), 'utf8');

// Generate 404.html
fs.writeFileSync('404.html', m.to_html(template404, _404), 'utf8');
