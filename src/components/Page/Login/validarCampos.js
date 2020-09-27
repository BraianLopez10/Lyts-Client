import validator from "validator";

export const validar = datos => {
  let errors = {};
  let { userName, email, password, name, lastname } = datos;
  if (userName === "" || userName.length < 8)
    errors.userName = "Minimo 8 caracteres";
  if (password === "" || password.length < 8)
    errors.password = "Minimo 8 caracteres";
  if (name === "") errors.name = "El nombre no puede ser vació";
  if (lastname === "") errors.lastname = "El apellido no puede ser vació";
  if (!validator.isEmail(email)) errors.email = "El email no es valido";

  return errors;
};
