import React from 'react';

const Checkbox = ({ id, label }) => {
  return (
    <div style={{paddingTop:10}}>
      <input type="checkbox" id={id} name={id} />
      <label style={{paddingLeft:10,color:"#596780",fontSize:"18px"}} htmlFor={id}>{label}</label>
      <br />
    </div>
  );
};

export default Checkbox;
