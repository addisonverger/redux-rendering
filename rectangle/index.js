const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState().toJS()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store

const incrementHeightButton = document.getElementById('height')
incrementHeightButton.addEventListener('click', e => dispatch({ type: "INCREMENT_HEIGHT" }))

const incrementWidthButton = document.getElementById('width')
incrementWidthButton.addEventListener('click', e => dispatch({ type: "INCREMENT_WIDTH" }))

const redButton = document.getElementById('red')
redButton.addEventListener('click', e => dispatch({ type: "CHANGE_COLOR", color: "#FF0000" }))

const blueButton = document.getElementById('blue')
blueButton.addEventListener('click', e => dispatch({ type: "CHANGE_COLOR", color: "#0000FF" }))
