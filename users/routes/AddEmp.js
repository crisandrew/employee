module.exports = {
    method: 'POST',
    path: '/employee/add',
    options: {
        handler: require('../handlers/AddEmp'),
        tags: ['api'], // ADD THIS TAG
       //validate: require('../validations/AddEmp')
    }
};

