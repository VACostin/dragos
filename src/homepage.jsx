import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fb from "../img/fb.png";
import "./homepage.css";

const Homepage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const goToAccount = (event) => {
    // Redirect to Page2 with input values as state
    event.preventDefault();
    if (username && password) navigate("/account", { state: { username, password } });
  };

  const onUserChange = (event) => {
    setUsername(event.target.value);
  };

  const onPassChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className="align-center">
              <div className="content">
                <img src={fb} alt="" />
                <p>Connect with friends and the world around you on Facebook.</p>
              </div>
            </div>
          </div>
          <div className="col-5 col-xs-12">
            <div className="login-form">
              <form action="" onSubmit={goToAccount}>
                <input
                  id="email"
                  value={username}
                  type="text"
                  placeholder="Email address or phone number"
                  onChange={onUserChange}
                  required
                />
                <br />
                <input
                  id="pass"
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={onPassChange}
                  required
                />
                <br />
                <button id="login-btn" type="submit" onClick={goToAccount}>
                  Log In
                </button>
                <br />
                <a href="https://www.facebook.com">Forgotten password?</a>
                <br />
                <button
                  id="create-btn"
                  type="button"
                  // eslint-disable-next-line no-return-assign
                  onClick={() => (window.location.href = "http://www.facebook.com")}
                >
                  Create New Account
                </button>
                <br />
              </form>
            </div>
            <footer>
              <a
                href="https://www.google.com"
                style={{ fontWeight: "bold", color: "var(--black)", textDecoration: "none" }}
              >
                Create a Page
              </a>{" "}
              for a celebrity, band or business.
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
