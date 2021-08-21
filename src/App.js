import React from 'react';
import './style.css';
import Drum from './Drum';

export default function App() {
  const onClick = () => {
    const audio = document.getElementById();
  };
  const data = ""
  return (
    <div>
      <h1>Hello Drum Machine!</h1>
      <p>Start pressing to see some magic happen :)</p>
      <div id="drum-machine">
        <Drum data={data} onClick={onClick} />
      </div>
    </div>
  );
}
