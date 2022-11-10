import { useState, useRef } from 'react';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import { IChangeAvatarRes } from 'types/IUserRessponse';

const useEditAvatar = (onClose: () => void) => {
  const dispatch = useAppDispatch();
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState<null | File | Blob>(null);
  const [previewSource, setPreviewSource] = useState<
    string | ArrayBuffer | null
  >('');

  const changeAvatar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedFile) {
      previewFile(selectedFile);
      setIsLoading(true);
      const data = new FormData();
      data.append('avatar', selectedFile);

      if (!data) return;

      const res = await dispatch(operations.changeAvatar(data));

      if ((res.payload as IChangeAvatarRes).status === 'ok') {
        onClose();
        setIsLoading(false);
      }
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    hiddenFileInput?.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files as FileList)[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  return {
    changeAvatar,
    previewSource,
    handleFileInputChange,
    fileInputState,
    isLoading,
    hiddenFileInput,
    handleClick,
  };
};

export default useEditAvatar;
