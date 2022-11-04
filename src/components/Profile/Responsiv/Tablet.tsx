import useProfile from 'hooks/useProfile';
import dateFormatting from 'helpers/dateFormatting';

import Container from 'components/InterfaceElements/Container';
import Controllers from '../Controllers';
import Modal from 'components/Modal';
import IconSwitcher from 'components/InterfaceElements/IconSwitcher';
import EditAvatar from 'components/Modal/EditAvatar';
import EditEmail from 'components/Modal/EditEmail';
import EditPassword from 'components/Modal/EditPassword';
import EditComplexity from 'components/Modal/EditComplexity';
import DialogWindow from 'components/Modal/DialogWindow';
import MyItems from '../MyItems';
import EmptyList from '../EmptyList';

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
} from '../Profile.styled';

const Tablet: React.FC<{}> = () => {
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

  return (
    <Container
      type="transparent"
      width="500px"
      padding="20px 10px"
      margin="50px 10px"
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
            src={user.avatarURL as string}
            alt={`${user.name} user avatar`}
            onClick={() => switchEditAvatarModal(true)}
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
                  onClick={() => switchEditEmailModal(true)}
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
                  onClick={() => switchEditPasswordModal(true)}
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
                      onClick={() => switchEditComplexityModal(true)}
                    >
                      <IconSwitcher
                        name="pen"
                        size="16px"
                        fill="var(--green-color)"
                      />
                    </EditBtn>
                    <EditBtn
                      type="button"
                      onClick={() => switchDeleteSessionModal(true)}
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
    </Container>
  );
};

export default Tablet;
