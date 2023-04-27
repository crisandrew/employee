const mongoose = require('mongoose')
// define Schema
const EmployeeSchema = mongoose.Schema({
    employeeID: String,
    name: String,
    role: String,
    joiningDate: String,
    email: String,
    phone: String
  });

  // compile schema to model
  module.exports = mongoose.model('employee', EmployeeSchema, 'employees');

