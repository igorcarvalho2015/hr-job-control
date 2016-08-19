var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BaseSchema   = new Schema({
    job_code: String,
    job_title: String,
    job_title_pt: String,
    job_level: String,
    category: String,
    start_date: Date,
    end_date: Date,
    classification: String,
    status: String,
    admission_date: Date,
    registration: Number,
    employee_name: String,
    employee_email: String
});
module.exports = mongoose.model('Base', BaseSchema, 'tool_db');
