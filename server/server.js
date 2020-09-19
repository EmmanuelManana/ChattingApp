import express from "express";
import http from "http";
import socketio from "socket.io";
import config from "./config/config.js";
import logger from "./logger/logger.js";
import router from "../server/endpoints/router.js";

import { addUser, removeUser, getUser, getUsersInRoom } from "./users.js";

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//middleware
app.use(router);

// SockectIO
io.on("connection", (socket) => {
  console.log("connection established");

  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.emit('message')
    socket.join(user.room);
  });

  socket.on("disconnect", () => {
    console.log("connection killed, user left");
  });
});

server.listen({ host: config.HOST, port: config.PORT }, () => {
  logger.info(`HttpServer listens on ${config.url}`);
});
