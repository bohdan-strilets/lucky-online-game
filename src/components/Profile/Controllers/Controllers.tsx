import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import IconSwitcher from 'components/IconSwitcher';
import Modal from 'components/Modal';
import DeleteModal from 'components/Modal/DeleteModal';
// import EditModal from 'components/Modal/EditModal';

import { List, Item } from './Controllers.styled';

const Controllers: React.FC<{}> = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // const navigate = useNavigate();

  const deleteAccount = () => {};

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
            onClick={() => setShowEditModal(true)}
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
            onClick={() => setShowDeleteModal(true)}
          >
            <IconSwitcher name="delete" size="18px" fill="var(--white-color)" />
          </Button>
        </Item>
      </List>

      {showDeleteModal && (
        <Modal
          onClose={() => setShowDeleteModal(false)}
          title="Delete account?"
        >
          <DeleteModal
            onCencel={() => setShowDeleteModal(false)}
            onDelete={deleteAccount}
            text='Do you really want to delete your account and all data associated with it. All game progress will be lost, including statistics. Instead, you can use the delete "game session" function.'
          />
        </Modal>
      )}

      {/* {showEditModal && (
        <Modal
          onClose={() => setShowEditModal(false)}
          title="Edit personal data"
        >
          <EditModal onClose={() => setShowEditModal(false)} />
        </Modal>
      )} */}
    </>
  );
};

export default Controllers;
