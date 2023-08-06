import React from 'react';

export default function Section (props) {

  return <div className={`section ${props.first ? "section--first" : ""}`}>
    {props.children}
  </div>
}