import React from "react";
import { Card } from "react-bootstrap";
import Masonry from "react-masonry-css";

const Pictures = () => {
  const greyTones = [
    "#ff0000",
    "#d9d9d9",
    "#d9d9d9",
    "#d9d9d9",
    "#d9d9d9",
    "#d9d9d9",
    "#d9d9d9",
    "#d9d9d9",
    "#d9d9d9",
    "#d9d9d9",
  ];

  const breakpointColumnsObj = {
    default: 3,
    1300: 4,
    700: 3,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      style={{ width: "100%", padding: "3px" }}
    >
      {greyTones.map((tone, index) => (
        <Card
          key={index}
          style={{
            backgroundColor: tone,
            height: `${100 + index * 90}px`,
            width: `${(index % 2 === 0 ? 2 : 1) * 236}px`,
            borderRadius: "0px",
            margin: "0px",
            padding: "0px",
          }}
        >
          <Card.Body></Card.Body>
        </Card>
      ))}
    </Masonry>
  );
};

export default Pictures;
