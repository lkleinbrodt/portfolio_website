import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icons" />
            <h4>Email</h4>
            <h5>lkleinbrodt@gmail.com</h5>
            <a
              href="mailto:lkleinbrodt@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/*set up using EmailJS, check with this link: https://www.youtube.com/watch?v=G-Cr00UYokU&ab_channel=EGATOR}
        {/* <form action="">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
