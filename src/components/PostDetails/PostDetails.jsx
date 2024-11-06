import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {id, userId, title, body} = post;

    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1);
    }

    return (
        <div>
            <h2>Post ID:{id}</h2>
            <h3>userid:{userId}</h3>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;