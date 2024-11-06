import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id, userId, title, body} = post;
    const navigate = useNavigate();


    const handleSeeDetails = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className="post">
            <h2>{id}</h2>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <button className='btn' onClick={handleSeeDetails} >See details</button>
        </div>
    );
};

export default Post;