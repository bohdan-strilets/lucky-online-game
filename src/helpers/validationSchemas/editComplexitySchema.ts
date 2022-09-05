import * as yup from 'yup';

const editComplexitySchema = yup.object().shape({
  complexity: yup
    .string()
    .required('The complexity field is required and cannot be empty.'),
});

export default editComplexitySchema;
