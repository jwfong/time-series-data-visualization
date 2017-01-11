import React, { Component } from 'react';
import FieldItem from './FieldItem';


const sideBarStyle = {
  width: 200,
  height: '100vh',
  backgroundColor: '#181818',
  float: 'left',
  position: 'fixed',
  overflow: 'hidden',
  zIndex: 100
}

const SideBar = ({data}) => (
  <div style={sideBarStyle} id={'sideBar'}>
    <h1>Data names</h1>
    {data.dataFields.map((item, i) => 
      <FieldItem key={i} item={item}/>
    )}

  </div>
)

export default SideBar;
