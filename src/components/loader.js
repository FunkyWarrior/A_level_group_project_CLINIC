import React from "react";

export default ({ children, flag }) => (flag ? <div>Loading...</div> : children);