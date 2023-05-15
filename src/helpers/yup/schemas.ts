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

export const createPetSchema = yup.object({
  name: yup.string().trim().required('Ingresa el nombre'),
  species: yup.string().required('Selecciona la especie'),
  gender: yup.string().required('Selecciona el género'),
  ownerName: yup.string().trim().required('Ingresa el nombre'),
  ownerLastName: yup.string().trim().required('Ingresa el apellido'),
  ownerDni: yup.string().trim().required('Ingresa el DNI'),
  ownerEmail: yup
    .string()
    .trim()
    .required('Ingresa el correo electrónico')
    .email('Correo electrónico inválido')
});

export const editPetSchema = yup.object({
  name: yup.string().trim().required('Ingresa el nombre'),
  species: yup.string().required('Selecciona la especie'),
  gender: yup.string().required('Selecciona el género')
});

export const editOwnerSchema = yup.object({
  name: yup.string().trim().required('Ingresa el nombre'),
  lastName: yup.string().required('Ingresa el apellido'),
  dni: yup.string().required('Ingresa el DNI'),
  email: yup
    .string()
    .trim()
    .required('Ingresa correo electrónico')
    .email('Correo electrónico inválido')
});

export const createAppointmentSchema = yup.object({
  petId: yup.string().trim().required('Ingresa la mascota'),
  reason: yup.string().required('Ingresa el motivo de la cita'),
  date: yup.string().required('Ingresa fecha de la cita')
});

export const editAppointmentSchema = yup.object({
  reason: yup.string().required('Ingresa el motivo de la cita'),
  date: yup.string().required('Ingresa fecha de la cita')
});

export const createReportSchema = yup.object({
  petId: yup.string().trim().required('Ingresa la mascota'),
  diagnosis: yup.string().required('Ingresa el diagnóstico'),
  treatment: yup.string().required('Ingresa el tratamiento'),
  indications: yup.string().required('Ingresa las indicaciones')
});
