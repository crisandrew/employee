module.exports = {
    method: 'POST',
    path: '/task',
    options: {
        handler: require('../handlers/AddTask'),
        tags: ['api'], // ADD THIS TAG
       //validate: require('../validations/AddEmp')
    }
};

