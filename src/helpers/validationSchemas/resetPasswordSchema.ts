import * as yup from 'yup';

const resetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email('The email address must be valid and existing.')
    .required('The email field is required and cannot be empty.'),
});

const restorePasswordSchema = yup.object().shape({
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

export { resetPasswordSchema, restorePasswordSchema };
