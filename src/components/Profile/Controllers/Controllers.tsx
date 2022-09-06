import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';

import Button from 'components/Button';
import IconSwitcher from 'components/IconSwitcher';
import Modal from 'components/Modal';
import DialogWindow from 'components/Modal/DialogWindow';
import EditProfile from 'components/Modal/EditProfile';

import { IDeleteAccountRes } from 'types/IUserRessponse';
import { List, Item } from './Controllers.styled';

const Controllers: React.FC<{}> = () => {
  const [showDialogModal, setShowDialogModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const deleteAccount = async () => {
    const res = await dispatch(operations.deleteAccount());

    if ((res.payload as IDeleteAccountRes).status === 'ok') {
      navigate('/');
    }
  };

  return (
    <>
      <List>
        <Item>
          <Button
            type="button"
            background="blue"
            borderRadius="10px"
            height="50px"
            width="50px"
            onClick={() => setShowEditProfileModal(true)}
          >
            <IconSwitcher name="adjust" size="18px" fill="var(--white-color)" />
          </Button>
        </Item>
        <Item>
          <Button
            type="button"
            background="blue"
            borderRadius="10px"
            height="50px"
            width="50px"
            onClick={() => setShowDialogModal(true)}
          >
            <IconSwitcher name="delete" size="18px" fill="var(--white-color)" />
          </Button>
        </Item>
      </List>

      {showDialogModal && (
        <Modal
          onClose={() => setShowDialogModal(false)}
          title="Delete account?"
        >
          <DialogWindow
            onCencel={() => setShowDialogModal(false)}
            onDelete={deleteAccount}
            text='Do you really want to delete your account and all data associated with it. All game progress will be lost, including statistics. Instead, you can use the delete "game session" function.'
          />
        </Modal>
      )}

      {showEditProfileModal && (
        <Modal
          onClose={() => setShowEditProfileModal(false)}
          title="Edit personal data"
        >
          <EditProfile onClose={() => setShowEditProfileModal(false)} />
        </Modal>
      )}
    </>
  );
};

export default Controllers;
