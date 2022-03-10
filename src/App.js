import { useState } from "react";
import FeedbackForm from "./component/FeedbackForm";
import FeedbackList from "./component/FeedbackList";
import FeedbackStats from "./component/FeedbackStats";
import Header from "./component/Header";
import FeedbackData from "./data/FeedbackData";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./pages/AboutIconLink";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeeback = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (feedbackdata) => {
    feedbackdata.id = uuidv4();
    setFeedback([...feedback, feedbackdata]);
  };
  return (
    <Router>
      <Header text="Feedback App" />
      <div className="container">
        <Routes>
          <Route
            exact
            path={"/"}
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeeback}
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
