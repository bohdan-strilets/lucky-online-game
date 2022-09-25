import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';

import { IEditEmailData } from 'types/IProfile';
import { IChangeEmailRes } from 'types/IUserRessponse';

const useEditEmail = (onClose: () => void) => {
  const dispatch = useAppDispatch();

  const initialValues = {
    email: '',
  };

  const changeEmail = async (values: IEditEmailData) => {
    const res = await dispatch(operations.changeEmail(values));

    if ((res.payload as IChangeEmailRes).status === 'ok') {
      onClose();
    }
  };

  return { initialValues, changeEmail };
};

export default useEditEmail;
