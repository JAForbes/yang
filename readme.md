Yang
====

`npm install JAForbes/yang`


Usage:


```javascript
var yang = require('yang')

yang({
	patterns: {
	  'png|jpeg|jpg': 'Pictures',
	  'txt|pdf|doc|docx': 'Documents'
	},
	sortPath: process.env.HOMEPATH+'/desktop'
})
.then(function(categorised){
	console.log(categorised)
})

```

Which will ouput...

```javascript
{ Pictures: 
   [ 'BznRVAYCQAAP6QV.png',
     'download (1).png',
     'download (2).png',
     'download (3).png',
     'download (4).png',
     'download.png',
     'BznRVAYCQAAP6QV.png-large',
     'unnamed (1).jpg',
     'unnamed (2).jpg',
     'unnamed (3).jpg',
     'unnamed.jpg' ],
  Documents: [ 'example.doc', 'js-in-ten-minutes.pdf' ] }

```
