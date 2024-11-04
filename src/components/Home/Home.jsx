import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

;

const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <p>This is home</p>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;