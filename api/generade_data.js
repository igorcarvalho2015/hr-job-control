var faker = require('faker');
var mongoose = require('mongoose');
var q = require('q');
mongoose.Promise = require('q').Promise;
mongoose.connect('mongodb://localhost/enterprise_name', function() {
  mongoose.connection.db.dropDatabase();
});
var Base = require('./models/base');

var new_jobs = [];

for (i = 0; i <= 20000; i++) {
  var rndFirstName = faker.name.firstName();
  var rndLastName = faker.name.lastName();
  var rndFullName = rndFirstName + ' ' + rndLastName;
  var rndjobTitle = faker.name.jobTitle();
  var rndjobArea = faker.name.jobArea();
  var rndjobType = faker.name.jobType();
  var rndEmail = rndFirstName.toLowerCase() + '.' + rndLastName.toLowerCase() + '@enterprise.com';
  var rndStartDate = faker.date.past().toISOString().slice(0, 10);
  var rndEndDate = faker.date.future().toISOString().slice(0, 10);
  var rndSalary = faker.finance.amount(500, 15000);

  var new_job = new Base({
    job_title: rndjobTitle,
    job_area: rndjobArea,
    job_type: rndjobType,
    start_date: rndStartDate,
    end_date: rndEndDate,
    employee_name: rndFullName,
    employee_email: rndEmail,
    employee_salary: rndSalary
  });

  new_jobs.push(new_job);
}
console.log('Random data generated');

var total = new_jobs.length;

function saveAll() {
  var job = new_jobs.pop();

  var promise = job.save();

  promise.done(function() {
    if (--total) {
      saveAll();
    } else {
      console.log('Finished generating random database!')
      mongoose.disconnect();
    }
  });
}

saveAll();
