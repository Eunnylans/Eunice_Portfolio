import React from 'react';

const SectionTitle = (props) => {
  return (
    <h2 className={`section-title ${props.className}`} ref={props.ref}>
      {props.children}
    </h2>
  );
};

export default SectionTitle;
