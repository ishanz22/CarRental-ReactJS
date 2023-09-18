import React, { useEffect, useState } from 'react';
import heart from '../../assets/heart.svg';
import Koen from '../../assets/Koen.svg';
import Nissan from '../../assets/Nissan.svg';
import RR from '../../assets/RR.svg';
import Gas from '../../assets/gas.svg';
import Manual from '../../assets/manual.svg';
import ProfileUser from '../../assets/profileuser.svg';

const dummyData = [
  {
    name: 'Koenigsegg',
    category: 'Sport',
    image: Koen,
    gas: '90L',
    transmission: 'Manual',
    capacity: '2 People',
    price: '$50/day',
  },
  {
    name: 'Rolls-Royce',
    category: 'Luxury',
    image: RR,
    gas: '90L',
    transmission: 'Automatic',
    capacity: '4 People',
    price: '$100/day',
  },
  {
    name: 'Nissan GT-R',
    category: 'Sport',
    image: Nissan,
    gas: '80L',
    transmission: 'Automatic',
    capacity: '2 People',
    price: '$60/day',
  },
  {
    name: 'Nissan GT-R',
    category: 'Sport',
    image: Nissan,
    gas: '80L',
    transmission: 'Automatic',
    capacity: '2 People',
    price: '$60/day',
  },
  {
    name: 'Nissan GT-R',
    category: 'Sport',
    image: Nissan,
    gas: '80L',
    transmission: 'Automatic',
    capacity: '2 People',
    price: '$60/day',
  },
  {
    name: 'Nissan GT-R',
    category: 'Sport',
    image: Nissan,
    gas: '80L',
    transmission: 'Automatic',
    capacity: '2 People',
    price: '$60/day',
  },
  // Add more cars as needed
];

const RecomendationCars = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 1440px)');
      const handleMediaQueryChange = (event) => {
        setIsSmallScreen(event.matches);
      };
  
      mediaQuery.addListener(handleMediaQueryChange);
      handleMediaQueryChange(mediaQuery);
  
      return () => {
        mediaQuery.removeListener(handleMediaQueryChange);
      };
    }, []);
  return (
    <div style={{    height: '100%',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    width: isSmallScreen ?'950px':"94%",
    
    
    }}>
      <div style={styles.textContainer}>
        <span style={styles.text}>Recommended Cars</span>
        <span style={styles.space}></span>
        <span style={styles.button}>View All</span>
      </div>
      <div style={styles.cardScrollContainer}>
        <div style={styles.cardContainer}>
          {dummyData.map((car, index) => (
            <div style={styles.card} key={index}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h2 style={styles.cardHeader}>{car.name}</h2>
                  <span style={{ color: '#90A3BF', fontSize: '14px' }}>{car.category}</span>
                </div>
                <img src={heart} alt="Heart Icon" style={styles.heartIcon} />
              </div>
              <div style={styles.iconContainer}>{/* Heart icon here */}</div>
              <div style={styles.carImageContainer}>
                <img src={car.image} alt="Car" style={styles.carImage} />
              </div>
              <div style={styles.carInfo}>
                <div style={styles.carInfoRow}>
                  <div>
                    <img src={Gas} alt="Gas" style={styles.Icon} />
                    &nbsp;
                    <span style={styles.carInfoText}>{car.gas}</span>
                  </div>
                  <div>
                    <img src={Manual} alt="Transmission" style={styles.Icon} />
                    &nbsp;
                    <span style={styles.carInfoText}>{car.transmission}</span>
                  </div>
                  <div>
                    <img src={ProfileUser} alt="Capacity" style={styles.Icon} />
                    &nbsp;
                    <span style={styles.carInfoText}>{car.capacity}</span>
                  </div>
                </div>
                <div style={styles.carPrice}>
                  <span style={styles.carPriceText}>{car.price}</span>
                  <button style={styles.rentButton}>Rent Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {

  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: '16px',
    color: '#90A3BF',
  },
  space: {
    width: '16px',
  },
  button: {
    color: '#3563E9',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '16px',
  },
  cardScrollContainer: {
    overflowX: 'auto', // Enable horizontal scrolling
    whiteSpace: 'nowrap', // Prevent line breaks
    padding: '10px 0', // Add some padding for aesthetics
    maxWidth: '100%', // Set maximum width to prevent overflow
  },
  cardContainer: {
    display: 'inline-flex', // Display cards in a row
    gap: '20px', // Adjust the gap between cards as needed
    marginTop: '10px', // Adjust the top margin as needed
  },
  card: {
    width: '300px', // Fixed width for all cards
    height: '360px', // Fixed height for all cards
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardHeader: {
    fontSize: '20px',
    margin: '0',
    color: '#1A202C',
    fontWeight: '700',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '5%',
  },
  carImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  carImage: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  carInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  carInfoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  carInfoText: {
    fontSize: '14px',
    color: '#333',
    flex: '1', // This will make each text element take equal space in the row
    textAlign: 'center', // Center-align text in each column
  },
  carPrice: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '30px',
    width: '100%',
  },
  carPriceText: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  rentButton: {
    backgroundColor: '#3563E9',
    color: 'white',
    borderRadius: '5px',
    padding: '8px 16px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
  heartIcon: {
    width: '25px',
    height: '25px',
  },
  Icon: {
    width: '24px',
    height: '24px',
  },
};

export default RecomendationCars;
