import { useContext, useEffect } from 'react';
import UIContext from '../context/ui-context';
import Toggle from 'react-toggle';
import { IoSunnySharp, IoMoonSharp } from 'react-icons/io5';

const ThemeToggleButton = () => {
  const uiCtx = useContext(UIContext);
  //console.log(uiCtx.isDark);

  const toggleThemeButton = (e) => {
    uiCtx.setIsDark();
    //console.log(uiCtx.isDark);
  };

  //   const systemPrefersDark = useMediaQuery()
  //     {
  //       query: '(prefers-color-scheme: dark)',
  //     },
  //     undefined,
  //   );

  useEffect(() => {
    if (uiCtx.isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [uiCtx.isDark]);

  return (
    <Toggle
      className='dark-mode-toggle'
      aria-label='Dark mode toggle'
      checked={uiCtx.isDark}
      //   checked={true}
      icons={{
        checked: <IoMoonSharp className='theme-icon-dark' />,
        unchecked: <IoSunnySharp className='theme-icon-light' />,
      }}
      onChange={toggleThemeButton}
    />
  );
};

export default ThemeToggleButton;
