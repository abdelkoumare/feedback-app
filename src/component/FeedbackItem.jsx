import React, { useState } from "react";
import Card from "./shared/Card";
import { FaTimes, FaHubspot, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ key, item }) => {
  const { editFeedback, handleDelete } = useContext(FeedbackContext);
  const [rating, setRating] = useState(item.rating);
  //   const [text, setText] = useState(item.text);

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
        {/* <FaHubspot /> */}
      </button>
      <button
        className="edit"
        onClick={() => {
          editFeedback(item);
        }}
      >
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      <button onClick={handleClick}>Click</button>
    </Card>
  );
};

export default FeedbackItem;
