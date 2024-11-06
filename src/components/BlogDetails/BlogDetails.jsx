import { useLoaderData } from "react-router-dom";


const BlogDetails = () => {
    const blog = useLoaderData();
    const {id, title} = blog
    return (
        <div>
            <h1>Post:{id}</h1>
            <p>{title}</p>
        </div>
    );
};

export default BlogDetails;