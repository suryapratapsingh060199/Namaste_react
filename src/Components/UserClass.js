import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo : {
                name : "Dummy",
                location : "Default",
            },
        };
        //console.log("Child Constructor");
    };

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/suryapratapsingh060199");
        const json = await data.json();
        this.setState({
            userInfo : json,
        });

        //console.log("Child Mount");
    }

    render() {
        const{name,location,avatar_url} = this.state.userInfo;
        
        //console.log("Child Render");

        return (
            <div className="p-3 m-2 border border-solid border-black">
                <div>
                    <UserContext.Consumer>
                        {(value) => <h1 className="font-bold">{value.loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <img src = {avatar_url} />
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : surajsamar06@gmail.com</h4>
            </div>
        );
    };
};
export default UserClass;