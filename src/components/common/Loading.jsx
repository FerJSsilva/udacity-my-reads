import React from 'react';
import './Loading.css';

const Loading = () => (
  <div className="overlay">
    <div className="lds-ripple"><div /><div /></div>
  </div>
);

export default Loading;
