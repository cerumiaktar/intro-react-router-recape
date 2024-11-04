// State-- data
// State--- loader
// use effect
// fetch-- state set---> set state

import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <p>Our Users{users.length}</p>
            <div className="users-container" >
                {
                    users.map((user, idx) => <User key={idx} user ={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;