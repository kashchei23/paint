import { createStore, combineReducers } from "redux";
import { Reducer } from "./Reducer";


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            Reducer
        })
    );
    return store;
}
