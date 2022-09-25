import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import operations from 'redux/user/userOperations';
import { getUser } from 'redux/user/userSelectors';

import { IEditProfileData } from 'types/IProfile';
import { IChangeAccountRes } from 'types/IUserRessponse';

const useEditProfile = (onClose: () => void) => {
  const dispatch = useAppDispatch();
  const { name, nickname, gender, dateBirth } = useAppSelector(getUser);

  const initialValues = {
    name,
    nickname,
    gender,
    dateBirth,
  } as IEditProfileData;

  const changeProfile = async (values: IEditProfileData) => {
    const res = await dispatch(operations.changeAccount(values));

    if ((res.payload as IChangeAccountRes).status === 'ok') {
      onClose();
    }
  };

  return { initialValues, changeProfile };
};

export default useEditProfile;
