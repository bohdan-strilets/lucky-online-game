import { useState } from 'react';

// import dateFormatting from 'helpers/dateFormatting';

import Container from 'components/Container';
import Controllers from './Controllers';
import Modal from 'components/Modal';
import IconSwitcher from 'components/IconSwitcher';
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
  const [showEditAvatarModal, setShowEditAvatarModal] = useState(false);
  const [showEditEmailModal, setShowEditEmailModal] = useState(false);
  const [showEditPasswordModal, setShowEditPasswordModal] = useState(false);
  const [showEditComplexityModal, setShowEditComplexityModal] = useState(false);
  const [showDeleteSessionModal, setshowDeleteSessionModal] = useState(false);

  const deleteGameSession = () => {
    setshowDeleteSessionModal(false);
  };

  return (
    <Container
      type="transparent"
      width="1050px"
      padding="70px 50px"
      margin="50px"
    >
      <Controllers />

      <Wrapper>
        <Header>
          <p>ID: 213123123123123123</p>

          <div>
            <p>Account creation date: 2022-09-05</p>
            <p>Last update date: 2022-09-05</p>
          </div>
        </Header>

        <Avatar
          src="https://cdn.pixabay.com/photo/2022/08/13/09/05/lion-7383228_960_720.jpg"
          alt="User avatar"
          onClick={() => setShowEditAvatarModal(true)}
        />

        <Name>
          Bohdan Strilets <Nickname>mp4</Nickname>
        </Name>

        <ul>
          <Item>
            <Text>Email:</Text>
            <div>
              <Value>bohdan.strilets@gmail.com</Value>
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
            <Value>man</Value>
          </Item>
          <Item>
            <Text>Date of birth:</Text>
            <Value>1995-06-02</Value>
          </Item>
          <Item>
            <Text>Complexity:</Text>
            <div>
              <Value>
                {/* {user.complexity
                  ? user.complexity
                  : 'The game session has not yet been created.'} */}
                low
              </Value>
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
            </div>
          </Item>
          <Item>
            <Text>Game session:</Text>
            <Value>
              {/* {user.inGame && 'continue game'}
              {!user.inGame && 'Start a new game'} */}
            </Value>
          </Item>
        </ul>
      </Wrapper>

      {showEditAvatarModal && (
        <Modal
          title="Choose a new avatar"
          onClose={() => setShowEditAvatarModal(false)}
        >
          <EditAvatar />
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
            complexity="low"
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
