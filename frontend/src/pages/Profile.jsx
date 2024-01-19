import axios from "axios";
import React, {useContext, useEffect, useState} from "react";

import { UserDetailsContext } from "../contexts/UserDetailsContext";

import UserInfo from "../components/ProfilePage/UserInfo"
import HomePageFeed from "../components/HomePage/HomePageFeed";

function Profile() {
    const user = useContext(UserDetailsContext);  
    if(!user){
        window.location.href='/login';
    }
    return (
        <>
            <UserInfo />
            <HomePageFeed />
        </>
    );
}

export default Profile;
