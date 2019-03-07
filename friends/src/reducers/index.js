const initialState = {
    friends: [],
    // isLoading: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        // case LOGIN_START:
        //     return {
        //         ...state,
        //         error: '',
        //         isLoading: true
        //     }

        default:
            return state;
    }
};

export default reducer;