import FeedbackForm from "./component/FeedbackForm";
import FeedbackList from "./component/FeedbackList";
import FeedbackStats from "./component/FeedbackStats";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./pages/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";
function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text="Feedback App" />
        <div className="container">
          <Routes>
            <Route
              exact
              path={"/"}
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
