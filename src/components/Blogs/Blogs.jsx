import { useLoaderData } from "react-router-dom";


const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div>
            <p>This is blog site:{blogs.length}</p>
        </div>
    );
};

export default Blogs;