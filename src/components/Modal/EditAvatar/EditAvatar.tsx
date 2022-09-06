import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';

import Button from 'components/Button';
import { IChangeAvatarRes } from 'types/IUserRessponse';

import { Text, Label, Input } from './EditAvatar.styled';

const EditAvatar: React.FC<{ onClose(): void }> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <form encType="multipart/from-data" onSubmit={submitForm}>
      <Text>
        The selected file must be in one of the following formats ".jpg, .png,
        .svg". The file must not exceed 2MB. A square image is best.
      </Text>
      <Label>
        <Input type="file" name="avatar" multiple accept=".jpg, .png, .svg" />
      </Label>
      <Button
        type="submit"
        background="green"
        borderRadius="50px"
        height="50px"
        width="100%"
        shadow
      >
        change avatar
      </Button>
    </form>
  );
};

export default EditAvatar;
