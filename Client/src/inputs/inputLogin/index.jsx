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
