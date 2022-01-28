import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import "./Form.css";

function Form() {
  //test if first render
  const firstRender = useRef(true);
  //
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!error) {
      console.log("submitting form with", email);
    }
  };

  useEffect(() => {
    //skip validation on initial render
    if (firstRender.current) {
      //no longer inital render
      firstRender.current = false;
      return;
    }

    const formValidation = () => {
      const emailValidation = !/\S+@\S+\.\S+/.test(email);

      if (emailValidation) {
        setError("Please provide a valid email");
      } else {
        setError(null);
      }
    };

    setDisabled(formValidation());
  }, [email]);

  return (
    <div className="form-wrapper">
      <form
        className={error ? "border-red" : "border-default"}
        onSubmit={onSubmit}
      >
        <input
          placeholder="Email Address"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && (
          <img
            className="error-img"
            src="https://raw.githubusercontent.com/katarzyna-kw/landing-page-preview/9b5f41dec688c2ad0edf8bf13a94743021fe5bd8/public/images/icon-error.svg"
            alt="error: enter valid email address"
          />
        )}
        <button className="btn" type="submit" disabled={disabled}>
          <img
            src="https://raw.githubusercontent.com/katarzyna-kw/landing-page-preview/d39487d8743a0fb56e66db0dc6f974936e478f71/public/images/icon-arrow.svg"
            alt="click to submit email address"
          />
        </button>
      </form>
      <div className="error-wrapper">
        {error && <p className="error-body">{error}</p>}
      </div>
    </div>
  );
}

export default Form;
