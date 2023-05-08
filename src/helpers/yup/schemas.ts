import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required('Email is required.')
    .email('Invalid email address.'),
  password: yup.string().required('Password is required.')
});

export const registerSchema = yup.object({
  name: yup.string().trim().required('Name is required.'),
  lastName: yup.string().trim().required('Last name is required.'),
  email: yup
    .string()
    .trim()
    .required('Email is required.')
    .email('Invalid email address.'),
  password: yup
    .string()
    .required('Password is required.')
    .min(6, 'The password must have at least 6 characters.'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required.')
    .equals([yup.ref('password')], 'Passwords do not match.'),
  termsAndConditions: yup
    .boolean()
    .required()
    .isTrue('You must agree to Terms & Conditions.')
});
