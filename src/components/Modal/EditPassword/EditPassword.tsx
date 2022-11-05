import useEditPassword from 'hooks/useEditPassword';

import { Formik, Form } from 'formik';
import EntryField from 'components/InterfaceElements/EntryField';
import Button from 'components/InterfaceElements/Button';

import editPasswordSchema from 'helpers/validationSchemas/editPasswordSchema';

const EditPassword: React.FC<{ onClose(): void }> = ({ onClose }) => {
  const { changePassword, initialValues } = useEditPassword(onClose);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={changePassword}
      validationSchema={editPasswordSchema}
    >
      {({ values, handleSubmit, handleChange }) => (
        <Form onSubmit={handleSubmit}>
          <EntryField
            label="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required={true}
            height="50px"
            width="100%"
            margin="0 0 30px 0"
          />

          <EntryField
            label="new password"
            type="password"
            name="newPassword"
            value={values.newPassword}
            onChange={handleChange}
            required={true}
            height="50px"
            width="100%"
            margin="0 0 30px 0"
          />

          <EntryField
            label="password again"
            type="password"
            name="passwordAgain"
            value={values.passwordAgain}
            onChange={handleChange}
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
            change password
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditPassword;
