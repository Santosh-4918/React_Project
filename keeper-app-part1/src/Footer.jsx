import React from "react"
const year = new Date().getFullYear();

const fName = "Santosh"
const lName = "Kumar"
function Footer(){
   return<div> <footer>
      <p>Created by : {fName + " " + lName}</p>
      <p>© {year} DESCARTES INDIA SYSTEM. All rights reserved.</p>
    </footer>
    </div>
}

export default Footer;