import { useState } from "react";

const User = ({name,location}) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h1>Count2 : {count2}</h1>
            <h1>Name : Surya Pratap Singh</h1>
            <h2>{name}</h2>
            <h3>Location : {location}</h3>
            <h4>Contact : surajsamar06@gmail.com</h4>
        </div>
    );
};
export default User;