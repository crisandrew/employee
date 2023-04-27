const Boom= require('@hapi/boom');
const Employee = require('../schemas/employeeSchema')

try{
    module.exports = async (request, h) => {
        let res = request.params ;
      
        const removeEmployee = await Employee.findByIdAndRemove({id:res.id});
        //const createUser = await User.find(data)
        return {
            statuscode: 200,
            message: 'employee removed',
            data : removeEmployee
        }
        
    };
    }catch{
        Boom.badRequest('invalid query')
    }

