import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

// 2. PAsamos como props el valor de la intensidad de cada SingleColorPicker
export default function RGBColorPicker() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(150);
  const [blue, setBlue] = useState(150);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      Soy Color RGB Picker creeme.
      <SingleColorPicker
        color="r"
        intensity={red}
        onColorChange={(e) => setRed(e.target.value)}
      />
      <SingleColorPicker
        color="g"
        intensity={green}
        onColorChange={(e) => setGreen(e.target.value)}
      />
      <SingleColorPicker
        color="b"
        intensity={blue}
        onColorChange={(e) => setBlue(e.target.value)}
      />
      <div
        style={{
          width: '40px',
          height: '40px',
          border: '2px solid black',
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></div>
      {`rgb(${red}, ${green}, ${blue})`}
    </div>
  );
}
