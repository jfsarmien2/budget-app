import { createStore, combineReducers } from "redux";
import entriesReducer from "../reducer/entries.reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
const storeConfig = () => {
    return createStore(combineReducers({
            entries: entriesReducer,
        }), composeWithDevTools()
    );
}

export default storeConfig;