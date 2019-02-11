const initialState = [
    {
        user: {
            handle: "@officialjaden",
            username: "Jaden Smith",
            isVerified: true,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "The Moment That Truth Is Organized It Becomes A Lie",
        likes: 231,
        retweets: 12,
        replies: 21
    },
    {
        user: {
            handle: "@officialjaden",
            username: "Jaden Smith",
            isVerified: true,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
        likes: 112,
        retweets: 2,
        replies: 24
    },
    {
        user: {
            handle: "@DigitalCrafts",
            username: "DigitalCrafts Bootcamp",
            isVerified: false,
            profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
        },
        text: "Sign up for our next course plz!",
        likes: 11,
        retweets: 3,
        replies: 144
    }
]

var order = { likes: false, retweets: false, retweets: false }

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;
    const newState = [...state]

    // ACTION 1 - Sort by # likes
    if (type === "SORT_LIKES") {
        order.likes = !order.likes
        newState.sort((a, b) => order.likes ? b.likes - a.likes : a.likes - b.likes)
        return newState
    }

    // ACTION 2 - Sort by # retweets
    if (type === "SORT_RETWEETS") {
        order.retweets = !order.retweets
        newState.sort((a, b) => order.retweets ? b.retweets - a.retweets : a.retweets - b.retweets)
        return newState
    }

    // ACTION 3 - Sort by # replies
    if (type === "SORT_REPLIES") {
        order.replies = !order.replies
        newState.sort((a, b) => order.replies ? b.replies - a.replies : a.replies - b.replies)
        return newState
    }

    return state;
}
