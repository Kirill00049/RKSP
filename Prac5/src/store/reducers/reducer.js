const ADD_CASH = "ADD_CASH";
const GET_CASH = "GET_CASH";

const defaultState = {
    cash: 0,
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cash: state.cash + action.payload};
        case GET_CASH:
            return {...state, cash: state.cash - action.payload};
        default:
            return state;
    }
}