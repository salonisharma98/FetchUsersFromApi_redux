import {combineReducers} from 'redux'
import Reducer from "./Reducer.js";
import UserReducer from "./Reducer2.js"

const reducers=combineReducers({
    Reducer:Reducer,
    apis:UserReducer
});
export default reducers;