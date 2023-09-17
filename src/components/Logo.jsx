import React from "react";

import { Box ,Typography} from "@mui/material";

const Logo = () => {
  return (
    <Box>
     
     <Typography variant="h4" style={logoStyles}>
        CarRental
      </Typography>
      
    </Box>
  );
};

const logoStyles = {
  fontFamily: "Jakarta Sans, sans-serif", 
    fontSize: "32px", 
    fontWeight: "700",
    color: "#3563E9",  
};

export default Logo;
