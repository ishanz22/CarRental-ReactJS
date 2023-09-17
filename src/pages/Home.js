import React from "react";
import HomeSection from "../components/home/HomeSection";
function Home() {
  return (
    <div style={styles.container}>
      <HomeSection/>
    </div>
  );
}

export default Home;
const styles = {
  container: {
    backgroundColor: "#F6F7F9",
    display: "flex",
    flexDirection: "column",
  }}
