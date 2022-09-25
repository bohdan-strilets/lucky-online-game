import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { IEditEmailData } from 'types/IProfile';
import { IResetPasswordRes } from 'types/IUserRessponse';

const useResetPasswordMail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
  };

  const onSubmit = async (values: IEditEmailData) => {
    const res = await dispatch(operations.sendPasswordResetEmail(values));

    if ((res.payload as IResetPasswordRes).status === 'ok') {
      navigate('/');
      toast.success(
        'Email sent successfully. Please check your inbox for a link to reset your password.',
      );
    }
  };

  return { initialValues, onSubmit };
};

export default useResetPasswordMail;
