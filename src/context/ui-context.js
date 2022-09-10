import React from 'react';
import { useState } from 'react';

const UIContext = React.createContext({
  mobile: false,
  navIsSticky: false,
  isDark: false,
  setMobile: () => {},
  setNotMobile: () => {},
  setNavIsSticky: () => {},
  setNavIsNotSticky: () => {},
  setIsDark: () => {},
});

export const UIContextProvider = (props) => {
  const [mobile, setMobile] = useState(false);
  const [navIsSticky, setNavIsSticky] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const setMobileHandler = () => {
    setMobile(true);
  };

  const setNotMobileHandler = () => {
    setMobile(false);
  };

  const setNavIsStickyHandler = () => {
    if (!mobile) {
      setNavIsSticky(true);
    } else {
      setNavIsSticky(false);
    }
  };

  const setNavIsNotStickyHandler = () => {
    setNavIsSticky(false);
  };

  const setIsDarkHandler = () => {
    setIsDark((prev) => !prev);
  };

  const contextValue = {
    mobile,
    navIsSticky,
    isDark,
    setMobile: setMobileHandler,
    setNotMobile: setNotMobileHandler,
    setNavIsSticky: setNavIsStickyHandler,
    setNavIsNotSticky: setNavIsNotStickyHandler,
    setIsDark: setIsDarkHandler,
  };

  return (
    <UIContext.Provider value={contextValue}>
      {props.children}
    </UIContext.Provider>
  );
};

export default UIContext;
