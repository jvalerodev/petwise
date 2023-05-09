import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required('Ingresa tu correo electrónico')
    .email('Correo electrónico inválido'),
  password: yup.string().required('Ingresa tu contraseña')
});

export const registerSchema = yup.object({
  name: yup.string().trim().required('Ingresa tu nombre'),
  lastName: yup.string().trim().required('Ingresa tu apellido'),
  email: yup
    .string()
    .trim()
    .required('Ingresa correo electrónico')
    .email('Correo electrónico inválido'),
  password: yup
    .string()
    .required('Ingresa una contraseña')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
  role: yup.string().required('Selecciona tipo de usuario')
});
