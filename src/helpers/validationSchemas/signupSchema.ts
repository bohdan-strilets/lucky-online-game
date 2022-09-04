import * as yup from 'yup';

const signupSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'The minimum name length must be 3 characters.')
    .max(15, 'The maximum name length should not exceed 15 characters.')
    .required('The name field is required and cannot be empty.'),
  email: yup
    .string()
    .email('The email address must be valid and existing.')
    .required('The email field is required and cannot be empty.'),
  password: yup
    .string()
    .min(6, 'The minimum password length must be 6 characters.')
    .max(12, 'The maximum password length must not exceed 12 characters.')
    .required('The password field is required and cannot be empty.'),
  passwordAgain: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export default signupSchema;
