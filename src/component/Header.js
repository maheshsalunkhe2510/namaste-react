import { useState } from "react";
import { CDN_URL } from "../utils/constants"
import { Link } from "react-router-dom";
const Header = () => {
    const [loginBtnText, setLoginBtnText] = useState('login');
    return <div className="header">
        <div className="logo-container">
            <img src={CDN_URL}></img>
        </div>
        <div className="nav-item">
            <ul>
                <li> <Link to="/">Homes</Link></li>
                <li><Link to="about">About Us</Link></li>
                <li> <Link to="contactus">Contact Us</Link></li>
                <li> <Link to="cart">Cart</Link></li>
                <li><button className="login-btn" onClick={() => {
                    loginBtnText === "login" ? setLoginBtnText('logout') : setLoginBtnText('login');
                }}>{loginBtnText}</button></li>
            </ul>
        </div>
    </div>
}
export default Header;