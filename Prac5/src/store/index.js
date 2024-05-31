import {createStore, combineReducers} from "redux";
import {reducer} from "./reducers/reducer";
import {checkboxReducer} from "./reducers/CheckboxReducer";

const rootReducer = combineReducers({check: checkboxReducer, red: reducer})

export const store = createStore(rootReducer)

