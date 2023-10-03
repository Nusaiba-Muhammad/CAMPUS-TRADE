import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <form className="my-form">
        <svg
          width={32}
          className="svg-icon signup__trigger signup__trigger--fixed "
          viewBox="0 0 20 20"
          style={{ cursor: "pointer" }}
        >
          <path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>
        </svg>
        <span className="signup-welcome-row">
          <h1>Login</h1>
          <span className="spantxt">
            Hey! Enter your details to login to your CampusTrade account.
          </span>
        </span>
        <span className="socials-row">
          <a href="#hg" title="Use Google">
            <img src="google.png" alt="Google" />
            Login with Google
          </a>
        </span>
        <span className="divider">
          <span className="divider-line"></span>
          OR
          <span className="divider-line"></span>
        </span>
        <div className="my-form_content">
          <div className="text-field">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              autocomplete="off"
              required
            />
          </div>
          <div className="text-field">
            <label for="pword">Password</label>
            <input
              type="password"
              id="pword"
              name="email"
              placeholder="Must be 8 characters"
              autocomplete="off"
              required
            />
          </div>
          <br />
          <div className="chkbx">
            <input type="checkbox" name="os" id="ch1" />
            <label for="ch1">Remember me</label>
          </div>
          <input
            type="submit"
            className="my-form_button"
            value="Log in"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="my-form_actions">
          <span>
            <div>
              By loging in you agree to our{" "}
              <a href="#wd" title="reset t">
                Terms
              </a>
              and{" "}
              <a href="#dv" title="reset c">
                {" "}
                Conditions
              </a>
            </div>
          </span>
          <br />
        </div>
        <div className="my-form_signin">
          don't have an account?
          <a href="#dfs" title="sign-in">
            Sign-up
          </a>
        </div>
      </form>
      {/* <div className="_container">
        <form className="_login form">
          <svg
            width={32}
            className="svg-icon signup__trigger signup__trigger--fixed "
            viewBox="0 0 20 20"
            style={{ cursor: "pointer" }}
          >
            <path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>
          </svg>
          <h2 className="_login__title">log in to Modiste</h2>
          <div className="_login__row">
            <label className="_login__label" for="lg-em">
              e-mail
            </label>
            <input
              className="_login__input"
              id="lg-em"
              type="email"
              placeholder="example@email.com"
            />
          </div>
          <div className="_login__row">
            <label className="_login__label" for="lg-ps">
              password
            </label>
            <input
              className="_login__input"
              id="lg-ps"
              type="password"
              placeholder="**********"
            />
          </div>
          <div className="_login__row">
            <button className="_login__button" type="submit">
              sign in
            </button>
          </div>
          <div className="_login__row">
            <a className="_login__link">forgot your password?</a>
          </div>
          _
        </form>
      </div> */}
    </div>
  );
}
