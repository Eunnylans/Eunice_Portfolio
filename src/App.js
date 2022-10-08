import React, { useContext, useEffect } from "react";
import "./App.scss";
import Aboutme from "./Components/AboutMe";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import HamburgerMenu from "./Components/HamburgerMenu";
import Hero from "./Components/Hero";
import Messages from "./Components/Messages";
import Navbar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Techskills from "./Components/Techskills";
import UIContext from "./context/ui-context";
import useWindowDimensions from "./hooks/useWindowDimensions";
import ScrollToTopIcon from "./UIcomponents/ScrollToTopIcon";

function App() {
  const uiCtx = useContext(UIContext);
  const { width: vw } = useWindowDimensions();

  useEffect(() => {
    if (vw <= 420) {
      uiCtx.setMobile();
    } else {
      uiCtx.setNotMobile();
    }
  }, [vw, uiCtx]);

  return (
    <React.Fragment>
      {!uiCtx.mobile && <Navbar />}
      {uiCtx.mobile && <HamburgerMenu />}

      <main>
        <Hero />
        <Aboutme />
        <Techskills />
        <Projects />
        <Messages />
      </main>
      <Footer />
      {vw > 767 && <Contacts />}
      <ScrollToTopIcon />
    </React.Fragment>
  );
}

export default App;
