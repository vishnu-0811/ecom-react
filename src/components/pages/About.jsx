import React, { useContext } from "react";
import { Data } from "../../context/DataProvider";

const About = () => {
  const context = useContext(Data)
  return (
    <div className="container mt-5">
      <h1 className="text-center">About UGX {context.count}</h1>
      <p className="lead text-center">
        UGX is an E-commerce platform dedicated to providing high-quality computer components, with a strong commitment to customer satisfaction.
      </p>
      <div className="row">
        <div className="col-md-6">
          <h2>Our Mission</h2>
          <p>
            Our mission is centered around providing users with a convenient and reliable avenue to access a diverse range of top-notch computer components.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Our Values</h2>
          <ul>
            <li>Transparency</li>
            <li>Reliability</li>
            <li>Efficiency</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-5">
        <p>
          We prioritize transparency, reliability, and efficiency, continuously striving to exceed customer expectations at every opportunity.
        </p>
      </div>
    </div>
  );
};

export default About;
