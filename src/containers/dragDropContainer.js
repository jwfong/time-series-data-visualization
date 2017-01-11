import { connect } from 'react-redux';
import {  dataAdded } from '../actions/index';
import DragDrop from '../components/DragDrop';



const mapStateToProps = (state) => {
  return {
    state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendDataToStore: (data) => {
      dispatch(dataAdded(data))
    } 
  };
}

const DropContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DragDrop);

export default DropContainer;

