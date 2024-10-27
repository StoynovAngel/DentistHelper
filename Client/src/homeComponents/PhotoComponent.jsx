import React, { useState } from "react";
import RoundedButton from "./RoundedButton";

const PhotoComponent = () => {
  const photos = ["/dentist.jpg", "/dentist2.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnClick = (direction) => {
    if (direction === "decrement") {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
    if (direction === "increment") {
      setCurrentIndex((prevIndex) =>
        prevIndex < photos.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
  };

  return (
    <div className="relative mb-4 sm:mb-0">
      <img
        src={photos[currentIndex]}
        className="w-full h-96 object-cover rounded-lg"
        alt="Background"
      />
      <div className="absolute bottom-6 w-full">
        <div className="flex justify-between mx-5">
          <RoundedButton
            path={"/leftArrow.svg"}
            onClick={() => handleOnClick("decrement")}
          />
          <RoundedButton
            path={"/rightArrow.svg"}
            onClick={() => handleOnClick("increment")}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoComponent;
