import React from 'react';
import MainPanel from '../components/MainPanel';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }

}


const PanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPanel)

export default PanelContainer;
