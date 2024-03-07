import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import {React, useState} from 'react'

import axios from 'axios'
import { useSelector } from 'react-redux'

function UploadImageModal() {
    let currentUser = useSelector((state) => state.user);
    const [error, setError] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileUrl, setSelectedFileUrl] = useState(null);
    const [tags, setTags] = useState("");

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        const fileUrl = URL.createObjectURL(file);
        setSelectedFileUrl(fileUrl);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const imageData = new FormData();
        imageData.append('userId', currentUser.id);
        imageData.append('userImage', selectedFile);
        imageData.append('tags', tags);

        axios
            .post(import.meta.env.VITE_API_URL + "/images", imageData, { withCredentials: true })
            .then((response) => {
                window.location.reload();
            })
            .catch((error) => {
                setError(error.response);
            });
    }

    const container = {
        // Add these lines to center the content
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "auto",
        width: "100%",
        maxHeight: "500px",
    }
    const inputFileStyle = {
        display: "none"
    }
    const imageLabelStyle = {
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        width: "60%",
        margin: "0px 10px 20px 10px",
        height: "150px",
        borderRadius: "20px",
        marginBottom: "20px",
        border: "5px dotted grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
    const labelStyle = {
        fontSize: "10px",
        margin: "0"
    }
    const inputStyle = {
        width: "60%",
        padding: "10px",
        borderRadius: "10px",
        border: "1px solid grey",
    }
    return (
        //<div style={container}>
            <form style={container} onSubmit={handleSubmit} encType="multipart/form-data">
                {error && <p id="errorMessage">{error}</p>}
                {selectedFileUrl ? <div><img src={selectedFileUrl} alt="Selected" onClick={() => setSelectedFileUrl(null)} style={{maxWidth:"100%",height:"350px",margin:"5px"}}/></div> : 
                <><label htmlFor="userImage" style={imageLabelStyle}>
                <p style={{fontSize:"30px",margin:"0"}}>+  </p>Upload Image
                </label>
                <input type="file" id="userImage" name="userImage" accept=".jpg, .jpeg" onChange={(e) => handleImageUpload(e)} style={inputFileStyle}/></>}
                <div style={{display:"flex",flexDirection: "column",alignItems: "center",width:"100%"}}>
                    <label htmlFor="tags" style={labelStyle}>Comma(,) separated list of tags</label>
                    <input type="text" placeholder="Tags" style={inputStyle} onChange={(e) => setTags(e.target.value)}/>
                </div>
                <button type='Submit' style={{all:"unset",fontSize:"15px",cursor:"pointer",padding:"5px 10px",margin:"5px",borderRadius:"10px",backgroundColor:"lightgray"}}><FontAwesomeIcon icon={faArrowUpFromBracket} /> Upload</button>
            </form>
        //</div>
    )
}

export default UploadImageModal
