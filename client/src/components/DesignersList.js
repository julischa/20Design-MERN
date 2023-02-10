import React, { useState, useEffect } from "react";

const DesignersList = () => {
  const [designers, setDesigners] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5002/api/designers/all`)
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
        setDesigners(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // const searchByName = ()=> {
  //     fetch(`http://localhost:5002/api/designers/${artistName}`);
  // }
  return (
    <div>
      <h2>List of Designers</h2>
      <ul>
        {designers.allDesigners?.length > 0
          ? designers.allDesigners.map((designer) => <li>{designer.name}</li>)
          : ""}
      </ul>
      {/* <input type="text" />
          <button onClick={searchByName}>search</button> */}
    </div>
  );
};

export default DesignersList;
