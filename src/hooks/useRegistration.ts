import { useAppDispatch } from 'hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import operations from 'redux/user/userOperations';

import { toast } from 'react-toastify';

import { ISignupData } from 'types/IProfile';
import { IAuthRes } from 'types/IUserRessponse';
import signupSchema from 'helpers/validationSchemas/signupSchema';

const useRegistration = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordAgain: '',
  };

  const registration = async (values: ISignupData) => {
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    const res = await dispatch(operations.signup(user));

    (res.payload as IAuthRes).status === 'ok'
      ? navigate('/welcome')
      : toast.warning('Sorry something went wrong... Please try again.');
  };

  return { signupSchema, initialValues, registration };
};

export default useRegistration;
