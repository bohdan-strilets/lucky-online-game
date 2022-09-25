import useProfile from 'hooks/useProfile';
import { API_URL } from 'api';
import dateFormatting from 'helpers/dateFormatting';

import Container from 'components/InterfaceElements/Container';
import Controllers from './Controllers';
import Modal from 'components/Modal';
import IconSwitcher from 'components/InterfaceElements/IconSwitcher';
import EditAvatar from 'components/Modal/EditAvatar';
import EditEmail from 'components/Modal/EditEmail';
import EditPassword from 'components/Modal/EditPassword';
import EditComplexity from 'components/Modal/EditComplexity';
import DialogWindow from 'components/Modal/DialogWindow';

import {
  Wrapper,
  Header,
  Item,
  Avatar,
  Nickname,
  Name,
  Text,
  Value,
  EditBtn,
} from './Profile.styled';

const Profile: React.FC<{}> = () => {
  const {
    age,
    data,
    deleteGameSession,
    setShowEditAvatarModal,
    setShowEditComplexityModal,
    setShowEditEmailModal,
    setShowEditPasswordModal,
    showDeleteSessionModal,
    showEditAvatarModal,
    showEditComplexityModal,
    showEditEmailModal,
    showEditPasswordModal,
    setshowDeleteSessionModal,
    user,
  } = useProfile();

  return (
    <Container
      type="transparent"
      width="1050px"
      padding="70px 50px"
      margin="50px"
    >
      <Controllers />

      {user.name && (
        <Wrapper>
          <Header>
            <p>ID: {user._id}</p>

            <div>
              <p>
                Account creation date:{' '}
                {user.createdAt && dateFormatting(user.createdAt as string)}
              </p>
              <p>
                Last update date:{' '}
                {user.updatedAt && dateFormatting(user.updatedAt as string)}
              </p>
            </div>
          </Header>

          <Avatar
            src={`${API_URL}/${user.avatarURL}`}
            alt={`${user.name} user avatar`}
            onClick={() => setShowEditAvatarModal(true)}
          />

          <Name>
            {user.name} <Nickname>{user.nickname}</Nickname>
          </Name>

          <ul>
            <Item>
              <Text>Email:</Text>
              <div>
                <Value>{user.email}</Value>
                <EditBtn
                  type="button"
                  onClick={() => setShowEditEmailModal(true)}
                >
                  <IconSwitcher
                    name="pen"
                    size="16px"
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
                  onClick={() => setShowEditPasswordModal(true)}
                >
                  <IconSwitcher
                    name="pen"
                    size="16px"
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
                      onClick={() => setShowEditComplexityModal(true)}
                    >
                      <IconSwitcher
                        name="pen"
                        size="16px"
                        fill="var(--green-color)"
                      />
                    </EditBtn>
                    <EditBtn
                      type="button"
                      onClick={() => setshowDeleteSessionModal(true)}
                    >
                      <IconSwitcher
                        name="delete"
                        size="16px"
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

      {showEditAvatarModal && (
        <Modal
          title="Choose a new avatar"
          onClose={() => setShowEditAvatarModal(false)}
        >
          <EditAvatar onClose={() => setShowEditAvatarModal(false)} />
        </Modal>
      )}

      {showEditEmailModal && (
        <Modal
          title="Change email"
          onClose={() => setShowEditEmailModal(false)}
        >
          <EditEmail onClose={() => setShowEditEmailModal(false)} />
        </Modal>
      )}

      {showEditPasswordModal && (
        <Modal
          title="Change password"
          onClose={() => setShowEditPasswordModal(false)}
        >
          <EditPassword onClose={() => setShowEditPasswordModal(false)} />
        </Modal>
      )}

      {showEditComplexityModal && (
        <Modal
          title="Change complexity"
          onClose={() => setShowEditComplexityModal(false)}
        >
          <EditComplexity
            onClose={() => setShowEditComplexityModal(false)}
            complexity={user.complexity}
          />
        </Modal>
      )}

      {showDeleteSessionModal && (
        <Modal
          title="Delete current game session?"
          onClose={() => setshowDeleteSessionModal(false)}
        >
          <DialogWindow
            onCencel={() => setshowDeleteSessionModal(false)}
            onDelete={deleteGameSession}
            text="After deleting a game session, data such as betting history, statistics and game level will be lost. Are you sure you want to continue?"
          />
        </Modal>
      )}
    </Container>
  );
};

export default Profile;
