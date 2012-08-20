Create pretty and semantic pages html pages from markdown.

!['A sample page. See sample/kopimi.md'](https://github.com/AaronAcerboni/spry/raw/master/sample/sample.png "A sample page. See sample/kopimi.md")

## Usage

spry is dependant on [node.js.](http://nodejs.org)

```bash
$ git clone git@github.com@AaronAcerboni/spry.git
$ cd spry
$ npm install
$ ./spry input.md "My title"
```

spry takes 2 parameters. The first is file reference to the markdown file and 
the second is an optional html document title.

The index.html file is outputted to the output folder.

## Example

**test.md**

```Markdown
# hello world

- i
- love
- [lists](http://lists.com)
```

`node spry.js test.md "list fan"`

would output the following...

**output/index.html**

```HTML
<!doctype html> 
<html lang="en"> 
<head> 
<meta charset="utf8"> 
<title>list fan</title> 
<link rel="stylesheet" href="style.css"></head> 
<html> 
<h1>hello world</h1> 
 
<ul> 
<li>i</li> 
<li>love</li> 
<li><a href="http://lists.com">lists</a></li> 
</ul> 
</html>
```

- - -
[![kopimi][1]][2]

  [1]: https://github.com/AaronAcerboni/aaronacerboni.github.com/blob/master/kopimi_mini_black.gif?raw=true
  [2]: http://kopimi.com/kopimi/
