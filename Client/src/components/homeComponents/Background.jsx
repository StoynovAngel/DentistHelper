import Cart from "./Cart";
import { inputHome } from "../../inputs/inputHome/index";

const Background = () => {
  return (
    <>
      <div className="relative ">
        <img
          src="/background.jpg"
          className="h-screen w-full object-cover rounded-lg"
          alt="Background"
        />
        <div className="absolute bottom-10  w-full">
          <div className="flex flex-col justify-center sm:justify-evenly sm:flex-row ">
            {inputHome().map((value) => (
              <Cart
                key={value.id}
                title={value.title}
                transparency={value.transparency}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
