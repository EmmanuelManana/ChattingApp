import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import config from './config/config.js'
import logger from './logger/logger.js'

const app = express();
const server = http.createServer(app);
const io = socketio(server);


server.listen({host: config.HOST, port: config.PORT}, () => {
    logger.info(`HttpServer listens on ${config.url}`);
})
