import React from "react";


import UserInfo from "../components/ProfilePage/UserInfo"
import HomePageFeed from "../components/HomePage/HomePageFeed";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Profile() {
    let user = useSelector((state) => state.user);
    if(!user){
        window.location.href='/login';
    }
    let userId = useParams();
    return (
        <>
            <UserInfo userId={userId}/>
            <HomePageFeed />
        </>
    );
}

export default Profile;
