import React from "react";
import ProfileClass from "./ProfileClass";
import ProfileFn from "./Profile";
import { Outlet } from "react-router-dom";
class AboutUs extends React.Component {
    constructor(props){
        super(props)
        console.log("parent constuctor ")
    }

    componentDidMount(){
        console.log("Parent mount")
    }
  render(){
    console.log("parent render")
    return (
        <div>
          <div>About Us Page</div>
          <div className="">
           
            <div className="margin">
              <ProfileClass name={"Child 1"} />
            </div>
          </div>
        </div>
      );
  }
};

export default AboutUs;
