import { FETCH_USER } from './ActionTypes';
const initialstate = {
    api: []
};
const Reducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case FETCH_USER:
            return { ...state, api: payload };
        default:
            return state;
    }
}
export default Reducer;