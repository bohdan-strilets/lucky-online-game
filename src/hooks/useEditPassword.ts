import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';

import { IEditPasswordData } from 'types/IProfile';
import { IChangePasswordRes } from 'types/IUserRessponse';

const useEditPassword = (onClose: () => void) => {
  const dispatch = useAppDispatch();

  const initialValues = {
    password: '',
    newPassword: '',
    passwordAgain: '',
  };

  const changePassword = async (values: IEditPasswordData) => {
    const passwords = {
      password: values.password,
      newPassword: values.newPassword,
    };

    const res = await dispatch(operations.changePassword(passwords));
    if ((res.payload as IChangePasswordRes).status === 'ok') {
      onClose();
    }
  };

  return { initialValues, changePassword };
};

export default useEditPassword;
