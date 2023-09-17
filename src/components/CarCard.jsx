import React from 'react';
import car from "../../src/assets/car.svg";
import View1 from "../../src/assets/View1.svg"; // Adjust the path to your image files
import View2 from "../../src/assets/View2.svg";
import View3 from "../../src/assets/View3.svg";
const CarCard = ({ myImage, showCarImage, handleView1Click, handleView2Click, handleView3Click }) => {
  return (
    <div
      style={{
        ...styles.carCardContainer,
        width: "45%",
        backgroundColor: "rgb(246, 247, 249)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "75%",
          backgroundColor: "rgb(53, 99, 233)",
          backgroundImage: `url(${myImage})`,
          position: "relative",
          borderRadius: "10px",
          backgroundSize: 'cover',
        }}
      >
        <div style={styles.carInfoContainer}>
          <text style={styles.carTitle}>
            Sports Car with the best design and acceleration
          </text>
          <br />
          <br />
          <text style={styles.carDescription}>
            Safely and comfortably drive a futuristic and elegant sports car
          </text>
          <div style={styles.carImageContainer}>
            {showCarImage && <img src={car} alt="" style={styles.carImage2} />}
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "rgb(246, 247, 249)",
          display: "flex",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <div style={styles.boxStyle} onClick={handleView1Click}>
          <img src={View1} alt="" style={styles.boxImageStyle} />
        </div>
        <div style={styles.boxStyle} onClick={handleView2Click}>
          <img src={View2} alt="" style={styles.boxImageStyle} />
        </div>
        <div style={styles.boxStyle} onClick={handleView3Click}>
          <img src={View3} alt="" style={styles.boxImageStyle} />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
const styles = {




    carCardContainer: {
        width: "40%",
        backgroundColor: "#3563E9",
        position: "relative",
        borderRadius: "10px",
      },
    
      carInfoContainer: {
        position: "absolute",
        top: "25px",
        left: "25px",
        color: "white",
        right: "25px",
      },
      carTitle: {
        fontSize: "28px",
        fontWeight: "bold",
      },
      carDescription: {
        fontSize: "16px",
        fontWeight: "bold",
      },
      carImageContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        position: "absolute",
        bottom: "0",
        top: "90px",
        left: "0",
        right: "0",
      
      },
      carImage2: {
        marginTop: "170px",
        maxWidth: "75%",
        maxHeight: "75%",
      
      },
      carDetailsContainer: {
        height: "100%",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "45%",
      },
      carDetailsHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      carName: {
        fontSize: "28px",
      },
   
      boxStyle: {
        width: "30%",
        height: "100px",
        backgroundColor: "pink",
    
        borderRadius: "10px",
        overflow: "hidden",
      },
      boxImageStyle: {
        width: "100%",
        height: "100%",
        objectFit: "cover", // Ensure the image covers the entire box
    
      },
    
    };