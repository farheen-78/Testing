import React, { useState } from "react";

import firebase from "../config/firebase";
const Home = () => {
  const [name, setName] = useState("");
  const addUser = () => {
    firebase.database().ref("Name").push(name);

    console.log("Name", name);
    setName("");
  };
  return (
    <div>
      <input
        type="text"
        name="fname"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="off"
        placeholder="Full Name"
      />
      <button onClick={addUser}>AddUser</button>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
