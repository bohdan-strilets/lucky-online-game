import useRegistration from 'hooks/useRegistration';

import { Formik, Form } from 'formik';
import EntryField from 'components/InterfaceElements/EntryField';
import Button from 'components/InterfaceElements/Button';
import Container from 'components/InterfaceElements/Container';
import AuthNav from '../../AuthNav';

import { Tuple, Text, PolicyLink } from '../SignupForm.styled';

const Desktop: React.FC<{}> = () => {
  const { initialValues, registration, signupSchema, play } = useRegistration();

  return (
    <Container
      type="transparent"
      alignItems="center"
      width="856px"
      padding="50px"
    >
      <Formik
        initialValues={initialValues}
        onSubmit={registration}
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
              onClick={() => play({ id: 'counter_click' })}
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

export default Desktop;
