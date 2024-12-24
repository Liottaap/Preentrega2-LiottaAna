import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
function Layout (){

    return(
        <div className="flex flex-col justify-between align-middle">
            <NavBar/>
            <Outlet />
            <footer className="bg-primary text-center p-5 text-whitesmoke text-xl">Pie de pagina</footer>
        </div>
    )
}

export default Layout;
