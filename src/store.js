import { applyMiddleware, createStore, compose } from 'redux';
/*
createStore= To create a redux store.
ApplyMiddleware=
compose=Allows to show our store on the dev browser.
*/
import thunk from 'redux-thunk'; //Allows to do AJAX request in our redux actions.
import data from './data';

const initialState = {};

const reducer = (state, action) =>{
    return {products: data.products}
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;