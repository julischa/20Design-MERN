import React, { useState, useEffect } from "react";

const DesignersList = () => {
  const [designers, setDesigners] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5002/api/designers/all`)
      .then((response) => response.json())
      .then((designers) => {
        setDesigners(designers);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>List of Designers</h2>
      <ul>
        {designers.length > 0
          ? designers.allDesigners.map((designer) => <li>{designer.name}</li>)
          : ""}
      </ul>
    </div>
  );
};

export default DesignersList;
