import React, { useState } from "react";
import AboutContact from "../components/aboutComponents/AboutContact";
import Email from "../components/aboutComponents/Email";
import Sms from "../components/aboutComponents/Sms";
import { AboutContact as contactData } from "../inputs/inputContact";

const About = () => {
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isSmsOpen, setIsSmsOpen] = useState(false);

  const contacts = contactData({
    setIsSmsOpen,
    setIsEmailOpen,
  });

  return (
    <>
      <div className="w-full flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-main mb-5">About us</h1>
          <h2 className="text-5xl font-bold mb-5">
            Get in touch with our team
          </h2>
          <h3 className="text-2xl text-gray-700">We can help you out</h3>
        </div>
        <div className="flex justify-center aling-middle">
          <img src="/map.svg" className="h-fit lg:w-4/6" alt="Map" />
        </div>
        <div className="grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-5 w-fit mx-auto">
          {contacts.map((contact) => (
            <AboutContact
              key={contact.id}
              path={contact.src}
              header={contact.header}
              description={contact.description}
              text={contact.text}
              onClick={contact.onClick}
              link={contact.link}
            />
          ))}
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4934.799502296285!2d23.353476742878446!3d42.656071328930885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa842791548ce7%3A0x5c3a3691d990d279!2sTechnical%20University!5e0!3m2!1sen!2sbg!4v1729968193866!5m2!1sen!2sbg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-96 border-t-2"
          ></iframe>
        </div>
      </div>
      <Email isOpen={isEmailOpen} onClose={() => setIsEmailOpen(false)} />
      <Sms isOpen={isSmsOpen} onClose={() => setIsSmsOpen(false)} />
    </>
  );
};

export default About;
