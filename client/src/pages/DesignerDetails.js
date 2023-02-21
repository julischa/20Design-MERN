import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const DesignerDetails = () => {
  const { designerName } = useParams();
  console.log("useParams()", useParams());
  console.log("designerName", designerName);
  // const formatted = designerName.toLowerCase().replace(/\s+/g, "");
  // console.log("formatted", formatted);

  // const [formattedName, setFormattedName] = useState("");

  //uses a regular expression to globally (g) replace all whitespace characters (\s+)
  //in the designerName string with an empty string("").This removes all spaces, tabs, and newlines from string
  // useEffect(() => {
  //   setFormattedName(formatted);
  // }, [designerName]);

  // Fetch designer details using the formatted name
  useEffect(() => {
    fetch(`http://localhost:5002/api/designers/singleDesigner/${designerName}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>{designerName} Details:</h2>
      <p>Information about {designerName}</p>
    </div>
  );
};

export default DesignerDetails;
