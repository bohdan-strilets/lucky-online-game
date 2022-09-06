import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';

import { Formik, Form } from 'formik';
import EntryField from 'components/EntryField';
import Button from 'components/Button';

import editPasswordSchema from 'helpers/validationSchemas/editPasswordSchema';
import { IEditPasswordData } from 'types/IProfile';
import { IChangePassword } from 'types/IUserRessponse';

const EditPassword: React.FC<{ onClose(): void }> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const initialValues = {
    password: '',
    newPassword: '',
    passwordAgain: '',
  };

  const onSubmit = async (values: IEditPasswordData) => {
    const passwords = {
      password: values.password,
      newPassword: values.newPassword,
    };

    const res = await dispatch(operations.changePassword(passwords));
    if ((res.payload as IChangePassword).status === 'ok') {
      onClose();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
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
            Sign up
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditPassword;
