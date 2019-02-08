const initialState = Immutable.fromJS([
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
]);

const reducer = (currentState = initialState, action) => {
    console.assert(Immutable.isImmutable(currentState), 'Redux store should be an Immutable value.')
    // Handle actions here - make sure you don't mutate the state!

    let nextState = currentState

    // ACTION: Add a random circle
    if (action.type === "MAKE_CIRCLE") {
        nextState = currentState.push({ radius: action.radius, color: action.color })
    }

    return nextState;
}
