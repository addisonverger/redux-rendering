const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState().toJS()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store

const addCircleButton = document.getElementById('addCircle')
addCircleButton.addEventListener('click', e => dispatch({ type: "MAKE_CIRCLE", radius: randomRadius(), color: randomColor() }))

function randomColor () {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomRadius () {
  return Math.floor(Math.random() * 101)
}
