import { useContext } from 'react';
import { FaLinkedin, FaTwitterSquare, FaGithub, FaXing } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';
import UIContext from '../context/ui-context';

const contactInfo = [
  {
    name: 'GitHub',
    link: 'https://github.com/Eunnylans',
    icon() {
      return <FaGithub className='contact-icon github' />;
    },
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/euniceigbinedion/',
    icon() {
      return <FaLinkedin className='contact-icon linkedin' />;
    },
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/eunnylans',
    icon() {
      return <FaTwitterSquare className='contact-icon twitter' />;
    },
  },
  {
    name: 'Xing',
    link: 'https://www.xing.com/profile/EuniceAbieyuwa_Igbinedion/cv',
    icon() {
      return <FaXing className='contact-icon blog' />;
    },
  },
];

const Contacts = () => {
  const uiCtx = useContext(UIContext);

  const contact = contactInfo.map((info) => (
    <div className='contact-item' key={info.name}>
      <a
        className='contact-link'
        href={info.link}
        key={info.name}
        target='_blank'
        rel='noopener noreferrer'
      >
        {info.icon()}
      </a>
    </div>
  ));

  return (
    <div className={`contacts-container ${uiCtx.isDark ? 'dark' : null}`}>
      <div className='contacts-iconList'>{contact}</div>
      <div className='contacts-line' />
    </div>
  );
};

export default Contacts;
