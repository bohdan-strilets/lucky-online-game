import { useEffect, useState } from 'react';
import getAllUsers from 'helpers/getAllUsers';

import Container from 'components/InterfaceElements/Container';
import ListItem from './ListItem';
import Button from 'components/InterfaceElements/Button';

import {
  Wrapper,
  Title,
  CategoriesList,
  CategoriesItem,
  List,
  Item,
} from './Rating.styled';

const Rating: React.FC<{}> = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<null | any[] | undefined>(null);
  const [totalUsers, setTotalUsers] = useState(null);

  useEffect(() => {
    (async () => {
      if (page === 1) {
        const { allUsers, total } = await getAllUsers(page);
        setUsers(allUsers);
        setTotalUsers(total);
      }

      if (page !== 1) {
        const { allUsers } = await getAllUsers(page);
        setUsers(prevState =>
          prevState !== null && prevState !== undefined
            ? [...prevState, ...allUsers]
            : [],
        );
      }
    })();
  }, [page]);

  console.log(users);

  const showMore = () => setPage(prevState => prevState + 1);

  const disabledbutton = () => {
    if (users !== undefined && users !== null && totalUsers !== null) {
      return users?.length + 1 >= totalUsers;
    }
  };

  return (
    <Container
      type="transparent"
      width="1050px"
      padding="70px 50px"
      margin="50px"
    >
      <Wrapper>
        <Title>Rating</Title>
        <CategoriesList>
          <CategoriesItem>Experience</CategoriesItem>
          <CategoriesItem>Level</CategoriesItem>
          <CategoriesItem>Bank</CategoriesItem>
          <CategoriesItem>Total bets</CategoriesItem>
          <CategoriesItem>Won bets</CategoriesItem>
          <CategoriesItem>Lost Bets</CategoriesItem>
        </CategoriesList>
      </Wrapper>

      <List>
        {users &&
          users.map((user, item) => {
            return (
              <Item key={user._id}>
                <ListItem
                  position={item + 1}
                  avatar={user.avatarURL ? user.avatarURL : ''}
                  name={user.name ? user.name : ''}
                  bank={user.bank ? user.bank : 0}
                  experience={
                    user.level?.experience ? user.level?.experience : 0
                  }
                  level={user.level?.level ? user.level?.level : 0}
                  lostBets={
                    user.statistics?.lostBets ? user.statistics?.lostBets : 0
                  }
                  totalBets={
                    user.statistics?.totalBets ? user.statistics?.totalBets : 0
                  }
                  wonBets={
                    user.statistics?.wonBets ? user.statistics?.wonBets : 0
                  }
                />
              </Item>
            );
          })}
      </List>

      <Button
        type="button"
        background="green"
        borderRadius="50px"
        height="60px"
        width="500px"
        shadow
        margin="50px auto 0 auto"
        onClick={showMore}
        disabled={disabledbutton()}
      >
        Show more
      </Button>
    </Container>
  );
};

export default Rating;
