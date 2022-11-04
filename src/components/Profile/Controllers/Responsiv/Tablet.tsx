import useProfileControllers from 'hooks/useProfileControllers';

import Button from 'components/InterfaceElements/Button';
import IconSwitcher from 'components/InterfaceElements/IconSwitcher';
import Modal from 'components/Modal';
import DialogWindow from 'components/Modal/DialogWindow';
import EditProfile from 'components/Modal/EditProfile';

import { List, Item } from '../Controllers.styled';

const Tablet: React.FC<{}> = () => {
  const {
    switchEditProfileModal,
    switchDialogModal,
    showDialogModal,
    showEditProfileModal,
    deleteAccount,
  } = useProfileControllers();

  return (
    <>
      <List>
        <Item>
          <Button
            type="button"
            background="blue"
            borderRadius="10px"
            height="40px"
            width="40px"
            onClick={() => switchEditProfileModal(true)}
          >
            <IconSwitcher name="adjust" size="15px" fill="var(--white-color)" />
          </Button>
        </Item>
        <Item>
          <Button
            type="button"
            background="blue"
            borderRadius="10px"
            height="40px"
            width="40px"
            onClick={() => switchDialogModal(true)}
          >
            <IconSwitcher name="delete" size="15px" fill="var(--white-color)" />
          </Button>
        </Item>
      </List>

      {showDialogModal && (
        <Modal onClose={() => switchDialogModal(false)} title="Delete account?">
          <DialogWindow
            onFailure={() => switchDialogModal(false)}
            onSuccess={deleteAccount}
            text='Do you really want to delete your account and all data associated with it. All game progress will be lost, including statistics. Instead, you can use the delete "game session" function.'
            failureBtnText="Cancel"
            successBtnText="Delete"
          />
        </Modal>
      )}

      {showEditProfileModal && (
        <Modal
          onClose={() => switchEditProfileModal(false)}
          title="Edit personal data"
        >
          <EditProfile onClose={() => switchEditProfileModal(false)} />
        </Modal>
      )}
    </>
  );
};

export default Tablet;
