import myImages from "../../assets/BG.svg"; // Import the image
import View2 from "../../assets/View2.svg";
import View3 from "../../assets/View3.svg";
import React, { useState, useEffect } from "react";
import CheckboxGroup from "../CheckBoxGroup";
import CarCard from "../CarCard";
import CarDetails from "../CarDetails";
const HomeSection = () => {
  const [myImage, setMyImage] = useState(myImages); // Set the initial image URL to myImage
  const [showCarImage, setShowCarImage] = useState(false); // Initially set to false

  const handleView1Click = () => {
    setMyImage(myImages);
    setShowCarImage(true);
  };

  const handleView2Click = () => {
    setMyImage(View2);
    setShowCarImage(false);
  };

  const handleView3Click = () => {
    setMyImage(View3);
    setShowCarImage(false);
  };

  useEffect(() => {
    handleView1Click();
  }, []);

  return (
    <div style={styles.container}>
      {/* Checkboxes */}
      <CheckboxGroup />

      <div style={styles.cardContent}>

        {/* Car Card */}
        <CarCard
          myImage={myImage}
          showCarImage={showCarImage}
          handleView1Click={handleView1Click}
          handleView2Click={handleView2Click}
          handleView3Click={handleView3Click}
        />
        <div style={styles.separate}/>

        {/* Car Details */}
        <CarDetails />
      </div>
    </div>
  );
};

export default HomeSection;
const styles = {
  container: {
    display: "flex",
    alignItems: "flex-start",
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px",
  },
  separate: {
    margin: "20px",
  },
};
