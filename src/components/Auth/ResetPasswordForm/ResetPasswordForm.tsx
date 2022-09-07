import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import { useNavigate } from 'react-router-dom';

import { Formik, Form } from 'formik';
import EntryField from 'components/EntryField';
import Button from 'components/Button';
import Container from 'components/Container';
import { toast } from 'react-toastify';

import { IResetPasswordData } from 'types/IProfile';
import { restorePasswordSchema } from 'helpers/validationSchemas/resetPasswordSchema';
import { IResetPasswordRes } from 'types/IUserRessponse';

import { Title, Tuple } from './ResetPasswordForm.styled';

const ResetPasswordForm: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
    passwordAgain: '',
  };

  const onSubmit = async (values: IResetPasswordData) => {
    const data = { email: values.email, password: values.password };
    const res = await dispatch(operations.resetPassword(data));

    if ((res.payload as IResetPasswordRes).status === 'ok') {
      navigate('/sign-in');
      toast.success('Password changed successfully. Try logging in again.');
    }
  };

  return (
    <Container type="transparent" width="856px" padding="50px">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={restorePasswordSchema}
      >
        {({ values, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <Title>Password recovery</Title>

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
            />

            <Tuple>
              <EntryField
                label="password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                required={true}
                height="50px"
                width="363px"
              />

              <EntryField
                label="password again"
                type="password"
                name="passwordAgain"
                value={values.passwordAgain}
                onChange={handleChange}
                required={true}
                height="50px"
                width="363px"
              />
            </Tuple>

            <Button
              type="submit"
              background="green"
              width="756px"
              height="60px"
              borderRadius="50px"
              shadow
            >
              Reset password
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ResetPasswordForm;
