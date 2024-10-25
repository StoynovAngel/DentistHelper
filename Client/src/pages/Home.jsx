import React from "react";
import Navigation from "../navigation/Navigation";
import Header from "../homeComponents/Header";
import Contact from "../homeComponents/Contact";
import Background from "../homeComponents/Background";
import PhotoComponent from "../homeComponents/PhotoComponent";
import RoundedButton from "../homeComponents/RoundedButton";

const Home = () => {
  return (
    <>
      <div className="font-momo">
        <Navigation />
        <div className="grid grid-cols-3 grid-rows-2 gap-4 h-screen m-5">
          <div className="col-span-1 row-span-1">
            <Header />
          </div>
          <div className="col-span-2 row-span-2">
            <Background />
          </div>
          <div className="col-span-1 row-span-1">
            <Contact />
          </div>
          <div className="col-span-1 row-span-1">
            <PhotoComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
