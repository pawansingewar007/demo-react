
import { combineReducers } from 'redux';
import counter from './modules/counter'

const rootReducer = combineReducers({
    counter: counter, 
});

export default rootReducer;