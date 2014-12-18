/* jshint asi:true */
var Promise = require('promise')
var _ = require('lodash')
var R = require('ramda')
var path = require('path')
var regex = R.constructN(0,RegExp)
var ls = Promise.denodeify(require('fs').readdir);

module.exports = function(options){
  var patterns = options.patterns || require('./patterns')
  var sortPath = options.sortPath || process.env.HOMEPATH+'/downloads'

  return new Promise(function(resolve,reject){
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
      .then(options.done)
      .then(resolve)
  })

}

if(require.main === module){
  module.exports({
    done: console.log.bind(console)
  })
}
