import {FETCH_USER,FETCH_USERDETAILS} from './ActionTypes';
export const setApi=(api)=>
{
    return{
        type:FETCH_USER,
        payload:api,
    };
};
export const setDetail=(apis)=>
{
    return{
        type:FETCH_USERDETAILS,
        payload:apis,
    };
};