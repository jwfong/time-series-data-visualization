import React from 'react';
// import SideBar from './Sidebar';
// import MainPanel from './MainPanel';
import PanelContainer from '../containers/panelContainer';
import SideContainer from '../containers/sideContainer';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';


const appStyles = {
  width: '100%',
  height: '100vh',
  backgroundColor: '#181818',
  color: "#ababab",
  overflow: 'auto',
  position: 'fixed'
}

const App = () => (
  <div style={appStyles}>
    <SideContainer />
    <PanelContainer />
  </div>  
)

export default DragDropContext(HTML5Backend)(App);