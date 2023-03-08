import React, { useState } from "react";
import axios from "axios";
import Upload from "../assets/upload.png";
import { useNavigate } from "react-router-dom";

function CreateContent({ setIsOpen }) {
  const [pictureFile, setpictureFile] = useState(null);
  const [postData, setPostData] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handlePictureFileChange = (e) => {
    setpictureFile(e.target.files[0]);
  };

  const createContentSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", pictureFile);
      formData.append("title", postData.title);
      formData.append("description", postData.description);

      const { data } = await axios.post(
        "http://localhost:5002/api/user/imageUpload",
        formData
      );
      setIsOpen(false);
      navigate("/redpage");
    } catch (error) {
      console.log(error);
    }
  };

  const getHighlightedDescription = () => {
    return postData.description.split("#").map((word, index) => {
      const trimmedWord = word.trim().toLowerCase();
      if (trimmedWord !== "") {
        return (
          <span
            key={index}
            style={{
              border: "1px solid red",
              padding: "2px",
              marginRight: "8px",
            }}
          >
            {trimmedWord}
          </span>
        );
      }
      return null;
    });
  };

  return (
    <div className="create-content">
      <label htmlFor="picture" className="custom-file-upload">
        {pictureFile ? (
          pictureFile.name
        ) : (
          <img src={Upload} alt="upload icon" id="upload-img" />
        )}
      </label>
      <input
        id="picture"
        type="file"
        name="picture"
        onChange={handlePictureFileChange}
        accept="image/*"
        required
        style={{ display: "none" }}
      />

      <form onSubmit={createContentSubmit}>
        <div>
          <label htmlFor="title">Give your file a title:</label>
          <input
            type="text"
            name="title"
            className="title-input"
            value={postData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">give it at least 3 hashtags:</label>
          <textarea
            name="description"
            className="description-input"
            value={postData.description}
            onChange={handleInputChange}
            required
            spellCheck="false"
            style={{ whiteSpace: "pre-wrap" }}
          />
        </div>
        <div>{getHighlightedDescription()}</div>
        <button type="submit" className="submit-button">
          Upload
        </button>
      </form>
    </div>
  );
}

export default CreateContent;
