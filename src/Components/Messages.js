import emailjs from "@emailjs/browser";
import { Divider, Typography } from "@material-ui/core";
import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import UIContext from "../context/ui-context";

const Messages = (props) => {
  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_706zsyo",
        "template_qssmyuo",
        e.target,
        "krEAf1iEyVC5pZLau"
      )
      .then(
        (result) => {
          console.log("Sucessful!", result.text);
        },
        (error) => {
          console.log("Failed", error.text);
        }
      );

    e.target.reset();
    showResult(true);

    // hide result
    setTimeout(() => {
      showResult(false);
    }, 7000);
  };

  const uiCtx = useContext(UIContext);
  const ref = useRef();
  const [fadeIn, setFadeIn] = useState(false);

  const onScroll = () => {
    const topPos = ref.current.offsetTop;
    const bottomPos = ref.current.offsetTop + ref.current.offsetHeight;

    if (
      topPos + 150 < window.scrollY + window.innerHeight &&
      bottomPos > window.scrollY
    ) {
      setFadeIn(true);
    } else {
      setFadeIn(false);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Result = () => {
    return (
      <p
        style={{
          fontSize: "10px",
          padding: "10px",
        }}
      >
        Thank you for your message. I'll get back to you as soon as possible.
        Best wishes and keep smiling, Eunice 😊✨
      </p>
    );
  };

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
            fill="#f6f6f6"
            stroke="#f6f6f6"
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
              required
              placeholder={"Please enter your name"}
              className="input"
            />

            <input
              type="email"
              name="user_email"
              required
              placeholder={"Please enter your email"}
              className="input"
            />
            <textarea
              name="message"
              required
              className="textArea"
              placeholder={"Please enter your message"}
            />
            <input
              type="submit"
              value="Send"
              placeholder={"Please enter your message"}
              className="submitButton"
            />
            <div className="row">{result ? <Result /> : null}</div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Messages;
