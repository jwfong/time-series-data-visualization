import React from 'react';
import FileDragAndDrop from 'react-file-drag-and-drop';
import dataAdded from '../actions/index'

let data;

const style = {
  width: '80vw',
  height: '60vh',
  backgroundColor: 'white',
  color: 'black',
  textAlign: 'center',
  marginLeft: 25
}

const DragDrop = ( {sendDataToStore} ) => {

  const handleDrop = (dataTransfer) => {
    let files = dataTransfer.files;
    let fr = new FileReader();

    fr.onload = function(e) {
      data = e.target.result.split('\n');
      sendDataToStore(data);
    }

    fr.readAsText(files[0]);
  }

  return (
    <div style={style}>
        <FileDragAndDrop onDrop={handleDrop}>
          <h1>Please drop your files</h1>
        </FileDragAndDrop>      
    </div>
  )

}

export default DragDrop;
