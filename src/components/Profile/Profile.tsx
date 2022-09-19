import { useState } from 'react';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import { useGetLevelInfoQuery } from 'redux/level/levelApi';

import { getUser } from 'redux/user/userSelectors';
import { API_URL } from 'api';
import dateFormatting from 'helpers/dateFormatting';
import moment from 'moment';

import Container from 'components/InterfaceElements/Container';
import Controllers from './Controllers';
import Modal from 'components/Modal';
import IconSwitcher from 'components/InterfaceElements/IconSwitcher';
import EditAvatar from 'components/Modal/EditAvatar';
import EditEmail from 'components/Modal/EditEmail';
import EditPassword from 'components/Modal/EditPassword';
import EditComplexity from 'components/Modal/EditComplexity';
import DialogWindow from 'components/Modal/DialogWindow';

import { IDeleteSessionRes } from 'types/IUserRessponse';
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

  const {
    _id,
    name,
    nickname,
    email,
    dateBirth,
    gender,
    inGame,
    complexity,
    avatarURL,
    createdAt,
    updatedAt,
  } = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const { data } = useGetLevelInfoQuery();
  const age = () => {
    if (dateBirth) {
      return dateBirth?.length > 9
        ? Number.parseInt(moment(dateBirth).fromNow(true))
        : 0;
    }
  };

  const deleteGameSession = async () => {
    const res = await dispatch(operations.deleteSession());

    if ((res.payload as IDeleteSessionRes).status === 'ok') {
      setshowDeleteSessionModal(false);
    }
  };

  return (
    <Container
      type="transparent"
      width="1050px"
      padding="70px 50px"
      margin="50px"
    >
      <Controllers />

      {name && (
        <Wrapper>
          <Header>
            <p>ID: {_id}</p>

            <div>
              <p>
                Account creation date:{' '}
                {createdAt && dateFormatting(createdAt as string)}
              </p>
              <p>
                Last update date:{' '}
                {updatedAt && dateFormatting(updatedAt as string)}
              </p>
            </div>
          </Header>

          <Avatar
            src={`${API_URL}/${avatarURL}`}
            alt={`${name} user avatar`}
            onClick={() => setShowEditAvatarModal(true)}
          />

          <Name>
            {name} <Nickname>{nickname}</Nickname>
          </Name>

          <ul>
            <Item>
              <Text>Email:</Text>
              <div>
                <Value>{email}</Value>
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
              <Value>{gender}</Value>
            </Item>
            <Item>
              <Text>Date of birth:</Text>
              <Value>{`${dateBirth} | ${age()}`}</Value>
            </Item>
            <Item>
              <Text>Complexity:</Text>
              <div>
                <Value>
                  {complexity
                    ? complexity
                    : 'The game session has not yet been created.'}
                </Value>
                {inGame && (
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
                {inGame &&
                  `Game creation date: ${
                    data && dateFormatting(data?.level.createdAt as string)
                  }`}
                {!inGame && 'Start a new game'}
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
            complexity={complexity}
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
