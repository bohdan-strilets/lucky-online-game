import useResetPassword from 'hooks/useResetPassword';

import { Formik, Form } from 'formik';
import EntryField from 'components/InterfaceElements/EntryField';
import Button from 'components/InterfaceElements/Button';
import Container from 'components/InterfaceElements/Container';

import { Title, Tuple } from '../ResetPasswordForm.styled';

const Tablet: React.FC<{}> = () => {
  const { resetPassword, initialValues, restorePasswordSchema } =
    useResetPassword();

  return (
    <Container
      type="transparent"
      alignItems="center"
      width="560px"
      padding="50px"
    >
      <Formik
        initialValues={initialValues}
        onSubmit={resetPassword}
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
                width="230px"
              />

              <EntryField
                label="password again"
                type="password"
                name="passwordAgain"
                value={values.passwordAgain}
                onChange={handleChange}
                required={true}
                height="50px"
                width="230px"
              />
            </Tuple>

            <Button
              type="submit"
              background="green"
              width="500px"
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

export default Tablet;
