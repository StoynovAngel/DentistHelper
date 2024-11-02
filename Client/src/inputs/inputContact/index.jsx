export const AboutContact = ({ setIsSmsOpen, setIsEmailOpen }) => [
  {
    id: "contact-phone",
    src: "/phone.svg",
    header: "Call us:",
    description: "Call from 8:00-18:00.",
    text: "+359 890 ####",
    onClick: () => setIsSmsOpen(true),
  },
  {
    id: "contact-message",
    src: "/message.svg",
    header: "Chat to support:",
    description: "Write us an email",
    text: "Click here",
    onClick: () => setIsEmailOpen(true),
  },
  {
    id: "contact-office",
    src: "/office.svg",
    header: "Visit us:",
    description: "Visit our office HQ",
    text: "View on Google Maps",
    link: "https://maps.app.goo.gl/4wzQPpPokv6CJgmh7",
  },
  {
    id: "contact-appointment",
    src: "/appointment.svg",
    header: "Make an appointment:",
    description: "Want to smile more?",
    text: "Click here",
    link: "/appointment",
  },
];
