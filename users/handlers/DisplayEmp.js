const Boom= require('@hapi/boom');
const Employee = require('../schemas/employeeSchema')

try{
    module.exports = async (request, h) => {
        //let res = request.params ;
      
        const DisplayEmployee = await Employee.find();
        //const createUser = await User.find(data)
        return {
            statuscode: 200,
            message: 'list of employees',
            data : DisplayEmployee
        }
        
    };
    }catch{
        Boom.badRequest('invalid query')
    }

