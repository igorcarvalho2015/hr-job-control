var express = require('express');
var app = express();
var BodyParser = require('body-parser');
// Database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rio2016');
var Base = require('./models/base');

app.use(BodyParser.urlencoded({extended: true}));
app.use(BodyParser.json());

var port = process.env.PORT || 8000;

var router = express.Router();

router.use('/', function(request, response, next){
  var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
  var now = new Date().toISOString();
  console.log('[' + now + '][' + ip + ']');
  next();
});

router.route('/all').get(function(request, response) {
  var data = {
    base: [],
    count: 0
  };
  Base.find({}, 'job_code job_title employee_name', function(err, base){
    if (err){
      error.find = err;
    }
    Base.count(function(err, count){
      if (err){
        error.count = err;
      }
      data.count = count;
      data.base = base;
      response.json(data);
    });
  }).limit(10);
});
router.route('/all/:page').get(function(request, response) {
  skip = (request.params.page - 1) * 10;
  Base.find({}, 'job_code job_title employee_name', function(err, base){
    if (err){
      error.find = err;
    }
    response.json(base);
  }).skip(skip).limit(10);
});

router.get('/', function(request, response){
  response.json({message: 'this is my first step to build an API. \\o/'});
});

app.use('/api', router);

app.listen(port);
console.log('Server started on port ' + port);
