
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

exports.mortality_births_deaths = function (req, res) {
  fs.createReadStream('./data/mortality_births_deaths.json').pipe(res);  
}