import basketReducer from './basket';
import productsReducer from './products';
import loginReducer from './login';

import {combineReducers } from 'redux';

const reducers = combineReducers({
    basket: basketReducer,
    products: productsReducer,
    login: loginReducer,
})

export default reducers