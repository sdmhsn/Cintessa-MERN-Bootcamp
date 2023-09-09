import React from 'react';

export default function Button(props) {
  return (
    <div>
      <button className={props.class}>{props.children}</button>
    </div>
  );
}
