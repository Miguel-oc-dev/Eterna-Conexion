import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user = true;
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-x-twitter"></i>
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/public/index.html">
                        Home
                        </Link>
                    </li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                        Write
                        </Link>
                    </li>
                    {user && <li className="topListItem">Log out</li>}
                </ul>
            </div>
            <div className="topRight">
            {user ? (
                <Link className="link" to="/settings">
                    <img
                    className="topImg"
                    src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    />
                </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                Login
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                Register
                            </Link>
                        </li>
                    </ul>   
                )}
                <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}
