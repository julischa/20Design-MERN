import React, { useState } from "react";
import axios from "axios";
import cloudinaryConfig from "../config/cloudinaryConfig";

cloudinaryConfig();

function CreateContent() {
  const [pictureUrl, setPictureUrl] = useState("");
  const [postData, setPostData] = useState({
    designerName: "",
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handlePictureChange = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", "design/user");

      const res = await axios.post(
        "http://localhost:5002/api/user/imageUpload",
        formData
      );

      setPictureUrl(res.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5002/api/posts", {
        pictureUrl,
        ...postData,
      });
      console.log(res.data);
      // reset form
      setPictureUrl("");
      setPostData({ designerName: "", title: "", description: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Create Content</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="designerName">Designer Name</label>
          <input
            type="text"
            name="designerName"
            value={postData.designerName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={postData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="picture">Picture</label>
          <input
            type="file"
            name="picture"
            onChange={handlePictureChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateContent;
