import { Formik, Form } from 'formik';
import EntryField from 'components/EntryField';
import Button from 'components/Button';
import Container from 'components/Container';
import AuthNav from '../AuthNav';

import { ISignupData } from 'types/IProfile';
import signupSchema from 'helpers/validationSchemas/signupSchema';

import { Tuple, Text, PolicyLink } from './SignupForm.styled';

const SignupForm: React.FC<{}> = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordAgain: '',
  };

  const onSubmit = (values: ISignupData) => {
    const user = {
      name: values.name,
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
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signupSchema}
      >
        {({ values, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <AuthNav />

            <Tuple>
              <EntryField
                label="name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required={true}
                height="50px"
                width="363px"
              />

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
            </Tuple>

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
              Sign up
            </Button>
          </Form>
        )}
      </Formik>

      <Text>
        By registering on the site, you agree to the{' '}
        <PolicyLink to="/terms-and-conditions">Terms and Conditions</PolicyLink>{' '}
        and <PolicyLink to="/privacy-policy">Privacy Policy</PolicyLink>
      </Text>
    </Container>
  );
};

export default SignupForm;
