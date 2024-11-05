import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";
import './Blogs.css'


const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div>
            <p>This is blog site:{blogs.length}</p>
            <div className="blogs-container">
                {
                    blogs.map((blog, idx) => <Blog key={idx} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;