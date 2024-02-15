import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [loginBtnText, setLoginBtnText] = useState('login');
    const { loggedInUser } = useContext(UserContext);
    const onlineStatus = useOnlineStatus();

    // subscriber to the store with selector 
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return <div className="flex justify-between bg-slate-300 shadow-lg m-2">
        <div className="logo-container ">
            <img className="w-28" src={LOGO_URL}></img>
        </div>
        <div className="flex items-center ">
            <ul className="flex p-4 m-4">
                <li className="px-4">Online Status{onlineStatus === true ? "🟢" : "🔴"}</li>
                <li className="px-4">  <Link to="/">Homes</Link></li>
                <li className="px-4"><Link to="about">About Us</Link></li>
                <li className="px-4"> <Link to="contactus">Contact Us</Link></li>
                <li className="px-4"> <Link to="grocery">Grocery</Link></li>
                <li className="px-4 text-xl font-bold"> <Link to="cart">Cart-({cartItems.length} items)</Link></li>
                <li className="px-4"><button className="login-btn" onClick={() => {
                    loginBtnText === "login" ? setLoginBtnText('logout') : setLoginBtnText('login');
                }}>{loginBtnText}</button></li>
                <li className="px-4 font-bold"> {loggedInUser}</li>
            </ul>
        </div>
    </div>
}
export default Header;