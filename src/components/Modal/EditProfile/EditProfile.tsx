import { IEditProfileData } from 'types/IProfile';
import editProfileSchema from 'helpers/validationSchemas/editProfileSchema';

import { Formik, Form } from 'formik';
import EntryField from 'components/EntryField';
import Button from 'components/Button';
import RadioButton from 'components/RadioButton';

import { RadioGroup, RadioText } from './EditProfile.styled';

const EditProfile: React.FC<{ onClose(): void }> = ({ onClose }) => {
  const initialValues = {
    name: 'Bohdan',
    nickname: 'mp4',
    gender: 'man',
    dateBirth: '1995-06-02',
  };

  const onSubmit = (values: IEditProfileData) => {
    console.log(values);

    onClose();
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
