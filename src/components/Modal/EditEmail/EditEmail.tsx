import { Formik, Form } from 'formik';
import EntryField from 'components/EntryField';
import Button from 'components/Button';

import editEmailSchema from 'helpers/validationSchemas/editEmailSchema';
import { IEditEmailData } from 'types/IProfile';

import { Text } from './EditEmail.styled';

const EditEmail: React.FC<{ onClose(): void }> = ({ onClose }) => {
  const initialValues = {
    email: '',
  };

  const onSubmit = (values: IEditEmailData) => {
    console.log(values);
    onClose();
  };

  return (
    <>
      <Text>
        After changing your email, you will need to re-verify your email.
      </Text>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={editEmailSchema}
      >
        {({ values, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <EntryField
              label="email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter your e-mail"
              required={true}
              height="50px"
              width="100%"
              margin="0 0 30px 0"
            />

            <Button
              type="submit"
              background="green"
              width="100%"
              height="60px"
              borderRadius="50px"
              shadow
            >
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditEmail;
