import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";
// import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState(FeedbackData);

  useEffect(() => {
    fetchFeedback();
  }, []);

  //Fetch data

  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:50000/feedback?_sort=id&order=desc`
      // `/feedback?_sort=id&order=desc` if added proxy http://localhost:50000
    );
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  //Delete feedback
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      await fetch(`http://localhost:50000/feedback/${id}`, {
        method: "DELETE",
      });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Add Feedback
  const handleAdd = async (feedbackdata) => {
    // feedbackdata.id = uuidv4();
    await fetch("http://localhost:50000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedbackdata),
    });

    setFeedback([...feedback, feedbackdata]);
  };

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Set Feedback to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  //update feedback
  const updateFeedback = async (id, updateItem) => {
   await fetch(`http://localhost:50000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateItem),
    });

    setFeedback(feedback.map((item) => (item.id === id ? updateItem : item)));

    setFeedbackEdit({
      item: {},
      edit: false,
    });

    // setFeedback(
    //   feedback.map((item) =>
    //     // item.id === id ? { ...item, ...updateItem } : item
    //     item.id === id ? { ...item, ...updateItem } : item
    //   )
    // );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleDelete,
        handleAdd,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
