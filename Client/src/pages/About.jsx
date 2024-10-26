import React from "react";
import AboutContact from "../aboutComponents/AboutContact";
import message from "../assets/message.svg";
import phone from "../assets/phone.svg";
import office from "../assets/office.svg";
import appointment from "../assets/appointment.svg";

const About = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-main mb-5">About us</h1>
          <h2 className="text-5xl font-bold mb-5">Get in touch we our team</h2>
          <h3 className="text-2xl text-gray-700">We can help you out</h3>
        </div>
        <div className="flex justify-center aling-middle">
          <img src="./src/assets/map.svg" className="h-fit	 w-4/6" alt="Map" />
        </div>
        <div className="grid grid-cols-4 gap-5 m-5 w-1/2 mx-auto">
          <AboutContact
            path={phone}
            header={"Call us:"}
            description={
              "Feel free to call us. We receive calls from 8:00-18:00."
            }
            text={"+359 890 ####"}
          />
          <AboutContact
            path={message}
            header={"Chat to support:"}
            description={"Write us an email"}
            text={"dentistbro@gmail.com"}
            link={"mailto:dentistbro@gmail.com"}
          />
          <AboutContact
            path={office}
            header={"Visit us:"}
            description={"Visit our office HQ"}
            text={"View on Google Maps"}
            link={"https://maps.app.goo.gl/4wzQPpPokv6CJgmh7"}
          />
          <AboutContact
            path={appointment}
            header={"Make an appointment:"}
            description={"Want to feel good and smile good?"}
            text={"Click here"}
            link={"/appointment"}
          />
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4934.799502296285!2d23.353476742878446!3d42.656071328930885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa842791548ce7%3A0x5c3a3691d990d279!2sTechnical%20University!5e0!3m2!1sen!2sbg!4v1729968193866!5m2!1sen!2sbg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-96 border-t-4"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default About;
