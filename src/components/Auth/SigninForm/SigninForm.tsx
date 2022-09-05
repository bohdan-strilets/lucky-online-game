import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import authOperations from 'redux/auth/authOperations';

import { toast } from 'react-toastify';
import { Formik, Form } from 'formik';
import EntryField from 'components/EntryField';
import Button from 'components/Button';
import Container from 'components/Container';
import AuthNav from '../AuthNav';
import Checkbox from 'components/Checkbox';
import Modal from 'components/Modal';
import ResetPassword from 'components/Modal/ResetPassword';

import { ISigninData } from 'types/IProfile';
import { IAuthRes } from 'types/IAuthRessponse';
import signinSchema from 'helpers/validationSchemas/signinSchema';

import { Tuple, StyledLink } from './SigninForm.styled';

const SigninForm: React.FC<{}> = () => {
  const [showModalResetPassword, setShowModalResetPassword] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const onSubmit = async (values: ISigninData) => {
    const user = {
      email: values.email,
      password: values.password,
    };

    const res = await dispatch(authOperations.signin(user));

    (res.payload as IAuthRes).status === 'ok'
      ? navigate('/profile')
      : toast.warning('Sorry something went wrong... Please try again.');
  };

  return (
    <Container
      type="transparent"
      alignItems="center"
      width="856px"
      padding="50px"
    >
      <AuthNav />

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signinSchema}
      >
        {({ values, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <Tuple>
              <EntryField
                label="email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Enter your e-mail"
                required={true}
                height="50px"
                width="363px"
              />

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
            </Tuple>

            <Button
              type="submit"
              background="green"
              width="756px"
              height="60px"
              borderRadius="50px"
              shadow
            >
              Sign up
            </Button>

            <Tuple>
              <Checkbox
                name="rememberMe"
                label="To remember me"
                checked={values.rememberMe}
                value={values.rememberMe}
              />
              <StyledLink
                type="button"
                onClick={() => setShowModalResetPassword(true)}
              >
                Lost your password?
              </StyledLink>
            </Tuple>
          </Form>
        )}
      </Formik>

      {showModalResetPassword && (
        <Modal
          title="Reset the password"
          onClose={() => setShowModalResetPassword(false)}
        >
          <ResetPassword />
        </Modal>
      )}
    </Container>
  );
};

export default SigninForm;
