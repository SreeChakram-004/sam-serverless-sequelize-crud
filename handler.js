'use strict'
const awsServerlessExpress = require('aws-serverless-express')
const app = require('./app')
const server = awsServerlessExpress.createServer(app)

exports.handler =(event, context) => {
     // const id = event.pathParameters.id;
     // console.log("Received event:",JSON.stringify(event + `${id}`,null,2));
          awsServerlessExpress.proxy(server, event, context)
     }
