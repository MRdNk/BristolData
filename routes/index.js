
/*
 * GET home page.
 */

var fs = require('fs');

exports.index = function(req, res){
  res.render('index', { title: 'Bristol Data JSON' });
};

exports.mortality = function (req, res) {
  fs.createReadStream('./data/mortality.json').pipe(res);
};

exports.mortality_births_deaths = function (req, res) {
  fs.createReadStream('./data/mortality_births_deaths.json').pipe(res);  
}

exports.bristol_wards_map = function (req, res) {
  fs.createReadStream('./data/bristol_wards.json').pipe(res);  
}