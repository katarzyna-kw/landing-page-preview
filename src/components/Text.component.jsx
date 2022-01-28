import React from "react";
import "../App.css";
import "./Text.css";
import Form from "./Form.component";
import Footer from "./Footer.component";

function Text() {
  return (
    <div className="text-wrapper">
      <h1 className="text-greeting__light">We're</h1>
      <h1 className="text-greeting__bold">coming soon</h1>
      <p className="text-body">
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
      <Form />
      <Footer />
    </div>
  );
}

export default Text;
