import fb from "../img/fb.png";

const Homepage = () => (
  <div className="login">
    <div className="container">
      <div className="row">
        <div className="col-7">
          <div className="align-center">
            <div className="content">
              <img src={fb} alt="" />
              <p>Facebook helps you connect and share with the people in your life.</p>
            </div>
          </div>
        </div>
        <div className="col-5 col-xs-12">
          <div className="login-form">
            <form action="">
              <input id="email" type="text" placeholder="Email address or phone number" />
              <br />
              <input id="pass" type="text" placeholder="Password" />
              <br />
              <button id="login-btn" type="button">
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

export default Homepage;
