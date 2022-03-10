import React from "react";
import { Link } from "react-router-dom";
import Card from "../component/shared/Card";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>

        <p>
          <Link to={"/"}>Back to Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
