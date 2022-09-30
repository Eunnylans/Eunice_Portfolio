import { Divider, Typography } from "@material-ui/core";
import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import UIContext from "../context/ui-context";

const Messages = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert(
      `Thanks for your message ${user_name}. I'll get back to you as soon as possible. Best wishes and keep smiling, Eunice Igbinedion 😊`
    );
    emailjs.sendForm(
      const serviceID = process.env.REACT_APP_SERVICE_ID;
       const templateId = process.env.REACT_APP_TEMPLATE_ID;
        form.current;
        const publicKey = process.env.REACT_APP_PUBLIC_KEY;
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result);
        },
        (error) => {
          console.log("There has been an error.  Here some thoughts on the error that occured", error);
        }
      );
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
          className={`svgcolor-light ${fadeIn ? "fadeIn" : null}`}
        >
          <path
            d="M0 0 L50 100 L100 0 Z"
            fill="#0cbfae"
            stroke="#0cbfae"
          ></path>
        </svg>
        <div id="contact" className={`wrapper ${fadeIn ? "fadeIn" : null}`}>
          <Fade left>
            <Typography
              className={`contactTypo ${fadeIn ? "fadeIn" : null}`}
              variant="h4"
            >
              CONTACT ME
            </Typography>
          </Fade>
          <Fade right>
            <Divider class="divider"></Divider>
          </Fade>
          <Typography
            className={`questionTypo ${fadeIn ? "fadeIn" : null}`}
            variant="body1"
          >
            Wanna get in touch or talk about a project? Feel free to contact me?
          </Typography>
          <form
            className={`form ${fadeIn ? "fadeIn" : null}`}
            onSubmit={sendEmail}
          >
            <input
              className="input"
              type="text"
              id="enter-name"
              name="user_name"
              placeholder={"Please enter your name"}
              ref={register({
                required: `${"Please enter a name fewer than 20 characters"}`,
                maxLength: {
                  value: 20,
                  message: `${"Please enter a name fewer than 20 characters"}`,
                },
              })}
            />
            <Typography
              gutterBottom
              style={{ color: "#726F6E" }}
              variant="caption"
            >
              {errors.name && errors.name.message}
            </Typography>

            <input
              className="input"
              type="email"
              id="enter-email"
              name="user_email"
              placeholder={"Please enter your email"}
              ref={register({
                required: `${"Invalid email address"}`,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: `${"Invalid email address"}`,
              })}
            />
            <Typography
              gutterBottom
              style={{ color: "white" }}
              variant="caption"
            >
              {errors.email && errors.email.message}
            </Typography>

            <textarea
              className="textArea"
              type="text"
              id="enter-message"
              name="message"
              placeholder={"Please enter your message"}
              ref={register({
                required: `${"Oops, you forgot your message"}`,
              })}
            ></textarea>
            <Typography
              gutterBottom
              style={{ color: "white" }}
              variant="caption"
            >
              {errors.message && "Oops, you forgot your message"}
            </Typography>

            <button
              type="submit"
              disableRipple="true"
              variant="contained"
              color="secondary"
              className={`submitButton ${fadeIn ? "fadeIn" : null}`}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Messages;
