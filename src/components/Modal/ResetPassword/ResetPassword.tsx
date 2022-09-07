import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import { useNavigate } from 'react-router-dom';

import { Formik, Form } from 'formik';
import EntryField from 'components/EntryField';
import Button from 'components/Button';
import { toast } from 'react-toastify';

import { resetPasswordSchema } from 'helpers/validationSchemas/resetPasswordSchema';
import { IEditEmailData } from 'types/IProfile';
import { IResetPasswordRes } from 'types/IUserRessponse';

import { Text } from './ResetPassword.styled';

const ResetPassword: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
  };

  const onSubmit = async (values: IEditEmailData) => {
    const res = await dispatch(operations.sendPasswordResetEmail(values));

    if ((res.payload as IResetPasswordRes).status === 'ok') {
      navigate('/');
      toast.success(
        'Email sent successfully. Please check your inbox for a link to reset your password.',
      );
    }
  };

  return (
    <>
      <Text>
        Enter the email address to which the account is registered. We will send
        an email to reset and reset your password.
      </Text>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={resetPasswordSchema}
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
              send
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ResetPassword;
