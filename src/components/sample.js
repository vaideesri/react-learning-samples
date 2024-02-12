import React, { useState } from 'react';
import './style.css'; // Make sure to adjust the path based on your project structure

const AuthForm = () => {
  const [isSignUpMode, setSignUpMode] = useState(false);

  const toggleMode = () => {
    setSignUpMode((prevMode) => !prevMode);
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              {/* ... (social media icons) */}
            </div>
          </form>
          <form action="#" className="sign-up-form">
            {/* ... (similar structure for sign-up form) */}
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New to our community ?</h3>
            <p>
              Discover a world of possibilities! Join us and explore a vibrant
              community where ideas flourish and connections thrive.
            </p>
            <button className="btn transparent" onClick={toggleMode}>
              Sign up
            </button>
          </div>
          {/* ... (left panel image) */}
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of Our Valued Members</h3>
            <p>
              Thank you for being part of our community. Your presence enriches
              our shared experiences. Let's continue this journey together!
            </p>
            <button className="btn transparent" onClick={toggleMode}>
              Sign in
            </button>
          </div>
          {/* ... (right panel image) */}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
