import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import {setApi} from './Actions';
import Displayed from './Displayed';
const ApiFetch=()=>
{
    const api=useSelector((state)=>state);
    const dispatch=useDispatch()

    const fetchApi=async()=>
    {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json();
        dispatch(setApi(data));
    }
    useEffect(()=>{
        fetchApi();
    },[]);

    console.log("Api",api)
    
    return(
        <div>  
        <Displayed/>
        </div>
    )
}
export default ApiFetch;