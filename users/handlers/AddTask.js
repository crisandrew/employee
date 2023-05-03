const Boom= require('@hapi/boom');
const Task = require('../schemas/taskSchema')

try{
    module.exports = async (request) => {
        let res = request.payload ;
        let {TaskID, Date, TaskName, LastDate, TaskPriority} = res;
        let data = {
                TaskID,
                Date,
                TaskName,
                LastDate,
                TaskPriority
            }
            
    
        const createTask = await Task.create(data)
        //const createUser = await User.find(data)
        return {
            statuscode: 200,
            message: 'Task added',
            data : createTask
        }
        
    };
    }catch{
        Boom.badRequest('invalid query')
    }


