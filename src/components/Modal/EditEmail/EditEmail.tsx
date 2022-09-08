import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';

import { Formik, Form } from 'formik';
import EntryField from 'components/InterfaceElements/EntryField';
import Button from 'components/InterfaceElements/Button';

import editEmailSchema from 'helpers/validationSchemas/editEmailSchema';
import { IEditEmailData } from 'types/IProfile';
import { IChangeEmailRes } from 'types/IUserRessponse';

import { Text } from './EditEmail.styled';

const EditEmail: React.FC<{ onClose(): void }> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const initialValues = {
    email: '',
  };

  const onSubmit = async (values: IEditEmailData) => {
    const res = await dispatch(operations.changeEmail(values));

    if ((res.payload as IChangeEmailRes).status === 'ok') {
      onClose();
    }
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
