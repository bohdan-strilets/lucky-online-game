import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import operations from 'redux/user/userOperations';
import { getUser } from 'redux/user/userSelectors';

import { Formik, Form } from 'formik';
import EntryField from 'components/InterfaceElements/EntryField';
import Button from 'components/InterfaceElements/Button';
import RadioButton from 'components/InterfaceElements/RadioButton';

import { IEditProfileData } from 'types/IProfile';
import { IChangeAccountRes } from 'types/IUserRessponse';
import editProfileSchema from 'helpers/validationSchemas/editProfileSchema';

import { RadioGroup, RadioText } from './EditProfile.styled';

const EditProfile: React.FC<{ onClose(): void }> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const { name, nickname, gender, dateBirth } = useAppSelector(getUser);

  const initialValues = {
    name,
    nickname,
    gender,
    dateBirth,
  } as IEditProfileData;

  const onSubmit = async (values: IEditProfileData) => {
    const res = await dispatch(operations.changeAccount(values));

    if ((res.payload as IChangeAccountRes).status === 'ok') {
      onClose();
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={editProfileSchema}
      >
        {({ values, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <EntryField
              label="name"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Enter your name"
              height="50px"
              width="100%"
              margin="0 0 30px 0"
            />

            <EntryField
              label="nickname"
              type="text"
              name="nickname"
              value={values.nickname}
              onChange={handleChange}
              placeholder="Enter nickname"
              height="50px"
              width="100%"
              margin="0 0 30px 0"
            />

            <EntryField
              label="date of Birth"
              type="date"
              name="dateBirth"
              value={values.dateBirth}
              onChange={handleChange}
              height="50px"
              width="100%"
              margin="0 0 30px 0"
            />

            <RadioText>Gender</RadioText>
            <RadioGroup>
              <RadioButton
                label="other"
                name="gender"
                value="other"
                checked={values.gender === 'other'}
              />
              <RadioButton
                label="man"
                name="gender"
                value="man"
                checked={values.gender === 'man'}
              />
              <RadioButton
                label="woman"
                name="gender"
                value="woman"
                checked={values.gender === 'woman'}
              />
            </RadioGroup>

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
    </div>
  );
};

export default EditProfile;
