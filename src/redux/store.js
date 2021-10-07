import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import myReducers from './reducers/rootReducer';


const store = createStore(myReducers,applyMiddleware(thunk))
export default store