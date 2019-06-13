import {combineReducers} from 'redux';
import stateManagement from './stateManagement';

export default combineReducers({
    //if any new reducer register it in here
    StateManagement : stateManagement
});