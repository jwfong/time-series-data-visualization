import React from 'react';
import * as d3 from 'd3';
import Axis from './Axis';

const xScale = d3.scaleLinear()
    .domain([-50, 650])
    .range([0, 700]);

const yScale = d3.scaleLinear()
    .domain([-50, 555])
    .range([600, 0]);


const xSettings = {
  translate: 'translate(0, 550)',
  scale: xScale,
  orient: 'bottom'
};

const ySettings = {
  translate: 'translate(50, 0)',
  scale: yScale,
  orient: 'left'
};


const CurrentPlot = () => {
  return (
    <g>
      <Axis {...xSettings}/>
      <Axis {...ySettings}/>
    </g>
  )
}

export default CurrentPlot;