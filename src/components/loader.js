import React from "react";

export default ({ children, flag }) => (
    flag ? <div>
        <img className = "loader" src="../images/loader.gif" alt="Loading"/>
        <p>  Loading... </p>
  
    </div> : children);