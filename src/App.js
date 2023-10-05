import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "dummy.dummy@dummy.com",
      password: "12345678"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  const navbarStyle = {
    backgroundColor: "lightblue",
    padding: "10px"
  };

  const linkStyle = {
    textDecoration: "none",
    margin: "0 10px",
    color: "darkblue"
  };

  const renderDashboard = (
    <div className="dashboard">
      <nav style={navbarStyle}>
        <ul>
          <li>
            <a href="#" style={linkStyle}>
              Home
            </a>
          </li>
          <li>
            <a href="#" style={linkStyle}>
              Profile
            </a>
          </li>
          <li>
            <a href="#" style={linkStyle}>
              Messages
            </a>
          </li>
          <li>
            <a href="#" style={linkStyle}>
              Settings
            </a>
          </li>
          <li>
            <a href="#" style={linkStyle} onClick={() => setIsSubmitted(false)}>
              Logout
            </a>
          </li>
        </ul>
      </nav>
      <h2>Welcome to the Dashboard</h2>
      <div className="dropdown-container">
        <label>Select an Option:</label>
        <select>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <div class="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? renderDashboard : renderForm}
      </div>
    </div>
  );
}

export default App;
