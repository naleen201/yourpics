import React from 'react'

function PhotoView() {
  return (
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
  )
}

export default PhotoView