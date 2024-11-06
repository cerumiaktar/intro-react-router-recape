import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css'


const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>This is posts:{posts.length}</h2>
            <div className="post-container">
                {
                    posts.map((post, idx) =><Post key={idx} post ={post}></Post> )
                }
            </div>
        </div>
    );
};

export default Posts;