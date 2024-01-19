import "./App.css";
import NavBar from "../src/boilerplate/NavBar";
import {Outlet} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import { UserDetailsContext } from "./contexts/UserDetailsContext";
function App() {
    const [user, setUser] = useState();
    useEffect(() => {
        axios
            .get(import.meta.env.VITE_API_URL + "/gen/profile", {
                withCredentials: true,
            })
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => console.error(error));
    }, []);
    return (
        <UserDetailsContext.Provider value={user}>
            <NavBar />
            <Outlet />
        </UserDetailsContext.Provider>
    );
}

export default App;
