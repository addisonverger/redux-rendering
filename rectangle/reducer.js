const initialState = Immutable.fromJS({
    width: 100,
    height: 200,
    color: "#FF00FF"
});

const reducer = (currentState = initialState, action) => {
    console.assert(Immutable.isImmutable(currentState), 'Redux store should be an Immutable value.')
    // Handle actions here - make sure you don't mutate the state!

    let nextState = currentState

    const { type } = action;

    // ACTION 1 - Increment height by 10
    if (type === "INCREMENT_HEIGHT") {
      nextState = currentState.update('height', val => val + 10)
    }
    // ACTION 2 - Increment width by 10
    else if (type === "INCREMENT_WIDTH") {
      nextState = currentState.update('width', val => val + 10)
    }
    // ACTION 3 - Change the color
    else if (type === "CHANGE_COLOR") {
      nextState = currentState.set('color', action.color)
    }

    return nextState;
}
