import { useEffect } from 'react';

import './UserDetail.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setDetail } from './Actions';
import { useParams } from 'react-router-dom';
const UserDetail = () => {
  const dispatch = useDispatch();
  const apis = useSelector((state) => state.apis)
  const { apiId } = useParams()

  console.log(apis)
  const fetchuser = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${apiId}`);
    const data = await response.json();
    dispatch(setDetail(data));
  }

  useEffect(() => {
    if (apiId && apiId !== "") fetchuser();
  }, [apiId])
  return (
    <div>
      <div className="container xyz mb-5 ">
        <div className="row mt-5 mb-5" >
          <div className="col-md-6 text">
              ID:
            </div>
          <div className="col-md-6 text">
             {apis.id}
          </div>
        </div>
        <div className="row mt-5 mb-5" >
          <div className="col-md-6 text">
            Name:
            </div>
          <div className="col-md-6 text">
            {apis.name}
          </div>
        </div>
        <div className="row mt-5 mb-5" >
          <div className="col-md-6 text">
            UserName:
          </div>
          <div className="col-md-6 text">
            {apis.username}
          </div>
        </div>
        <div className="row mt-5 mb-5" >
          <div className="col-md-6 text">
            Contact Number
          </div>
          <div className="col-md-6 text">
            {apis.phone}
          </div>
        </div>
      </div>
      {/* <div className="container-fluid bottom"/> */}
    </div>
  )
}
export default UserDetail;