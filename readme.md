Yang
====

`npm install JAForbes/yang`


Usage:


```
var yang = require('yang')

yang({
	patterns: {
		'html': 'Web Pages'
	},
	sortPath: process.env.HOMEPATH+'/desktop'
})
.then(function(categorised){
	console.log(categorised)
})

```