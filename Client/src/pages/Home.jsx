import React from "react";
import Navigation from "../navigation/Navigation";
import Header from "../homeComponents/Header";
import Contact from "../homeComponents/Contact";
import Background from "../homeComponents/Background";

const Home = () => {
  return (
    <>
      <div className="font-momo">
        <Navigation />
        <Header />
        <Contact />
        <Background />
      </div>
    </>
  );
};

export default Home;
