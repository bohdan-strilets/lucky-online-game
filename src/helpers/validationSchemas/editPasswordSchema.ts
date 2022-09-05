import * as yup from 'yup';

const editPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, 'The minimum password length must be 6 characters.')
    .max(12, 'The maximum password length must not exceed 12 characters.')
    .required('The password field is required and cannot be empty.'),
  newPassword: yup
    .string()
    .min(6, 'The minimum password length must be 6 characters.')
    .max(12, 'The maximum password length must not exceed 12 characters.')
    .required('The password field is required and cannot be empty.'),
  passwordAgain: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Passwords must match'),
});

export default editPasswordSchema;
