import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";


function Layout (){

    return(
        <div className="h-screen justify-between align-middle">
            <NavBar/>
            <div className="flex-grow">
                <Outlet />
            </div>

            <Footer/>
        </div>
    )
}

export default Layout;
