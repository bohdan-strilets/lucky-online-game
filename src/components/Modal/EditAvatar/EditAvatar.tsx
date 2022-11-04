import useEditAvatar from 'hooks/useEditAvatar';

import Button from 'components/InterfaceElements/Button';
import Loader from 'components/InterfaceElements/Loader';

import { Text, Label, Input, Preview } from './EditAvatar.styled';

const EditAvatar: React.FC<{ onClose(): void }> = ({ onClose }) => {
  const {
    changeAvatar,
    previewSource,
    handleFileInputChange,
    fileInputState,
    isLoading,
  } = useEditAvatar(onClose);

  return (
    <form encType="multipart/from-data" onSubmit={changeAvatar}>
      <Text>
        The selected file must be in one of the following formats ".jpg, .png,
        .svg". The file must not exceed 6MB. A square image is best.
      </Text>
      <Label>
        <Input
          type="file"
          name="avatar"
          multiple
          accept=".jpg, .png, .svg"
          onChange={handleFileInputChange}
          value={fileInputState}
        />
      </Label>

      {previewSource && <Preview src={previewSource as string} alt="chosen" />}

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

      {isLoading && <Loader />}
    </form>
  );
};

export default EditAvatar;
