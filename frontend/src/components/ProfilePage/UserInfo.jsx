import React, {useState, useContext} from "react";
import { UserDetailsContext } from "../../contexts/UserDetailsContext";
function UserInfo() {
  let user = useContext(UserDetailsContext);
  console.log('User object:', user);

  if (!user) {
    return (
      <div id="userDetailsContainer">
            <div id="userDetails">
                  <div id="profilePicture">
                      <img src="https://picsum.photos/200/300" alt="user" />
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
                    <img src="https://picsum.photos/200/300" alt="user" />
                </div>
                <h1 id="userName">{user.username}</h1>
                <code id="userID">@{user._id}</code>
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

export default UserInfo