import { Link } from 'react-router-dom';
import './User.css'

const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div className="box">
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;