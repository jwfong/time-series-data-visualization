import React from 'react';
import { DragSource } from 'react-dnd';

const fieldStyles = {
  width: '100%',
  height: 35,
  margin: '0 auto',
  fontSize: '2em',
  position: 'static'
}

const cardSource = {
  beginDrag(props) {
    // Return the data describing the dragged item
    const item = { id: props.id };
    return item;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    // When dropped on a compatible target, do something
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    CardActions.moveCardToList(item.id, dropResult.listId);
  }
};

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}

const FieldItem = ({item, connectDragSource, isDragging}) => connectDragSource(
       
    <div style={fieldStyles}>
      { console.log(typeof(item)) }
      <span> {`${item}`} </span>
    </div>
  
)

export default DragSource('string', cardSource, collect)(FieldItem);