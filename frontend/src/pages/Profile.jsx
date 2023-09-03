import axios from "axios";
import React, {useEffect, useState} from "react";
function Profile() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        axios
            .get(import.meta.env.VITE_API_URL + "/gen/profile", {
                withCredentials: true,
            })
            .then((response) => {
                console.log(response);
                setUser(response.data);
            })
            .catch((error) => console.error(error));
    }, []);
    return (
        <>
            <div>{user ? JSON.stringify(user) : "Loading..."}</div>
        </>
    );
}

export default Profile;
