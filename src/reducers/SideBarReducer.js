const initialState = {
  dataReceived: false,
  dataFields: [],
  data: [],
}

const parseCSV = function(arr) {
  let obj = {};
  
  let fields = arr[0].split(',');

  for (let item of fields) {
    obj[item] = [];
  };


  for(let i = 1; i < arr.length; i++) {
    let line = arr[i].split(',');
    for(let j = 0; j < line.length; j++) {
      obj[fields[j]].push(line[j]);
    }
  }

  return obj;
}

const sideBarDataArr = (state=initialState, action) => {
  switch (action.type) {
    case 'DATA_ADDED':
      return Object.assign({}, state, {
        dataReceived: true,
        dataFields: action.data[0].split(','),
        data: parseCSV(action.data)
      })
    default:
      return state;
  }
}

export default sideBarDataArr;