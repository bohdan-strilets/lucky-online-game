import { Formik, Form } from 'formik';
import EntryField from 'components/EntryField';
import Button from 'components/Button';
import Container from 'components/Container';
import AuthNav from '../AuthNav';
import Checkbox from 'components/Checkbox';

import { ISigninData } from 'types/ISignForm';
import signinSchema from 'helpers/validationSchemas/signinSchema';
import { Tuple, StyledLink } from './SigninForm.styled';

const SigninForm: React.FC<{}> = () => {
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const onSubmit = (values: ISigninData) => {
    const user = {
      email: values.email,
      password: values.password,
    };

    console.log(user);
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
              <StyledLink to="/restore-password">
                Lost your password?
              </StyledLink>
            </Tuple>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SigninForm;
