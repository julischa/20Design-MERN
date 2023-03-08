import React, { useState } from "react";

const ProfilePicture = ({ onSelect }) => {
  const [selectedEmoji, setSelectedEmoji] = useState("");

  const handleSelect = (emoji) => {
    setSelectedEmoji(emoji);
    onSelect(emoji);
  };

  return (
    <div>
      <h3>Select an emoji:</h3>
      <div>
        <input
          type="radio"
          id="smiling-face"
          name="emoji"
          value="😊"
          onChange={() => handleSelect("😊")}
        />
        <label htmlFor="smiling-face">😊</label>
      </div>
      <div>
        <input
          type="radio"
          id="heart-eyes"
          name="emoji"
          value="😍"
          onChange={() => handleSelect("😍")}
        />
        <label htmlFor="heart-eyes">😍</label>
      </div>
      <div>
        <input
          type="radio"
          id="thumbs-up"
          name="emoji"
          value="👍"
          onChange={() => handleSelect("👍")}
        />
        <label htmlFor="thumbs-up">👍</label>
      </div>
      <div>
        <input
          type="radio"
          id="thinking-face"
          name="emoji"
          value="🤔"
          onChange={() => handleSelect("🤔")}
        />
        <label htmlFor="thinking-face">🤔</label>
      </div>
      {selectedEmoji && (
        <div>
          You selected:{" "}
          <span role="img" aria-label="selected-emoji">
            {selectedEmoji}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfilePicture;
