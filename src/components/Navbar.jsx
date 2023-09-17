
import Logo from "../components/Logo";
import filterIcon from "../assets/filter.svg";
import searchIcon from "../assets/search.svg";
import Like from "../assets/Like.svg";
import Notification from "../assets/Notification.svg";
import Settings from "../assets/Settings.svg";
import profile from "../assets/Profile.svg";
const Navbar = ({ setAuth }) => {


  return (
    <nav
    className="navbar navbar-expand-lg navbar-light bg-white" 
      style={{ height: "80px", }}
    >
      <div className="container-fluid">
        <div style={{ marginLeft: "50px" }}>
        <Logo />
        </div>
      
        <div style={{ marginRight: "50px" }} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="input-group" style={customStyles.inputGroup}>
            <span
              className="input-group-text border-0"
              style={{ backgroundColor: "white" }}
            >
              <a href="#">
                <img src={searchIcon} alt="Search Icon" style={customStyles.image} />
              </a>
            </span>
            <input
              type="search"
              className="form-control rounded-pill custom-input"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              style={customStyles.input}
            />
            <span
              className="input-group-text border-0"
              style={{ backgroundColor: "white" }}
            >
              <a href="#">
                <img src={filterIcon} alt="Filter Icon" style={customStyles.image} />
              </a>
            </span>
          </div>
        </div>
        <form className="d-flex">
          <a href="#" style={{ marginRight: "20px" }}>
            <img src={Like} alt="Like Icon" style={customStyles.image} />
          </a>
          <a href="#" style={{ marginRight: "20px" }}>
            <img src={Notification} alt="Notification Icon" style={customStyles.image} />
          </a>
          <a href="#" style={{ marginRight: "20px" }}>
            <img src={Settings} alt="Settings Icon" style={customStyles.image} />
          </a>
          <a href="#" style={{ marginRight: "20px" }}>
            <img src={profile} alt="Profile Icon" style={customStyles.image} />
          </a>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

const customStyles = {
  inputGroup: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    maxWidth: "400px",
    backgroundColor: "white",
  },
  input: {
    border: "none",
    outline: "none",
    boxShadow: "none",
    maxWidth: "400px",
    borderRadius: "70px",
    backgroundColor: "white",
  },
  image: {
    pointerEvents: "none", 
  },
};


// <Container
//   maxWidth="lg"
//   sx={{
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "column",
//     height: "100vh",
//   }}
// >
//   <Box sx={{ mb: 5, mt: -10 }}>
//     <Logo />
//   </Box>
//   <Typography
//     sx={{
//       textAlign: "center",
//       marginTop: "-4rem",
//       fontSize: "5rem",
//       fontWeight: 700,
//       letterSpacing: "-0.5rem",
//       display: "inline-block",
//       whiteSpace: "nowrap",
//       [theme.breakpoints.down("sm")]: {
//         fontSize: "4rem",
//         letterSpacing: "-0.4rem",
//       },
//     }}
//     gutterBottom
//   >
//     Welcome Back
//   </Typography>

//   <Button size="large" variant="contained" onClick={() => setAuth(false)}>
//     Log out
//   </Button>
// </Container>
