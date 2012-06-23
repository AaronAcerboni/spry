Create a simple but pretty index.html file from a markdown file.

## Usage

`git clone git@github.com:AaronAcerboni/spry.git`  
`cd spry`  
`npm install`  
`node spry.js input.md "my page"`  


spry.js takes 2 parameters. The first is file reference to the markdown file and 
the second in optional index.html page title.

The index.html file is outputted to the output folder.

## Example

test.md
```
# hello world

- i
- love
- [lists](http://lists.com)
```

`node spry.js test.md "list fan"`

would output the following...

output/index.html
```
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