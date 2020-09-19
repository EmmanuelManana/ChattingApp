import React, { useState} from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="login">
      <div className="login__container">
        <form>
          <input
            className="login__nameInput"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <input
            className=" "
            type="text"
            placeholder="Enter Room Name"
            value={room}
            onChange={(event) => setRoom(event.target.value)}
          />
        </form>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chatroom?name=${name}&room=${room}`}
        >
          <button type="submit">Join Room</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
