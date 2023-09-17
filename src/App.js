import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import AppLayout from "./components/Navbar/AppLayout"; // Import the AppLayout component
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RentScreen from "./components/home/RentScreen";

function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/signup" element={<Signup setAuth={setAuth} />} />
        <Route
          path="/*"
          element={
            auth ? (
              <AppLayout>
                <Routes>
                  <Route path="/" element={<Home setAuth={setAuth} />} />
                  <Route path="/rent" element={<RentScreen />} />
                </Routes>
              </AppLayout>
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
