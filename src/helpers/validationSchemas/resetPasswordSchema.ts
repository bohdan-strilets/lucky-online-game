import * as yup from 'yup';

const resetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email('The email address must be valid and existing.')
    .required('The email field is required and cannot be empty.'),
});

export default resetPasswordSchema;
