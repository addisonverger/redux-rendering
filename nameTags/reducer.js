const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // Add a Name Tag
    if (type === "MAKE_NAMETAG") {
      return [
        ...state,
        action.input
      ]
    }

    return state;
}
