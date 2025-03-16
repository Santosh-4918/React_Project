

import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Heading";
import List from "./List";
// import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
const fName = "Santosh";
const lName = "Kumar";
const num = 7;

const year = new Date().getFullYear();
// const date = new Date(2025, 3, 3, 16);
const currentTime = new Date().getHours();
const image = "https://picsum.photos/200";
const customStyle = {
  color: "red",
  fontSize: "20px",
};
let greeting;
if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}


root.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Hello {fName + " " + lName}{" "}
    </h1>
    <h1 style={customStyle}>{greeting}</h1>
    <Heading />

    <p>Your lucky no is : {num}</p>
    <img src={image}></img>
    <p>List of Places.</p>
    <List />
    <img src="https://w0.peakpx.com/wallpaper/548/907/HD-wallpaper-lionel-messi-barcelona-football-spain-catalonia-argentine-football-player.jpg"></img>
    <img src="https://fifpro.org/media/fhmfhvkx/messi-world-cup.jpg"></img>
    <img src="https://w0.peakpx.com/wallpaper/286/774/HD-wallpaper-leo-messi-barcelona-fc-football-spain-catalonia-argentinian-football-player-lionel-messi.jpg"></img>
    <footer>
      <p>Created by : {fName + " " + lName}</p>
      <p>© {year} DESCARTES INDIA SYSTEM. All rights reserved.</p>
    </footer>
  </div>
);
