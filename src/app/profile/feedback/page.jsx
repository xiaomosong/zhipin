'use client';
import React, { useState } from "react";

const Child = ({ messageColor }) => {
  const [color,setColor] = useState(messageColor)
  return <div style={{ color: messageColor }}>hello world</div>;
};
export default function Feedback() {
  const [color,setColor] = useState('red')
  return (
    <div>
      Feedback
      <button onClick={() => setColor('purple')}>set color</button>
      <Child messageColor={color}/>
    </div>
  );
}
