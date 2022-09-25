import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import { IChangeAvatarRes } from 'types/IUserRessponse';

const useEditAvatar = (onClose: () => void) => {
  const dispatch = useAppDispatch();

  const changeAvatar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget.elements[0] as HTMLInputElement;
    const file = (target.files as FileList)[0];

    const data = new FormData();
    data.append('avatar', file);

    if (!data) {
      return;
    }

    const res = await dispatch(operations.changeAvatar(data));

    if ((res.payload as IChangeAvatarRes).status === 'ok') {
      onClose();
    }
  };

  return { changeAvatar };
};

export default useEditAvatar;
