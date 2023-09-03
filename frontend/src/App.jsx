import "./App.css";
import NavBar from "../src/boilerplate/NavBar";
import {Outlet} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
function App() {
    const [user, setUser] = useState();
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);
    return (
        <>
            <NavBar user={user} />
            <Outlet />
        </>
    );
}

export default App;
