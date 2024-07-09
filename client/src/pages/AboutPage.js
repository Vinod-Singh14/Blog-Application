import React from 'react';
import { Link } from 'react-router-dom';


const AboutPage = () => {
  return (
    <>
      <div className="container mt-5">
        {/* About Us */}
        <div className="row mt-5">
          <h2 className="text-center fw-bold text-primary">About Us</h2>
          <div className="line line-105 mx-auto mt-2"></div>
          <p className="text-center mt-3 fs-5">
            Welcome to <strong>My Blog App</strong>, where passion meets words and ideas come to life. We are a team of dedicated individuals who share a common love for technology, creativity, and the art of expression.
          </p>
        </div>
        {/* Our Mission */}
        <div className="row mt-5">
          <h2 className="text-center fw-bold text-primary">Our Mission</h2>
          <div className="line line-105 mx-auto mt-2"></div>
          <p className="text-center mt-3 fs-5">
            At <strong>My Blog App</strong>, our mission is to provide a platform for writers, thinkers, and creators to share their stories and insights with the world. We believe in the power of words to inspire, educate, and connect people from all walks of life.
          </p>
        </div>
        {/* What We Offer */}
        <div className="row mt-5">
          <h2 className="text-center fw-bold text-primary">What We Offer</h2>
          <div className="line line-155 mx-auto mt-2"></div>
          <div className="d-flex my-4 justify-content-between">
            <div className="card shadow">
              <img
                src="https://www.lunadatasolutions.com/hubfs/Cognitive_Diversity_Solutions.jpeg"
                className="card-img-top"
                alt="Diverse Perspectives"
              />
              <div className="card-body">
                <h5 className="card-title">Diverse Perspectives</h5>
                <p className="card-text">
                  Explore a range of topics and viewpoints as our diverse team of writers brings you content that spans technology, lifestyle, culture, and more.
                </p>
              </div>
            </div>
            <div className="card shadow">
              <img
                src="https://assets.entrepreneur.com/content/3x2/2000/20180730112406-shutterstock-1043910877.jpeg"
                className="card-img-top"
                alt="Engaging Content"
              />
              <div className="card-body">
                <h5 className="card-title">Engaging Content</h5>
                <p className="card-text">
                  From thought-provoking articles to informative guides, we strive to deliver content that captivates and enriches our readers.
                </p>
              </div>
            </div>
            <div className="card shadow">
              <img
                src="https://thumbs.dreamstime.com/z/diverse-group-people-interacting-45539510.jpg"
                className="card-img-top"
                alt="Community Interaction"
              />
              <div className="card-body">
                <h5 className="card-title">Community Interaction</h5>
                <p className="card-text">
                  Join our community of readers and writers to engage in discussions, share your thoughts, and connect with like-minded individuals.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Our Technology Stack */}
        <div className="row mt-5">
          <h2 className="text-center fw-bold text-primary">Our Technology Stack</h2>
          <div className="line line-25 mx-auto mt-2"></div>
          <p className="text-center mt-3 fs-5">
            <strong>My Blog App</strong> is powered by the MERN stack – MongoDB, Express.js, React, and Node.js. This modern and robust technology stack ensures a seamless and responsive experience for our users.
          </p>
        </div>
        {/* Contact Us */}
        <div className="row mt-5">
          <h2 className="text-center fw-bold text-primary">Contact Us</h2>
          <div className="line line-105 mx-auto mt-2"></div>
          <p className="text-center mt-3 fs-5">
            We value your feedback and suggestions. Feel free to reach out to us at <Link to="mailto:myblogapp@gmail.com">myblogapp@gmail.com</Link> or connect with us on social media.
          </p>
        </div>
      </div>
      {/* Conclusion */}
      <div className="container-fluid w-100 mt-5 py-2 bg-primary text-white">
        <p className="text-center mt-3 fs-5">
          Thank you for being part of the <strong>My Blog App</strong> community. Happy reading!
        </p>
      </div>
    </>
  );
};

export default AboutPage;
