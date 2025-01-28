import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";


function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
