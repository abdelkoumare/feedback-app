import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  //   let ratingTotal = 0;
  //   feedback.forEach((item) => {
  //     ratingTotal += item.rating;
  //   });
  let ratingTotal = feedback.reduce((total, current) => {
    return total + current.rating;
  }, 0);
  let average = ratingTotal / feedback.length;
  average = average.toFixed(1);
  return (
    <div className="feedback-stats">
      <h4> {feedback?.length} Reviews</h4>
      <h4> Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
