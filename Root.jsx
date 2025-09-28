import { Outlet } from "react-router-dom";
import Navbar from "./src/components/shared/navbar/Navbar";
import Footer from "./src/components/shared/footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-24 min-h-[calc(110vh-68px)]">

            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;