var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BaseSchema   = new Schema({
    job_title: String,
    job_area: String,
    job_type: String,
    start_date: Date,
    end_date: Date,
    employee_name: String,
    employee_email: String,
    employee_salary: Number
});
module.exports = mongoose.model('Base', BaseSchema, 'hr_db');
