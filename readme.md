Yang
====

`npm install JAForbes/yang`


Usage:


```javascript
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

Which will ouput...

```json
{ 'Web Pages': 
   [ '5.10.2014 17-16-40 Twine Archive.html',
     'Conversation.html',
     'hi.html',
     'wow.html' ] }

```
