import * as yup from 'yup';

const editProfileSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'The minimum name length must be 3 characters.')
    .max(15, 'The maximum name length must not exceed 15 characters.'),
  nickname: yup
    .string()
    .min(3, 'The minimum nickname length must be 3 characters.')
    .max(20, 'The maximum nickname length must not exceed 20 characters.'),
  dateBirth: yup.string(),
  gender: yup.string(),
});

export default editProfileSchema;
