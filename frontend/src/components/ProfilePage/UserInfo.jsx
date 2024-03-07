import axios from "axios";
import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import Modal from "../../modals/Modal";
import UploadImageModal from "./UploadImageModal";
//import { UserDetailsContext } from "../../contexts/UserDetailsContext";
function UserInfo({ userId }) {
    let currentUser = useSelector((state) => state.user);
    const [user, setUser] = useState(null);

    const [open, setOpen] = React.useState(false);
 
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + `/gen/profile/${userId.userId}`, { withCredentials: true })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);
  if (!user) {
    return (
      <div id="userDetailsContainer">
            <div id="userDetails">
                  <div id="profilePicture">
                      <img src="" alt="Loading.." />
                  </div>
                  <h1 id="userName">Loading...</h1>
                  <code id="userID">Loading...</code>
                  <div id="userStats">
                      <div>
                          <div>0</div>
                          <div>Contributions</div>
                      </div>
                      <div>
                          <div>0</div>
                          <div>Followers</div>
                      </div>
                      <div>
                          <div>0</div>
                          <div>Following</div>
                      </div>
                  </div>
            </div>
        </div>
  
    )
  }
  return (
    <div id="userDetailsContainer">
          <div id="userDetails">
                <div id="profilePicture">
                    <img src={user.imageURL} alt="user" />
                </div>
                <h1 id="userName">{user.username}</h1>
                <code id="userID">@{user._id}</code>
                <div>
                    {currentUser.id == user._id ? <button onClick={handleOpen} style={{all:"unset",fontSize:"15px",cursor:"pointer",padding:"5px 10px",marginBottom:"15px",borderRadius:"10px",backgroundColor:"lightgray"}}>+ Upload</button> : ''}
                </div>
                <div id="userStats">
                    <div>
                        <div>0</div>
                        <div>Contributions</div>
                    </div>
                    <div>
                        <div>0</div>
                        <div>Followers</div>
                    </div>
                    <div>
                        <div>0</div>
                        <div>Following</div>
                    </div>
                </div>
          </div>
          <Modal headingText = "New Post" isOpen={open} onClose={handleClose}>   
                <UploadImageModal />
          </Modal>
      </div>

  )
}

export default UserInfo