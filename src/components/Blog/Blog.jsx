import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = ({blog}) => {
    const {id, title, body} = blog ;
    return (
        <div className="blog">
            <h1>{id}</h1>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to={`/blog/${id}`}>BlogDetails</Link>
        </div>
    );
};

export default Blog;