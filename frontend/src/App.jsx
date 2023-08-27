import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
        <div id="overlay"></div>
        <nav>
            <div id="logo">yourpics</div>
            <div id="searchContainer">
                <input id="search" type="text" />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" color="gray">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </div>
            <div id="navMenu">
                <div><a href="HomePage.html">Home</a></div>
                <div><a href="SignUpPage.html">SignUp</a></div>
                <div>About</div>
            </div>
        </nav>
        {/*<div id="bannerContainer">
            <div id="bannerText">
                <h1 id="bannerTextHeading">yourpics.</h1>
                <div>
                    <code>Your art.</code><br />
                    <code>For the world.</code>
                </div>
            </div>
            <div id="bannerImageCredits">
                <p style="margin: 0">Image contributed by <b>Naleen</b></p>
            </div>
        </div>*/}
        <div id="feedContainer">
            <div id="feedColumn">
                <div class="imageContainer">
                    <img src="../images/img10.jpeg" alt="" class="image" onclick="ShowImage(this)" />
                </div>
                <div class="imageContainer">
                    <img src="../images/img8.jpeg" alt="" class="image" onclick="ShowImage(this)" />
                </div>
            </div>
            <div id="feedColumn">
                <div class="imageContainer">
                    <img src="../images/img5.jpeg" alt="" class="image" onclick="ShowImage(this)" />
                </div>
                <div class="imageContainer">
                    <img src="../images/img11.jpeg" alt="" class="image" onclick="ShowImage(this)" />
                </div>
                <div class="imageContainer">
                    <img src="../images/img8.jpeg" alt="" class="image" onclick="ShowImage(this)" />
                </div>
            </div>
            <div id="feedColumn">
                <div class="imageContainer">
                    <img src="../images/img8.jpeg" alt="" class="image" onclick="ShowImage(this)" />
                </div>
                <div class="imageContainer">
                    <img src="../images/img6.jpeg" alt="" class="image" onclick="ShowImage(this)" />
                </div>
            </div>
        </div>
        <div id="photoViewContainer">
            <div id="photoViewTopBar">
                <div id="userDetails">
                    <div id="userProfilePicture"></div>
                    <div>User12345</div>
                </div>
                <div id="closePhotoViewButton" onclick="closePhotoView()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="black" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </div>
            </div>
            <div id="photoViewImageContainer">
                <img src="" alt="" class="image" id="photoViewImage" />
            </div>
            <div></div>
        </div>
    </>
  )
}

export default App
