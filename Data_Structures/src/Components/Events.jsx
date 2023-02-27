import React from "react";
const Event = (props) => {
  return (
    <div className="event">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};
export default Event;
