import React from "react";
import profilePhoto from "../assets/Profile.svg";
import starImage from "../assets/start.svg";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const ReviewsCard = () => {

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const additionalComments = [
    {
      name: 'John Doe',
      position: 'CFO at Company XYZ',
      date: '15 July 2021',
      rating: 5,
      comment:
        'The Car Rental App is amazing! I had a fantastic experience. The cars were clean, and the service was top-notch. Highly recommended!',
    },
    // Add more comments as needed
  ];
  return (


    <div style={cardStyles}>
    {/* Header */}
    <div style={{ display: 'flex', paddingBottom: '20px' }}>
      <div style={headerStyles}>Reviews</div>
      <div style={{ width: '1%' }} />
      <div
        style={{
          width: '40px',
          height: '20px',
          backgroundColor: '#3563E9',
          marginTop: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
        }}
      >
        <span style={{ color: 'white' }}>3</span>
      </div>
    </div>

    {/* Content - First Comment */}
    <div style={contentStyles}>
      {/* Left side - Profile Photo and Name */}
      <div style={profileStyles}>
        <img
          src={profilePhoto}
          alt="Profile"
          style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
        />
        <div>
          <div style={{ color: '#1A202C', fontSize: 20 }}>Alex Santon</div>
          <div style={{ color: '#90A3BF', fontSize: '14px' }}>CEO at bukalapak</div>
        </div>
      </div>

      {/* Right side - Date and Stars */}
      <div style={starsStyles}>
        <div style={{ fontSize: '14px', color: '#90A3BF' }}>11 July 2021</div>
        <div>
          {/* Display 5 stars */}
          {[1, 2, 3, 4, 5].map((index) => (
            <img
              key={index}
              src={starImage}
              alt={`Star ${index}`}
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
            />
          ))}
        </div>
      </div>
    </div>

    {/* Description - First Comment */}
    <div style={{ color: '#90A3BF', fontSize: '14px', marginTop: '10px', display: 'flex' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
      We are very happy with the service from the Car Rental App. Morent has a low price and also a large variety of cars with good and comfortable.
    </div>


    <div style={contentStyles}>
      {/* Left side - Profile Photo and Name */}
      <div style={profileStyles}>
        <img
          src={profilePhoto}
          alt="Profile"
          style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
        />
        <div>
          <div style={{ color: '#1A202C', fontSize: 20 }}>Alex Santon</div>
          <div style={{ color: '#90A3BF', fontSize: '14px' }}>CEO at bukalapak</div>
        </div>
      </div>

      {/* Right side - Date and Stars */}
      <div style={starsStyles}>
        <div style={{ fontSize: '14px', color: '#90A3BF' }}>11 July 2021</div>
        <div>
          {/* Display 5 stars */}
          {[1, 2, 3, 4, 5].map((index) => (
            <img
              key={index}
              src={starImage}
              alt={`Star ${index}`}
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
            />
          ))}
        </div>
      </div>
    </div>

    {/* Description - First Comment */}
    <div style={{ color: '#90A3BF', fontSize: '14px', marginTop: '10px', display: 'flex' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
      We are very happy with the service from the Car Rental App. Morent has a low price and also a large variety of cars with good and comfortable.
    </div>

    {/* Additional Comments */}
    {showMore &&
      additionalComments.map((comment, index) => (
        <div key={index}>
          {/* Content */}
          <div style={contentStyles}>
            {/* Left side - Profile Photo and Name */}
            <div style={profileStyles}>
              <img
                src={profilePhoto}
                alt="Profile"
                style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
              />
              <div>
                <div style={{ color: '#1A202C', fontSize: 20 }}>{comment.name}</div>
                <div style={{ color: '#90A3BF', fontSize: '14px' }}>{comment.position}</div>
              </div>
            </div>

            {/* Right side - Date and Stars */}
            <div style={starsStyles}>
              <div style={{ fontSize: '14px', color: '#90A3BF' }}>{comment.date}</div>
              <div>
                {/* Display star rating */}
                {[...Array(comment.rating)].map((_, starIndex) => (
                  <img
                    key={starIndex}
                    src={starImage}
                    alt={`Star ${starIndex + 1}`}
                    style={{ width: '20px', height: '20px', marginRight: '5px' }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div style={{ color: '#90A3BF', fontSize: '14px', marginTop: '10px', display: 'flex' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
            {comment.comment}
          </div>
        </div>
      ))}

    {/* Show More/Show Less Button */}
    {additionalComments.length > 0 && (
      <div style={{ textAlign: 'center', marginTop: '20px', cursor: 'pointer' }} onClick={toggleShowMore}>
        {showMore ? (
            <>
              Show Less <FontAwesomeIcon icon={faAngleUp} />
            </>
          ) : (
            <>
              Show More <FontAwesomeIcon icon={faAngleDown} />
            </>
          )}
      </div>
    )}
  </div>

  )
};

export default ReviewsCard;
const cardStyles = {
  height: "100%",
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  width: "94%"

};

const headerStyles = {
  fontSize: "20px",
  fontWeight: "bold",

};

const contentStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const profileStyles = {
  display: "flex",
  alignItems: "center",
};

const starsStyles = {

  alignItems: "center",
};
const container = {
  alignItems: 'center', justifyContent: 'center', margin: '20px', width: '100%',
};
const card = {
  display: 'flex', alignItems: "center", justifyContent: 'center',
}