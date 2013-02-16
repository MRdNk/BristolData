
/*
 * GET home page.
 */

var fs = require('fs');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.mortality = function (req, res) {

  fs.createReadStream('./data/mortality.json').pipe(res);

  // res.json ()
};