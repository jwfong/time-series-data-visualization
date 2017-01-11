import React from 'react';
import { connect } from 'react-redux';
import CurrentPlot from './CurrentPlot';

const chartStyles = {
  width: 800,
  height: 700,
  padding: 30,
  backgroundColor: 'white'
}


const Chart = (props) => {

    return<div style={chartStyles}>
            <h1>Playing With React and D3</h1>
            <svg height={700} width={800} >
              <CurrentPlot {...props.data}/>
            </svg>
          </div>
}

export default connect()(Chart);