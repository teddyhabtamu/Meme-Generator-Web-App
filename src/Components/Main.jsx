import React, { useState } from "react";
import Nav from "./Nav";
import Generator from "./Generator";
import "./style.css";


function Main() {
  function getUser() {
    setUserName(document.getElementById("user-input").value);
  }

  return (
    <div>
      <Nav />
      <Generator />
    </div>
  );
}

export default Main;
