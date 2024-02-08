import { useState } from "react";
import { CDN_URL } from "../utils/constants"
const Header = () => {
    const [loginBtnText, setLoginBtnText] = useState('login');
    return <div className="header">
        <div className="logo-container">
            <img src={CDN_URL}></img>
        </div>
        <div className="nav-item">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <li><button className="login-btn" onClick={() => {
                    loginBtnText === "login" ? setLoginBtnText('logout') : setLoginBtnText('login');
                }}>{loginBtnText}</button></li>
            </ul>
        </div>
    </div>
}
export default Header;