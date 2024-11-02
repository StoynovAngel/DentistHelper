import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { inputImage } from "../../inputs/inputImage";
import image1 from "/authBackground.webp";
import image2 from "/authBackground1.webp";
import image3 from "/authBackground2.webp";

const AuthBackground = () => {
  const [position, setPosition] = useState(0);
  const [loading, setLoading] = useState(true);

  const images = useMemo(() => inputImage({ image1, image2, image3 }), []);

  useEffect(() => {
    const loadImages = images.map((image) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image.src;
        img.onload = resolve;
      });
    });

    Promise.all(loadImages).then(() => setLoading(false));
  }, [images]);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="relative h-7/8 w-full">
      <img
        src={images[position].src}
        className="h-full w-full object-cover rounded-lg m-0 p-0"
        alt="Background"
      />
      <div className="absolute top-0 right-0 m-4">
        <div className="p-3 gap-2 bg-gray-100 rounded-lg bg-opacity-50 hover:bg-gray-100">
          <Link to="/">
            <h1 className="text-xl font-semibold text-black">
              Back to website
            </h1>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-6 w-full">
        <div className="flex flex-col justify-center text-center">
          <h2 className="text-2xl text-white font-semibold mb-5">
            {images[position].caption}
          </h2>
          <div className="flex justify-center gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setPosition(index)}
                className={`h-1 w-8 rounded ${
                  position === index ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthBackground;
