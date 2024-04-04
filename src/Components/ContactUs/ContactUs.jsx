import React, { useState, useEffect } from "react";
import "./ContactUs.css";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";
import ContactPopUp from "./ContactPopUp";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [ok, setOk] = useState(false);

  const isFormFilled =
    formData.firstName &&
    formData.lastName &&
    formData.phone &&
    formData.email &&
    formData.message;

  function handleSubmit(e) {
    e.preventDefault();
    if (isFormFilled) {
      setOk(true);
    } else {
      alert("Please fill out all the fields.");
    }
  }

  useEffect(() => {
    console.log(ok);
  }, [ok]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <ScrollToTopOnMount />
      <div className="contactUs">
        <div className="hero-section">
          <div className="hero-overlay">
            <h1 className="hero__overlay--text">Contact Us</h1>
          </div>
        </div>
        <div className="contactUs__small--content">
          <p className="small__content--text">
            We're here to help! Whether you have a question, feedback, or need
            support, we're all ears and ready to assist you. Reach out to us
            through any of the channels below, and we'll make sure to get back
            to you as soon as possible.
          </p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="input-text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                required
                className="input-text"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Phone"
                required
                className="input-text"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="input-text"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
                className="textarea"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="contact__submit--btn">
              <input
                type="submit"
                value="Submit"
                className="submit-btn"
                disabled={!isFormFilled}
              />
            </div>
          </form>
        </div>
      </div>
      {ok ? <ContactPopUp setOk={setOk} /> : null}
    </>
  );
};

export default ContactUs;

