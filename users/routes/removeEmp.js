module.exports = {
    method: 'DELETE',
    path: '/employee/remove/{_id}',
    options: {
        handler: require('../handlers/RemoveEmp'),
        tags: ['api'], // ADD THIS TAG
       //validate: require('../validations/AddEmp')
    }
};

