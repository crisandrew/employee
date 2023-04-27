const Boom= require('@hapi/boom');
const Employee = require('../schemas/employeeSchema')

try{
    module.exports = async (request) => {
        let res = request.payload ;
        let {name, employeeID, joiningDate, role, email, phone} = res;
        let data = {
                name,
                employeeID,
                joiningDate,
                role,
                email,
                phone
            }
            
    
        const createEmployee = await Employee.create(data)
        //const createUser = await User.find(data)
        return {
            statuscode: 200,
            message: 'employee added',
            data : createEmployee
        }
        
    };
    }catch{
        Boom.badRequest('invalid query')
    }


