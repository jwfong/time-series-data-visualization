import { connect } from 'react-redux';
//import { whatever Action } from ../actions;
import SideBar from '../components/Sidebar';

const mapStateToProps = (state) => {
  return {
    data: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
}

const SideContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);

export default SideContainer;

