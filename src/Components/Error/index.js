import React from 'react';

export default function Error(props) {
  return(
    <div className="error-container">
      <p className="error">{props.body}</p>
    </div>
  )
}