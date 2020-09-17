import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import config from './config/config.js'
import logger from './logger/logger.js'
import router from '../server/endpoints/router.js'

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//middleware
app.use(router)

// SockectIO
io.on("connection", () => {

})


server.listen({host: config.HOST, port: config.PORT}, () => {
    logger.info(`HttpServer listens on ${config.url}`);
})
