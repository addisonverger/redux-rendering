const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store
const sortLikesButton = document.getElementById('sortLikes')
sortLikesButton.addEventListener('click', e => dispatch({ type: "SORT_LIKES" }))

const sortRetweetsButton = document.getElementById('sortRetweets')
sortRetweetsButton.addEventListener('click', e => dispatch({ type: "SORT_RETWEETS" }))

const sortRepliesButton = document.getElementById('sortReplies')
sortRepliesButton.addEventListener('click', e => dispatch({ type: "SORT_REPLIES" }))
