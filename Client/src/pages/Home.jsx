import React from "react";
import Navigation from "../navigation/Navigation";
import Header from "./homeComponents/Header";
import Contact from "./homeComponents/Contact";
import Background from "./homeComponents/Background";
import PhotoComponent from "./homeComponents/PhotoComponent";

const Home = () => {
  return (
    <>
      <div className="font-momo">
        <div className="grid grid-cols-1  sm:grid-cols-3 sm:grid-rows-2 gap-4 h-screen m-5">
          <div className="sm:col-span-1 sm:row-span-1">
            <Header />
          </div>
          <div className="sm:col-span-2 sm:row-span-2">
            <Background />
          </div>
          <div className="sm:col-span-1 sm:row-span-1">
            <Contact />
          </div>
          <div className="sm:col-span-1 sm:row-span-1">
            <PhotoComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
