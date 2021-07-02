import { useSelector } from"react-redux";
import './Displayed.css';
import {Link} from "react-router-dom";
const Displayed = () => {
    const api = useSelector((state) => state.Reducer.api);
    const renderList = api.map((apis) => {
        const{id,name}=apis;
        return (
            <div className="container area" key={id}>
            <Link to={`/apis/${id}`} >
            <div className="row mt-5 mb-5" >
            <div className="col-md-12 text">
            {name}
            </div>
            </div>
            </Link>
            </div>
        )
    })
  return (
    <div>
    {renderList}
    </div>
    )
}
export default Displayed;