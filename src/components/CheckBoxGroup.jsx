import React from 'react';
import Checkbox from './CheckBox';
import ProgressBar from './ProgressBar';
const CheckboxGroup = () => {
    const completeness = 50;
  return (
    <div style={styles.checkboxContainer}>
      {/* Type */}
      <div style={{width:'200%'}}>
        <text style={styles.title}>Type</text>
        <br />
        <Checkbox id="sport" label="Sport" />
        <Checkbox id="suv" label="SUV" />
        <Checkbox id="mpv" label="MPV" />
        {/* Add more checkboxes using the Checkbox component */}
      </div>

      {/* Capacity */}
      <div style={styles.typeCapacityContainer}>
        <text style={styles.title}>Capacity</text>
        <br />
        <Checkbox id="2-person" label="2 Person" />
        <Checkbox id="4-person" label="4 Person" />
        <Checkbox id="6-person" label="6 Person" />
        <Checkbox id="8-or-more" label="8 or More" />
        <Checkbox id="8-or-more" label="8 or More" />
        {/* Add more checkboxes using the Checkbox component */}
      </div>

      {/* Progress Bar */}
      <div style={styles.typeCapacityContainer}>
        <text style={styles.title}>Price</text>
        <div style={styles.progressBarContainer}>
          <ProgressBar completeness={completeness} />
        </div>
        <div style={{paddingTop:'15px'}}>
        <text style={{fontSize:'18px',color:'#596780'}}>Max. $100.00</text>

        </div>
      </div>
    </div>
  );
};

export default CheckboxGroup;
const styles = {

    checkboxContainer: {

      backgroundColor: "white",
      padding: "40px",
      height: "175vh",
      width:"40%"
    },
    typeCapacityContainer: {
      paddingTop: "30px",
      width: "200%",
    },
    progressBarContainer: {
      width: "100%",
      marginTop: "10px",
     
    },
    boxImageStyle: {
      width: "100%",
      height: "100%",
      objectFit: "cover", // Ensure the image covers the entire box
  
    },
    title:{
      fontSize:'14px',
      color:"#90A3BF"
    },
    subTitle:{
      fontSize:"18px",
      color:'#596780',
      paddingLeft:"10px",
      paddingTop:"10px"
    }
  };