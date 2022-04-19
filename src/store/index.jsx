import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import userInformation from "../services/userDetails/reducers";

const rootReducer = combineReducers({
    userInformation,
    form: formReducer,
});

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk)),
);

export default store;
