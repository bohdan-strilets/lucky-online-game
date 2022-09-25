import useEditAvatar from 'hooks/useEditAvatar';
import Button from 'components/InterfaceElements/Button';
import { Text, Label, Input } from './EditAvatar.styled';

const EditAvatar: React.FC<{ onClose(): void }> = ({ onClose }) => {
  const { changeAvatar } = useEditAvatar(onClose);

  return (
    <form encType="multipart/from-data" onSubmit={changeAvatar}>
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
