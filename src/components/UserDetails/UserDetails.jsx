import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name, website, company} = user;
    return (
        <div>
            <h3>Details about user.{name}</h3>
            <p>{website}</p>
            <p>{company.name}</p>
            
        </div>
    );
};

export default UserDetails;