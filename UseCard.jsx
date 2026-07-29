import React from "react";

import "./UseCard.css"
const UseCard = (props) => {
  return (
    <div className="user-container"style={props.style}>
      <p id="user-name">{props.name}</p>

      <img
        id="user-img"
        src={props.image}
        alt="image"
      />

      <p id="user-desc">{props.desc}</p>
    </div>
  );
};

export default UseCard;