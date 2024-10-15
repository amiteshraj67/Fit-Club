import React, { useState, useRef } from "react";
import "./JoinNow.css";
import emailjs from "@emailjs/browser";

const JoinNow = ({ onClose }) => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  // Send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i4uvxfm", // Replace with your actual EmailJS service ID
        "template_x3r7g0m", // Replace with your actual EmailJS template ID
        form.current,
        "umpvRytjOrPd9nDe6" // Replace with your EmailJS public API key
      )
      .then(
        (result) => {
          console.log("Email sent successfully!");
          setFormSubmitted(true); // Show thank you message on success
        },
        (error) => {
          console.log("Failed to send email...", error.text);
        }
      );
  };

  return (
    <div className="modal">
      <div className="modal-content">
        {formSubmitted ? (
          <div className="thank-you-message">
            <p>Thank you, {fullName}! We have received your information.</p>
            <button onClick={onClose}>Close</button>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <h2>Join Us</h2>
            <div>
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="user_name" // Ensure the field name matches the one in your EmailJS template
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="user_email" // Ensure the field name matches the one in your EmailJS template
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <button type="submit">Submit</button>
              <button type="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default JoinNow;
