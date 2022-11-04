import useProfile from 'hooks/useProfile';
import useProfileControllers from 'hooks/useProfileControllers';
import dateFormatting from 'helpers/dateFormatting';

import Container from 'components/InterfaceElements/Container';
import Modal from 'components/Modal';
import IconSwitcher from 'components/InterfaceElements/IconSwitcher';
import EditAvatar from 'components/Modal/EditAvatar';
import EditEmail from 'components/Modal/EditEmail';
import EditPassword from 'components/Modal/EditPassword';
import EditComplexity from 'components/Modal/EditComplexity';
import DialogWindow from 'components/Modal/DialogWindow';
import MyItems from '../MyItems';
import EmptyList from '../EmptyList';
import Button from 'components/InterfaceElements/Button';
import EditProfile from 'components/Modal/EditProfile';

import {
  Wrapper,
  Header,
  Controllers,
  Item,
  Avatar,
  Nickname,
  Name,
  Text,
  Value,
  EditBtn,
} from '../Profile.styled';

const Mobile: React.FC<{}> = () => {
  const {
    age,
    data,
    deleteGameSession,
    switchEditAvatarModal,
    switchEditComplexityModal,
    switchEditEmailModal,
    switchEditPasswordModal,
    showDeleteSessionModal,
    showEditAvatarModal,
    showEditComplexityModal,
    showEditEmailModal,
    showEditPasswordModal,
    switchDeleteSessionModal,
    user,
    products,
  } = useProfile();

  const {
    switchEditProfileModal,
    switchDialogModal,
    showDialogModal,
    showEditProfileModal,
    deleteAccount,
  } = useProfileControllers();

  return (
    <Container
      type="transparent"
      width="280px"
      padding="10px"
      margin="0 0 80px 0"
    >
      {user.name && (
        <Wrapper>
          <Header>
            <Text>ID: {user._id}</Text>

            <div>
              <p>Account creation date:</p>
              <Text>
                {user.createdAt && dateFormatting(user.createdAt as string)}
              </Text>
              <p>Last update date:</p>
              <Text>
                {user.updatedAt && dateFormatting(user.updatedAt as string)}
              </Text>
            </div>
          </Header>

          <Controllers>
            <li>
              <Button
                type="button"
                background="blue"
                borderRadius="10px"
                height="40px"
                width="40px"
                margin="0 10px 0 0 "
                onClick={() => switchEditProfileModal(true)}
              >
                <IconSwitcher
                  name="adjust"
                  size="18px"
                  fill="var(--white-color)"
                />
              </Button>
            </li>
            <li>
              <Button
                type="button"
                background="blue"
                borderRadius="10px"
                height="40px"
                width="40px"
                onClick={() => switchDialogModal(true)}
              >
                <IconSwitcher
                  name="delete"
                  size="18px"
                  fill="var(--white-color)"
                />
              </Button>
            </li>
          </Controllers>

          <Avatar
            src={user.avatarURL as string}
            alt={`${user.name} user avatar`}
            onClick={() => switchEditAvatarModal(true)}
          />

          <Name>
            {user.name}
            <br />
            <Nickname>{user.nickname}</Nickname>
          </Name>

          <ul>
            <Item>
              <Text>Email:</Text>
              <div>
                <Value>{user.email}</Value>
                <EditBtn
                  type="button"
                  onClick={() => switchEditEmailModal(true)}
                >
                  <IconSwitcher
                    name="pen"
                    size="12px"
                    fill="var(--green-color)"
                  />
                </EditBtn>
              </div>
            </Item>
            <Item>
              <Text>Password:</Text>
              <div>
                <Value>******</Value>
                <EditBtn
                  type="button"
                  onClick={() => switchEditPasswordModal(true)}
                >
                  <IconSwitcher
                    name="pen"
                    size="12px"
                    fill="var(--green-color)"
                  />
                </EditBtn>
              </div>
            </Item>
            <Item>
              <Text>Gender:</Text>
              <Value>{user.gender}</Value>
            </Item>
            <Item>
              <Text>Date of birth:</Text>
              <Value>{`${user.dateBirth} | ${age()}`}</Value>
            </Item>
            <Item>
              <Text>Complexity:</Text>
              <div>
                <Value>
                  {user.complexity
                    ? user.complexity
                    : 'The game session has not yet been created.'}
                </Value>
                {user.inGame && (
                  <>
                    <EditBtn
                      type="button"
                      onClick={() => switchEditComplexityModal(true)}
                    >
                      <IconSwitcher
                        name="pen"
                        size="12px"
                        fill="var(--green-color)"
                      />
                    </EditBtn>
                    <EditBtn
                      type="button"
                      onClick={() => switchDeleteSessionModal(true)}
                    >
                      <IconSwitcher
                        name="delete"
                        size="12px"
                        fill="var(--green-color)"
                      />
                    </EditBtn>
                  </>
                )}
              </div>
            </Item>
            <Item>
              <Text>Game session:</Text>
              <Value>
                {user.inGame &&
                  `Game creation date: ${
                    data && dateFormatting(data?.level.createdAt as string)
                  }`}
                {!user.inGame && 'Start a new game'}
              </Value>
            </Item>
          </ul>
        </Wrapper>
      )}

      {products && products.length > 0 ? (
        <MyItems products={products} />
      ) : (
        <EmptyList />
      )}

      {showEditAvatarModal && (
        <Modal
          title="Choose a new avatar"
          onClose={() => switchEditAvatarModal(false)}
        >
          <EditAvatar onClose={() => switchEditAvatarModal(false)} />
        </Modal>
      )}

      {showEditEmailModal && (
        <Modal title="Change email" onClose={() => switchEditEmailModal(false)}>
          <EditEmail onClose={() => switchEditEmailModal(false)} />
        </Modal>
      )}

      {showEditPasswordModal && (
        <Modal
          title="Change password"
          onClose={() => switchEditPasswordModal(false)}
        >
          <EditPassword onClose={() => switchEditPasswordModal(false)} />
        </Modal>
      )}

      {showEditComplexityModal && (
        <Modal
          title="Change complexity"
          onClose={() => switchEditComplexityModal(false)}
        >
          <EditComplexity
            onClose={() => switchEditComplexityModal(false)}
            complexity={user.complexity}
          />
        </Modal>
      )}

      {showDeleteSessionModal && (
        <Modal
          title="Delete current game session?"
          onClose={() => switchDeleteSessionModal(false)}
        >
          <DialogWindow
            onFailure={() => switchDeleteSessionModal(false)}
            onSuccess={deleteGameSession}
            text="After deleting a game session, data such as betting history, statistics and game level will be lost. Are you sure you want to continue?"
            failureBtnText="Cancel"
            successBtnText="Delete"
          />
        </Modal>
      )}

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
    </Container>
  );
};

export default Mobile;
