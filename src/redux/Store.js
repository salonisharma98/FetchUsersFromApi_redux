import {createStore} from 'redux';
import reducers from './index.js';
//import ApiReducer from './Reducer.js';
const store= createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;