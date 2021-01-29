const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    avatar: Buffer,
    firstName: { type: String, required: true },
    middleName: String,
    lastName: { type: String, required: true },
    address: {
        addressName: { type: String, required: true },
        address1: { type: String, required: true },
        address2: { type: String, default: null },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: String, required: true }
    },
    email: { type: String, required: true },
    phones: [{ phoneType: String, phoneNumber: String }],
    birthDate: String,
    language: String,
    hiredDate: String,
    askTheSealEmployeeId: String,
    comments: String,
    security: {
        role: { type: String, default: 'Office Personnel' },
        password: String,
        terminationDate: String
    },
    compensation: {
        type: { type: String, default: 'salary' },
        rate: { type: String, required: true },
        isCommissionSalePerson: { type: Boolean, default: false },
        percentNewSale: String,
        percentRetSale: String
    }
});

const Employee = mongoose.model('EmployeeSchema', EmployeeSchema);

module.exports = Employee;