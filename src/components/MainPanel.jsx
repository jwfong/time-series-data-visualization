import React from 'react';
import Chart from './d3ChartComponents/Chart'
import DropContainer from '../containers/dragDropContainer';

const mainPanelStyle = {
  width: 'auto',
  height: '100vh',
  backgroundColor: '#282828',
  marginLeft: 200,
  overflow: 'hidden',
  position: 'static',
  textAlign: 'center',
}

const MainPanel = ({state}) => {

  return (
    <div style={mainPanelStyle}>
      <h1>Visualize</h1>
      {!state.dataReceived ? <DropContainer /> : <Chart {...state}/> }
    </div>
)
}

export default MainPanel;