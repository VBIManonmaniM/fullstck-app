import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {enableBatching} from 'redux-batched-actions'
import rootReducers from '../reducers'
import api from '../../infrastructure/data-service'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?? compose;


const store = createStore(
    enableBatching(rootReducers),
    composeEnhancers(applyMiddleware(thunk.withExtraArgument(api)))
)

export default store