import { useContext } from "react";
import UIContext from "../context/ui-context";

const Footer = () => {
  const uiCtx = useContext(UIContext);

  return (
    <footer className={`footer ${uiCtx.isDark ? "dark" : null}`}>
      <p>
        Made with ♥ by Eunnylans © {new Date().getFullYear()}
        <br /> All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
