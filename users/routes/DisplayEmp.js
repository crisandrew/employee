module.exports = {
    method: 'GET',
    path: '/employee/display',
    options: {
        handler: require('../handlers/DisplayEmp'),
        tags: ['api'], // ADD THIS TAG
       //validate: require('../validations/AddEmp')
    }  
};

