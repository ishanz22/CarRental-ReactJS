  import myImages from "../../assets/BG.svg"; // Import the image
  import View2 from "../../assets/View2.svg";
  import View3 from "../../assets/View3.svg";
  import React, { useState, useEffect } from "react";
  import CheckboxGroup from "../CheckBoxGroup";
  import CarCard from "../CarCard";
  import CarDetails from "../CarDetails";
  import ReviewsCard from "../ReviewsCard";
  import RecentCars from "../cars/RecentCars";
  import RecomendationCars from "../cars/RecomendationCars";
  import Footer from "../footer/Footer";
  const HomeSection = () => {
    const [myImage, setMyImage] = useState(myImages); 
    const [showCarImage, setShowCarImage] = useState(false); 
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
      <>

        <div style={styles.container}>
          {/* Checkboxes */}
          <CheckboxGroup />

          <div>


            <div style={styles.cardContent}>

              {/* Car Card */}
              <CarCard
                myImage={myImage}
                showCarImage={showCarImage}
                handleView1Click={handleView1Click}
                handleView2Click={handleView2Click}
                handleView3Click={handleView3Click}
              />
              <div style={styles.separate} />

              {/* Details Card */}
              <CarDetails />

            </div>
            <div>


              <div style={styles.cover}>
                <ReviewsCard />
              </div>
              <div style={styles.cover}>
             <RecentCars/>
             
             </div>
             <div style={styles.cover}>
             <RecomendationCars/>
             
             </div>
         
            </div>
          </div>

        </div>

        <Footer/>

      </>
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
    cover: {
      display: 'flex', width: "100%", alignItems: 'center', justifyContent: 'center', paddingTop: "40px"
    }
  };
