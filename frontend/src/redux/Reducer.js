export const initialState = {
    user: null,
};

export const actions = {
    name: "SET_USER",
};

const Reducer = (state, action) => {
    switch (action.type) {
        case actions.name:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
};

export default Reducer;