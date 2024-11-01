export const inputRegister = (formData, error) => [
  {
    type: "text",
    id: "firstname",
    placeholder: "Firstname:",
    value: formData.firstname,
  },
  {
    type: "text",
    id: "lastname",
    placeholder: "Lastname:",
    value: formData.lastname,
  },
  {
    type: "text",
    id: "username",
    placeholder: "Username:",
    value: formData.username,
  },
  { type: "email", id: "email", placeholder: "Email:", value: formData.email },
  {
    type: "password",
    id: "password",
    placeholder: "Password:",
    value: formData.password,
  },
  {
    type: "number",
    id: "age",
    placeholder: "Age:",
    value: formData.age,
    min: 1,
    max: 130,
    error: error,
  },
];

export const inputLogin = (formData) => [
  {
    type: "text",
    id: "username",
    placeholder: "Username:",
    value: formData.username,
  },
  {
    type: "password",
    id: "password",
    placeholder: "Password:",
    value: formData.password,
  },
];
