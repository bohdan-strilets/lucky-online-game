import useLogin from 'hooks/useLogin';

import { Formik, Form } from 'formik';
import EntryField from 'components/InterfaceElements/EntryField';
import Button from 'components/InterfaceElements/Button';
import Container from 'components/InterfaceElements/Container';
import AuthNav from '../../AuthNav';
import Modal from 'components/Modal';
import ResetPassword from 'components/Modal/ResetPassword';

import { Tuple, StyledLink } from '../SigninForm.styled';

const Mobile: React.FC<{}> = () => {
  const {
    initialValues,
    login,
    showModalResetPassword,
    signinSchema,
    toogleModalResetPassword,
    play,
  } = useLogin();

  return (
    <Container
      type="transparent"
      alignItems="center"
      width="300px"
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
                width="280px"
                margin="0 0 25px 0"
              />

              <EntryField
                label="password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                required={true}
                height="50px"
                width="280px"
              />
            </Tuple>

            <Button
              type="submit"
              background="green"
              width="100%"
              height="60px"
              borderRadius="50px"
              shadow
              onClick={() => play({ id: 'counter_click' })}
            >
              Sign in
            </Button>

            <Tuple>
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

export default Mobile;