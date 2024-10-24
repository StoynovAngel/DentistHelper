import React from "react";

const Navigation = () => {
  return (
    <>
      <div className="flex justify-between  mx-5 py-5 items-center">
        <div className="flex justify-center gap-5 items-center">
          <img src="./src/assets/nurse.svg" className="h-12" alt="Nurse" />
          <div className="text-3xl">Dentist Bro</div>
          <button className="text-lg font-semibold border-4 border-black px-4 py-2 rounded-full hover:border-main hover:text-main transition ease-in-out delay-150">
            Menu
          </button>
        </div>
        <h2 className="text-xl">35989050####</h2>
      </div>
    </>
  );
};

export default Navigation;
