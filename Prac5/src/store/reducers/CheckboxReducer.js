const YES = "YES";
const NO = "NO";

const defState = {
    agree: false,
}

export const checkboxReducer = (state = defState, action) => {
    switch (action.type) {
        case YES:
            return {...state, agree: true};
        case NO:
            return {...state, agree: false};
        default:
            return state;
    }
}