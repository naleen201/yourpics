import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from 'react-redux'
import { RESET_USER } from "../store/userStore";

//import { UserDetailsContext } from "../contexts/UserDetailsContext";

function NavBar() {
    //const user = useContext(UserDetailsContext);
    const dispatch = useDispatch()
    let user = useSelector((state) => state.user);
    const LogOut = () => {
        if (user.isAuthenticated) {
            axios
                .post(
                    import.meta.env.VITE_API_URL + "/auth/logout",
                    {},
                    {
                        withCredentials: true,
                    }
                )
                .then((response) => {
                    dispatch(RESET_USER());
                    window.location.href = "/";
                });
        }
    };

    const IsLoggedIn = () => {
        if (user.isAuthenticated) {
            return (
                <>
                    <div>Welcome, {user.username}!</div>
                    <div>
                        <Link to={`/`}>Home</Link>
                    </div>
                    <div>
                        <Link to={`/profile/${user.id}`}>Profile</Link>
                    </div>
                    <div onClick={LogOut}>
                        <Link>LogOut</Link>
                    </div>
                </>
            );
        }
        return (
            <>
                <div>
                    <Link to={`/`}>Home</Link>
                </div>
                <div>
                    <Link to={`/login`}>LogIn</Link>
                </div>
                <div>
                    <Link to={`/signup`}>SignUp</Link>
                </div>
            </>
        );
    };
    return (
        <nav>
            <div id="logo">yourpics</div>
            <div id="searchContainer">
                <input id="search" type="text" />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" color="gray">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </div>
            <div id="navMenu">
                <IsLoggedIn />
            </div>
        </nav>
    );
}

export default NavBar;
