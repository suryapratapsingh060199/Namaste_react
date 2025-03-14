import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
       // console.log("Parent Mount");
    }

    render() {
        //console.log("Parent Render");
        return (
            <div>
                <UserClass />
            </div>
        );
    }
}

export default About;