var faker = require('faker');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rio2016')

for (i = 0; i <= 10; i++) {
  var randomName = faker.name.findName();
  var randomjobTitle = faker.name.jobTitle();
  var randomjobArea = faker.name.jobArea();
  var randomjobType = faker.name.jobType();
  var randomEmail = faker.internet.email();
  console.log('----------------------------------------------------');
  console.log(randomName);
  console.log(randomjobTitle);
  console.log(randomjobArea);
  console.log(randomjobType);
  console.log(randomEmail);
}
