import useEditComplexity from 'hooks/useEditComplexity';

import { Formik, Form } from 'formik';
import Button from 'components/InterfaceElements/Button';
import RadioButton from 'components/InterfaceElements/RadioButton';

import editComplexitySchema from 'helpers/validationSchemas/editComplexitySchema';
import { IEditComplexityState } from 'types/IEditComplexity';

import { Text, Wrapper } from './EditComplexity.styled';

const EditComplexity: React.FC<IEditComplexityState> = ({
  onClose,
  complexity,
}) => {
  const { changeComplexity, initialValues } = useEditComplexity(
    onClose,
    complexity,
  );

  return (
    <>
      <Text>
        After changing the difficulty level, the rules for calculating rewards
        and experience will change.
      </Text>

      <Formik
        initialValues={initialValues}
        onSubmit={changeComplexity}
        validationSchema={editComplexitySchema}
      >
        {({ values, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <Wrapper>
              <RadioButton
                label="low"
                name="complexity"
                value="low"
                checked={values.complexity === 'low'}
              />

              <RadioButton
                label="medium"
                name="complexity"
                value="medium"
                checked={values.complexity === 'medium'}
              />

              <RadioButton
                label="high"
                name="complexity"
                value="high"
                checked={values.complexity === 'high'}
              />
            </Wrapper>

            <Button
              type="submit"
              background="green"
              width="100%"
              height="60px"
              borderRadius="50px"
              shadow
            >
              change
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditComplexity;
