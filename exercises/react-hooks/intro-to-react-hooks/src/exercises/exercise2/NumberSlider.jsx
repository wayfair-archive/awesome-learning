// ❌ Do not change this component! ❌
import React from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

const NumberSlider = ({
  handleChange,
  value
}) => (
  <Slider
    min={0}
    max={10}
    onChange={handleChange}
    value={value}
  />
);

export default NumberSlider;
