import emailjs from "@emailjs/browser";
import { Divider, Typography } from "@material-ui/core";
import React, { useContext, useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import UIContext from "../context/ui-context";

const Messages = () => {
  const form = useRef();
  // const serviceID = process.env.REACT_APP_SERVICE_ID;
  // const templateId = process.env.REACT_APP_TEMPLATE_ID;
  // const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_706zsyo",
        "template_qssmyuo",
        form.current,
        "krEAf1iEyVC5pZLau"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sucessfully sent, thank you");
        },
        (error) => {
          console.log(error.text);
          alert(
            "There has been an error.  Here some thoughts on the error that occured"
          );
        }
      );
  };

  const uiCtx = useContext(UIContext);
  const ref = useRef();
  const [fadeIn, setFadeIn] = useState(false);

  return (
    <div className={`messages ${uiCtx.isDark ? "dark" : null}`} ref={ref}>
      <section className={`section ${fadeIn ? "fadeIn" : null}`}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          height="75"
          width="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="svgcolor-light"
        >
          <path
            d="M0 0 L50 100 L100 0 Z"
            fill="#cef1ee"
            stroke="#cef1ee"
          ></path>
        </svg>
        <div id="contact" className="wrapper">
          <Fade left>
            <Typography className="contactTypo">CONTACT ME</Typography>
          </Fade>
          <Fade right>
            <Divider className="divider"></Divider>
          </Fade>
          <Typography className="questionTypo" variant="body1">
            Feel free to get in touch or talk about a project
          </Typography>
          <form ref={form} onSubmit={sendEmail} className="form">
            <input
              type="text"
              name="user_name"
              placeholder={"Please enter your name"}
              className="input"
            />

            <input
              type="email"
              name="user_email"
              placeholder={"Please enter your email"}
              className="input"
            />
            <textarea
              name="message"
              className="textArea"
              placeholder={"Please enter your message"}
            />
            <input
              type="submit"
              value="Send"
              placeholder={"Please enter your message"}
              className="submitButton"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Messages;
