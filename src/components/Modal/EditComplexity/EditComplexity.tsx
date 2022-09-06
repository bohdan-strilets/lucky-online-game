import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import { useAppSelector } from 'hooks/useAppSelector';
import { getUser } from 'redux/user/userSelectors';

import { Formik, Form } from 'formik';
import Button from 'components/Button';
import RadioButton from 'components/RadioButton';
import { toast } from 'react-toastify';

import { IEditComplexityData } from 'types/IProfile';
import editComplexitySchema from 'helpers/validationSchemas/editComplexitySchema';
import { IEditComplexityState } from 'types/IEditComplexity';
import { IChangeComplexityRes } from 'types/IUserRessponse';

import { Text, Wrapper } from './EditComplexity.styled';

const EditComplexity: React.FC<IEditComplexityState> = ({
  onClose,
  complexity,
}) => {
  const dispatch = useAppDispatch();
  const { inGame } = useAppSelector(getUser);

  const initialValues = {
    complexity,
  };

  const onSubmit = async (values: IEditComplexityData) => {
    if (inGame) {
      const res = await dispatch(operations.changeComplexity(values));

      if ((res.payload as IChangeComplexityRes).status === 'ok') {
        onClose();
      }
    } else {
      toast.warning(
        'You cannot change the difficulty level without creating a new session.',
      );
    }
  };

  return (
    <>
      <Text>
        After changing the difficulty level, the rules for calculating rewards
        and experience will change.
      </Text>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
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
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditComplexity;
