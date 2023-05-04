'use strict';

const Hapi = require('@hapi/hapi')
const db = require('./db/dbConnect')
const AUTH_TOKEN_SECRET = "secret";
const redis  = require('redis')
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision')
const HapiSwagger = require('hapi-swagger');
const Pack = require('package')

const init = async () => {

    const server = Hapi.server({
        port: 3001,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
                credentials: true,
                additionalExposedHeaders: ['X-Total-Count']
              }
        }
    });

     const swaggerOptions = {
        info:{
            title:'Test API Documentation',
            version:Pack.version,
        },
        schemes: ['http','https']
    }


     // Adding plugins for swagger docs;
     await server.register([
        Inert,
        Vision,
        {
            plugin:HapiSwagger,
            options:swaggerOptions
        }
    ])

  
    
    await server.register(
        [
            {
                plugin: require('./users/index'),
                options: {}
            },
            {
                plugin:require('@hapi/basic')
            }
        ]
    )

   // server.auth.strategy('login', 'jwt', {validate})

    

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();