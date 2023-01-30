import emailjs from "@emailjs/browser";
import { Divider, Typography } from "@material-ui/core";
import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Fade from "react-reveal/Fade";
import UIContext from "../context/ui-context";

const Messages = () => {
  const { register, handleSubmit, errors } = useForm();

  // const serviceID = process.env.REACT_APP_SERVICE_ID;
  // const templateId = process.env.REACT_APP_TEMPLATE_ID;
  // const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const onSubmit = (data, reset) => {
    alert(
      `Thank you for your message ${data.user_name}. I'll get back to you as soon as possible. Best wishes and keep smiling, Eunice 😊✨`
    );

    console.log({
      full_data: data,
      from_name: data.user_name,
      message: data.message,
      reply_to: data.user_email,
    });
    sendForm(serviceID, templateId, {
      from_name: data.user_name,
      message: data.message,
      reply_to: data.user_email,
    });
    reset.target.reset();
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
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <input
              type="text"
              name="user_name"
              placeholder={"Please enter your name"}
              className="input"
              ref={register({
                required: "Please enter your name",
                maxLength: {
                  value: 20,
                  message: "Please enter a name fewer than 20 characters",
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
              type="email"
              name="user_email"
              placeholder={"Please enter your email"}
              className="input"
              ref={register({
                required: "Please enter your email",
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              })}
            />
            <Typography
              gutterBottom
              style={{ color: "#726F6E" }}
              variant="caption"
            >
              {errors.email && errors.email.message}
            </Typography>
            <textarea
              name="message"
              className="textArea"
              placeholder={"Please enter your message"}
              ref={register({
                required: "Oops, you forgot your message",
              })}
            />
            <Typography
              gutterBottom
              style={{ color: "#726F6E" }}
              variant="caption"
            >
              {errors.message && "Oops, you forgot your message"}
            </Typography>
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
