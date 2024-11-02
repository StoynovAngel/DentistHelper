const Appointment = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="text-center">
        <h1 className="text-xl font-semibold text-main mb-5">Calendar</h1>
        <h2 className="text-5xl font-bold mb-5">
          Your time to smile! Secure your spot right now.
        </h2>
        <h3 className="text-2xl text-gray-700">One click from happines</h3>
      </div>
      <div className="grid grid-cols-7 grid-rows-6 gap-5 m-5 w-1/2 mx-auto"></div>
    </div>
  );
};

export default Appointment;
