import React, { useState, useEffect } from "react";
import "../styles/Chat.css";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    //fetch data from the URL.
    const data = queryString.parse(location.search);

    setName(data.name);
    setRoom(data.room);
    //(making a request to the server)
    socket = io(ENDPOINT);

    console.log(socket);
    socket.emit("join", { name, room }, () =>{
    });

    return () => {
      socket.emit('disconnect');

      socket.off()
    }
  }, [ENDPOINT, location.search, name, room]);

  return (
    <div className="chat">
      <h1>Chat Component</h1>
    </div>
  );
};

export default Chat;
