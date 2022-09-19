import useLogin from 'hooks/useLogin';

import { Formik, Form } from 'formik';
import EntryField from 'components/InterfaceElements/EntryField';
import Button from 'components/InterfaceElements/Button';
import Container from 'components/InterfaceElements/Container';
import AuthNav from '../AuthNav';
import Checkbox from 'components/InterfaceElements/Checkbox';
import Modal from 'components/Modal';
import ResetPassword from 'components/Modal/ResetPassword';

import { Tuple, StyledLink } from './SigninForm.styled';

const SigninForm: React.FC<{}> = () => {
  const {
    initialValues,
    login,
    showModalResetPassword,
    signinSchema,
    toogleModalResetPassword,
  } = useLogin();

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
        onSubmit={login}
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
              Sign in
            </Button>

            <Tuple>
              <Checkbox
                name="rememberMe"
                label="To remember me"
                checked={values.rememberMe}
                value={values.rememberMe}
              />
              <StyledLink type="button" onClick={toogleModalResetPassword}>
                Lost your password?
              </StyledLink>
            </Tuple>
          </Form>
        )}
      </Formik>

      {showModalResetPassword && (
        <Modal title="Reset the password" onClose={toogleModalResetPassword}>
          <ResetPassword />
        </Modal>
      )}
    </Container>
  );
};

export default SigninForm;