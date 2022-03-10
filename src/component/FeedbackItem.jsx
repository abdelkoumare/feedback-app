import React, { useState } from "react";
import Card from "./shared/Card";
import { FaTimes, FaHubspot } from "react-icons/fa";

const FeedbackItem = ({ key, item, handleDelete }) => {
  const [rating, setRating] = useState(item.rating);
  const [text, setText] = useState(item.text);

  const handleClick = () => {
    setRating((prev) => {
      return prev + 1;
    });
  };

  return (
    <Card reverse={false}>
      <div className="num-display">{rating}</div>
      <button
        className="close"
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        <FaTimes color="purple" />
        <FaHubspot />
      </button>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>Click</button>
    </Card>
  );
};

export default FeedbackItem;
