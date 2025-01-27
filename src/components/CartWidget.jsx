import { AiFillShopping } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart" className="flex items-center pr-20 gap-12" style={{ display: totalQuantity > 0 ? "flex" : "none" }}>
            <div className="relative w-12 cursor-pointer">
                <AiFillShopping size={40} className="text-[#fff]" />
                {totalQuantity > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold w-5 h-5 flex items-center justify-center rounded-full">
                        {totalQuantity}
                    </span>
                )}
            </div>
        </Link>
    );
}

export default CartWidget;