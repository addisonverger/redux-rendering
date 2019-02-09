const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store

const card1Button = document.getElementById("card1Button")
card1Button.addEventListener('click', e => dispatch({
  type: "RANDOM_CARD",
  index: 0,
  value: randomValue(),
  suit: randomSuit()
}))

const card2Button = document.getElementById("card2Button")
card2Button.addEventListener('click', e => dispatch({
  type: "RANDOM_CARD",
  index: 1,
  value: randomValue(),
  suit: randomSuit()
}))

function randomValue () {
  valueArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'Q', 'K']
  var random = valueArray[Math.floor(Math.random() * valueArray.length)];
  return random
}

function randomSuit () {
  valueArray = ['C', 'D', 'H', 'S']
  var rand = valueArray[Math.floor(Math.random() * valueArray.length)];
  return rand
}
