import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
function Layout (){

    return(
        <div className="flex flex-col h-screen justify-between align-middle">
            <NavBar/>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Layout;
