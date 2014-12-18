var yang = require('./app.js');

yang({
	patterns: {
		'html': 'Web Pages'
	},
	sortPath: process.env.HOMEPATH+'/desktop'
})
.then(function(categorised){
	console.log(categorised)
})