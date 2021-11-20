import { createStore, combineReducers } from "redux";
import { ColorReducer } from "./ColorReducer";
import { ThicknessReducer } from "./ThicknessReducer";
import { TrasparencyReducer } from "./TransparencyReducer";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({

            ThicknessReducer,
            TrasparencyReducer
        })
    );
    return store;
}
