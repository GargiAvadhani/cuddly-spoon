import React, { useState } from 'react';
import axios from 'axios';
import './ContactFormStyles.css';

function ContactForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/contact", user);
      console.log("form.js - ", response.data);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setUser({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 10000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <h1>Seva Animal Welfare Charitable Trust</h1>
      <h2>Send a message to us!</h2>
      {isSubmitted ? (
        <div className="submission-box">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Subject: {user.subject}</p>
          <p>Message: {user.message}</p>
          <p>Thank you for your message! We will get back to you soon.</p>
          <button onClick={() => setIsSubmitted(false)}>Update</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} method="post" action="/">
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            value={user.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            maxLength="50"
            value={user.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
