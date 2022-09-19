import { useAppDispatch } from 'hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import operations from 'redux/user/userOperations';

import { IResetPasswordData } from 'types/IProfile';
import { restorePasswordSchema } from 'helpers/validationSchemas/resetPasswordSchema';
import { IResetPasswordRes } from 'types/IUserRessponse';

const useResetPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
    passwordAgain: '',
  };

  const resetPassword = async (values: IResetPasswordData) => {
    const data = { email: values.email, password: values.password };
    const res = await dispatch(operations.resetPassword(data));

    if ((res.payload as IResetPasswordRes).status === 'ok') {
      navigate('/sign-in');
      toast.success('Password changed successfully. Try logging in again.');
    }
  };

  return { initialValues, resetPassword, restorePasswordSchema };
};

export default useResetPassword;
