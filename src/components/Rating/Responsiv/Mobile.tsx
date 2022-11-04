import useRating from 'hooks/useRating';

import Container from 'components/InterfaceElements/Container';
import ListItem from '../ListItem';
import Button from 'components/InterfaceElements/Button';
import DropDownList from 'components/InterfaceElements/DropDownList';

import { Wrapper, Title, List, Item } from '../Rating.styled';

const Mobile: React.FC<{}> = () => {
  const { disabledbutton, getSortOption, showMore, sorting, users } =
    useRating();
  sorting();

  return (
    <Container
      type="transparent"
      width="300px"
      padding="100px 10px 10px 10px"
      margin="0 0 80px 0"
    >
      <Wrapper>
        <DropDownList
          options={[
            'EXPERIENCE',
            'LEVEL',
            'BANK',
            'TOTAL BETS',
            'WON BETS',
            'LOST BETS',
          ]}
          label="Sort by..."
          top="15px"
          right="15px"
          getValue={getSortOption}
        />
        <Title>Rating</Title>
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
        width="100%"
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
export default Mobile;
