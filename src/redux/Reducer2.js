import { FETCH_USERDETAILS} from './ActionTypes';
const UserReducer = (state ={}, { type, payload }) => {
    switch (type) {
        case FETCH_USERDETAILS:
            return{...state, ...payload}
        default:
         return state;
}
}
export default UserReducer;