var sortPath = process.argv[2] || process.env.HOMEPATH+'/downloads'
var Promise = require('promise')
var _ = require('lodash')
var R = require('ramda')
var log = function(){ console.log.apply(console,arguments); return arguments[0] }
var patterns = require('./patterns');
var path = require('path')
var regex = R.constructN(0,RegExp)
var ls = Promise.denodeify(require('fs').readdir);

ls(sortPath)
  .then(R.groupBy(path.extname))
  .then(_.toArray)
  .then(R.reduce(function( paths, group){
      var dir = _.find( patterns, function( path, pattern ){
        return R.match(regex(pattern,'gi'), R.head(group) )
      })
      if( dir ){
        paths[dir] = paths[dir] || []
        paths[dir] = paths[dir].concat(group)
      }
      return paths;
    },{})
  )
  .then(log)
