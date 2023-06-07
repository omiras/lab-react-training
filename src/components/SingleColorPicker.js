import { useState } from 'react';

// 1. Elimina el estado de los componentes hijos. Que pasen a ser una propiedad del componente

export default function SingleColorPicker({ color, intensity, onColorChange }) {
  let bgColor = `rgb(${color == 'r' ? intensity : 0}, ${
    color == 'g' ? intensity : 0
  }, ${color == 'b' ? intensity : 0})`;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          border: '2px solid black',
          backgroundColor: bgColor,
        }}
      ></div>
      <label
        style={{
          textTransform: 'uppercase',
        }}
      >
        {color}:
      </label>
      <input
        type="number"
        min={0}
        max={255}
        value={intensity}
        onChange={onColorChange}
      ></input>
    </div>
  );
}
