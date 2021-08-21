import React from 'react';
import './style.css';

export default function Pad(props) {
  console.log(props)
  return (
    <input type="button" value={props.data} onClick={props.onClick} />
  )
}