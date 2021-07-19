import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import entriesReducer from "../reducer/entries.reducer";
import modalReducer from '../reducer/modal.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { testSaga } from "../sagas/testSaga";
import { initSagas } from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const storeConfig = () => {
    const store = createStore(combineReducers({
            entries: entriesReducer,
             modal: modalReducer,
        }), composeWithDevTools(
            applyMiddleware(...middleware)
        )
    );

    initSagas(sagaMiddleware);
    return store;
}

export default storeConfig;