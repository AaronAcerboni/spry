# Usage

`npm install spry`  

`node spry.js`  

This will output an index.html and 404.html page providing your 
json syntax is correct.

# Spry

Spry is a static site generator perfect for creating simple and clean
html pages quickly.

Spry generates 2 simple html files; index and 404. This makes it perfect 
for a github page but can be used for anything else.

The two pages are configured in the `site.json` file.

For an example of a site built using spry see [halfmelt.com](http://halfmelt.com)

# site.json

This is the file which you define your page. I'm only showing you the most complex part. The rest of the json file is straight forward.

    ...
    "site" : [
	    {
			"mini" : [
				{
					"heading" : "Hello"
					"content" : "I'm an example"
				},
				{
					"heading" : "Goodbye"
					"content" : "<b>I have a planet to save</b>"
				},
			]
	    },
	    {
			"large" : {
				"content" : "<code>heading</code> is overrated"
			}
	    }
    ]
    ...

The order of the objects in `site` array counts. `mini` can have as many 
objects inside as you want.  

# Credits

- [Aaron Acerboni](http://github.com/aaronacerboni)
- [Twitter Bootstrap](http://github.com/twitter/bootstrap)
- [janl's mustache.js](http://github.com/janl/mustache.js)
