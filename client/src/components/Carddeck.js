import React from "react";
import { Card } from "react-bootstrap";
import Masonry from "react-masonry-css";

const Pictures = () => {
  const greyTones = [
    "#f2f2f2",
    "#d9d9d9",
    "#bfbfbf",
    "#a6a6a6",
    "#8c8c8c",
    "#737373",
    "#595959",
    "#404040",
    "#262626",
    "#0d0d0d",
  ];

  const breakpointColumnsObj = {
    default: 3,
    1300: 4,
    700: 3,
    500: 2,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {greyTones.map((tone, index) => (
        <Card
          key={index}
          style={{
            backgroundColor: tone,
            height: `${100 + index * 90}px`,
            width: `${(index % 2 === 0 ? 2 : 1) * 236}px`,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Card.Body></Card.Body>
        </Card>
      ))}
    </Masonry>
  );
};

export default Pictures;
