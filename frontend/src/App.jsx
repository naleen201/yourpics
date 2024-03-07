import "./App.css";
import NavBar from "../src/boilerplate/NavBar";
import {Outlet} from "react-router-dom";
import {useState, useEffect } from "react";

function App() {
    const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 720);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenSmall(window.innerWidth < 720);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isScreenSmall]);

    if (isScreenSmall) {
        return (
            <h1 style={{ textAlign: 'center', marginTop: '20%', fontSize: '1.5rem', fontFamily: 'Poppins, sans-serif' }}>
                Work under progress for smaller screens.<br />Please use a device with a screen resolution of 720px or more to view this website
            </h1>
        );
    }
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}

export default App;
