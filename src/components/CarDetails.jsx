import React from "react";
import { useNavigate } from "react-router-dom";
import heart from "../../src/assets/heart.svg";
import start from "../../src/assets/start.svg";
const CarDetails = () => {
  const navigate = useNavigate();
  const handleRentNowClick = () => {
    navigate("/rent"); // Navigate to the '/rent' route
  };
  return (
    <div style={styles.carDetailsContainer}>
      <div style={styles.carDetailsHeader}>
        <div style={styles.carName}>Nissan GT-R</div>
        <div>
          <img src={heart} alt="Heart Icon" style={styles.heartIcon} />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={start} alt="5 Stars" style={styles.starIcon} />
        <img src={start} alt="5 Stars" style={styles.starIcon} /> 
         <img src={start} alt="5 Stars" style={styles.starIcon} />
         <img src={start} alt="5 Stars" style={styles.starIcon} /> 
          <img src={start} alt="5 Stars" style={styles.starIcon} />
        <p style={styles.reviewersText}>440+ Reviewers</p>
      </div>
      <div>
        <p style={styles.carDescriptionText}>
          Powered by the trust of high-capacity turbos developed from our GT3
          racing program, GT-R NISMO's engine is the purest expression of
          passion, performance, and technology.
        </p>
      </div>
      <div style={styles.carInfoRow}>
        <p style={styles.infoLabel}>Type Car</p>
        <p style={styles.infoValue}>Sport</p>
        <p style={styles.infoLabel}>Capacity</p>
        <p style={styles.infoValue}>2 Person</p>
      </div>
      <div style={styles.carInfoRow}>
        <p style={styles.infoLabel}>Steering</p>
        <p style={styles.infoValue}>Manual</p>
        <p style={styles.infoLabel}>Gasoline</p>
        <p style={styles.infoValue}>70L</p>
      </div>
      {/* Add more info rows as needed */}
      <div style={styles.priceContainer}>
        <div style={{flexDirection:"row"}}>
          <p style={styles.priceText}>$80.00 /  <text style={styles.priceUnit}>days</text></p>
        
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button style={styles.rentButton} onClick={handleRentNowClick}>
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
const styles = {
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
  heartIcon: {
    width: "25px",
    height: "25px",
  },
  starIcon: {
    width: "25px",
    height: "25px",
    marginRight: "10px",
  },
  reviewersText: {
    marginTop: 20,
    fontSize: "14px",
  },
  carDescriptionText: {
    fontSize: "18px",
  },
  carInfoRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  },
  infoLabel: {
    fontSize: "18px",
    color: "#90A3BF",

    width: "50%",
  },
  infoValue: {
    width: "50%",
    fontSize: "20px",
    color: "#596780",
  },
  priceContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  },
  priceText: {
    paddingTop: "30px",
    fontSize: "28px",
    fontWeight: 700,
  },
  priceUnit: {
    fontSize: "16px",
    color: "#90A3BF",
  },
  rentButton: {
    backgroundColor: "#3563E9",
    color: "white",
    borderRadius: "4px",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
  },
};
