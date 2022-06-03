import React from "react";
import "./Profile.css";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/igbinedion.abieyuwa">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/eunice-abieyuwa-igbinedion-82bb88117/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.xing.com/profile/EuniceAbieyuwa_Igbinedion/cv">
                <i className="fa fa-xing"></i>
              </a>
              <a href="https://www.instagram.com/leuchtender_stern18/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/eunnylans">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCzfYTsnAfmb8P8Xda5mDNQQ">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://github.com/Eunnylans">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M{" "}
              <span className="highlighted-text">
                Eunice Abieyuwa Igbinedion
              </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🌐",
                    1000,
                    "Frontend Developer 👩‍💻",
                    1000,
                    "React Developer 👩‍💻",
                    1000,
                    "Database Administrator 📊",
                    1000,
                    "Sales Enthusiast 🔮",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Master of building application with Frontend operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="MyCV.pdf" download="Eunice.A Igbinedion MyCV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
