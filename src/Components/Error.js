import errorimg from "../Assets/Img/giphy.gif";
import {useRouteError} from "react-router-dom";
import {TbError404} from 'react-icons/tb'
const Error = () => {
    const err=useRouteError();
  return (
    <div>
      <div className="errorcont">
        <img src={errorimg} alt="" className="errorimg" />
        <TbError404 className="errorico"/>
        <h1>OOPS.!</h1>
        <p>Something went wrong.</p>
        <p>{err.status+" : "+err.statusText}</p>
      </div>
    </div>
  );
};

export default Error;
