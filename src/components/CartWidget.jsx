import { AiFillShopping } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useCart } from "../components/CartContext"

function CartWidget (){
    const { cartCount } = useCart();
    return(
        <div className="flex items-center pr-20 gap-12">
                <AiFillHeart  size="40" color="#fff" className="cursor-pointer"/>
                
                <div className="relative w-12 cursor-pointer">
                    <AiFillShopping size="40" className="text-[#fff]" />
                    <span className="absolute -bottom-0 -left-0 bg-[#f00] text-[#fff] text-m font-bold w-5 h-5 flex items-center justify-center rounded-full">{cartCount}</span>
                </div>
        </div>
    )
}

export default CartWidget;
