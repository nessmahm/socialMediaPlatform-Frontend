import React, {useState} from 'react'
import '../../styles/profil.css'
import ProfilHeader from './ProfilHeader'
import Post from "../../components/Posts/Post";
import FriendsElement from "../../components/FriendsElement";
import PostedPostElement from "../../components/Posts/PostedPostElement";
function NotAdminProfil() {
    const [user,setUser]= useState({"userName":"userName","userImage":"","joinedDate":"May 2013","userFriends":[],"userState":true,"userPosts":[] })
//if the user is connected then the userState will be true !! else userState false
    return (
        <div className={"profil"}>

            <ProfilHeader user={user} />
            <div className={"profile-body"}>
                <div className={"partOne"}>
                    <FriendsElement friendsList={user.userFriends}/>
                </div>

                <div className={"partTwo"}>
                    {user.userState && <Post/>}
                    <PostedPostElement postList={user.userPosts}/>
                </div>
            </div>

        </div>
    )
}

export default NotAdminProfil