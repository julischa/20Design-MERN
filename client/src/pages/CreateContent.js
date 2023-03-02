import React, { useState } from "react";
import axios from "axios";

function CreateContent() {
  // const [pictureUrl, setPictureUrl] = useState("");
  const [pictureFile, setpictureFile] = useState(null);
  const [postData, setPostData] = useState({
    // designerName: "",
    title: "",
    description: "",
  });

  const person = {
    name: "raul",
    hair: "dark",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handlePictureFileChange = (e) => {
    setpictureFile(e.target.files[0]);
  };

  // const handlePictureChange = async (e) => {
  const createContentSubmit = async (e) => {
    e.preventDefault();
    console.log("pictureFile", pictureFile);
    console.log("postData", postData);
    try {
      // const file = e.target.files[0];

      const formData = new FormData();
      formData.append("file", pictureFile);
      formData.append("title", postData.title);
      formData.append("description", postData.description);
      // formData.append("folder", JSON.stringify(postData)); // Raul this transforms and object into a string, so it can be sent inside the request. Then later should be parsed back to object using JSON.parse(...)

      // console.log('formData.get("folder")', formData.get("folder"));

      //^console.log('formData.getAll("file")', formData.getAll("file"));

      const { data } = await axios.post(
        "http://localhost:5002/api/user/imageUpload",
        formData
      );

      console.log("res", data);

      //setPictureUrl(res.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("pictureUrl", pictureUrl);

    // try {
    //   const res = await axios.post("http://localhost:5002/api/posts", {
    //     pictureUrl,
    //     ...postData,
    //   });
    //   console.log(res.data);
    //   // reset form
    //   setPictureUrl("");
    //   setPostData({ designerName: "", title: "", description: "" });
    // } catch (error) {
    //   console.log(error);
    //}
  };

  return (
    <div className="create-content">
      <label htmlFor="picture" className="custom-file-upload">
        {pictureFile ? pictureFile.name : "select file"}
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

      {/* <form onSubmit={handleSubmit}> */}
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
          <label htmlFor="description">& a description:</label>
          <textarea
            name="description"
            className="description-input"
            value={postData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div></div>
        <button type="submit" className="submit-button">
          UPLOAD
        </button>
      </form>
    </div>
  );
}

export default CreateContent;
