import React, { useRef, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { Typography } from "@mui/material";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
      emailjs.sendForm("service_7j3ie3w", "template_89bdzaj", formRef.current, "fc5WnmdQW9mqsYcP7")
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-left">
            <Typography className="typography">
              <h1>Free Project Consultation</h1>
              <div className="contact-info">
                <EmailIcon />
                <p>davelpz15@gmail.com</p>
              </div>
              <div className="contact-info">
                <PhoneIcon />
                <p>(602)-350-9341</p>
              </div>
            </Typography>
          </div>

          <div className="contact-right">
            <Typography className="typography">
              <h3>Tell me about your Project</h3>
              <p>
                Get in Touch by giving me a call or shooting me an email.
                Consultations are free and I'm eager to start working with you!
              </p>
            </Typography>
            <form
              className="contact-form"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <input type="text" placeholder="Name" name="user_name" required />
              <input
                type="text"
                placeholder="Subject"
                name="user_subject"
                required
              />
              <input
                type="text"
                placeholder="Email Address"
                name="user_email"
                required
              />
              <textarea
                rows="5"
                placeholder="Leave me a message here..."
                name="message"
                required
              ></textarea>
              <div className="sidebyside-btn-container">
                <button>Send</button>
              </div>
              {done && " Message sent, I'll be in touch soon!"}
            </form>
          </div>
        </div>
        <div className="contact-img-wrapper">
          <img src="https://source.unsplash.com/goholCAVTRs" alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact;
