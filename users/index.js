
exports.plugin = {
    name: 'users',
    register: (server, options) => {
         server.route(require('./routes/AddEmp'));
         server.route(require('./routes/removeEmp'));
         server.route(require('./routes/DisplayEmp'));
         server.route(require('./routes/AddTask'));

     }
};