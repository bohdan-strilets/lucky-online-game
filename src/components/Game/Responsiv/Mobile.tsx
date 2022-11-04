import useGame from 'hooks/useGame';

import Container from 'components/InterfaceElements/Container';
import Button from 'components/InterfaceElements/Button';
import Counter from 'components/InterfaceElements/Counter';
import GameWheel from '../GameWheel';
import Modal from 'components/Modal';
import Success from 'components/Modal/Success';

import numbers from 'data/numbers.json';
import { Form, Wrapper, Item, Input, Label } from '../Game.styled';

const Mobile: React.FC<{}> = () => {
  const {
    amountHandler,
    experienceGained,
    randomNumber,
    rateHandler,
    receivedMoney,
    showSuccessModal,
    submitHandler,
    isWon,
    toggleSuccesModal,
    play,
  } = useGame();

  return (
    <Container
      type="transparent"
      width="300px"
      padding="10px"
      margin="0 0 80px 0"
    >
      <Form onSubmit={submitHandler}>
        <Item
          width="150px"
          height="50px"
          margin="0 0 0 60px"
          topLeftRadius="30px"
          topRightRadius="30px"
          onClick={() => play({ id: 'mouse_click' })}
        >
          <Input
            type="radio"
            name="rate"
            data-type="zero"
            data-color={null}
            data-number={0}
            onClick={rateHandler}
          />
          <Label fontSize="20px">0</Label>
        </Item>

        <Wrapper>
          <Wrapper direction="column">
            <Item
              width="60px"
              height="160px"
              topLeftRadius="70px"
              onClick={() => play({ id: 'mouse_click' })}
            >
              <Input
                type="radio"
                name="rate"
                data-type="high"
                data-color={null}
                data-number={null}
                onClick={rateHandler}
              />
              <Label fontSize="16px">high</Label>
            </Item>
            <Item
              width="60px"
              height="160px"
              onClick={() => play({ id: 'mouse_click' })}
            >
              <Input
                type="radio"
                name="rate"
                data-type="even"
                data-color={null}
                data-number={null}
                onClick={rateHandler}
              />
              <Label fontSize="16px">even</Label>
            </Item>
            <Item
              width="60px"
              height="160px"
              onClick={() => play({ id: 'mouse_click' })}
            >
              <Input
                type="radio"
                name="rate"
                data-type="black"
                data-color={null}
                data-number={null}
                onClick={rateHandler}
              />
              <Label fontSize="16px">black</Label>
            </Item>
          </Wrapper>

          <Wrapper wrap="wrap" width="150px">
            {numbers.map(({ number, color }) => {
              return (
                <Item
                  key={number}
                  width="calc(100% / 3)"
                  height="40px"
                  background={color}
                  onClick={() => play({ id: 'mouse_click' })}
                >
                  <Input
                    type="radio"
                    name="rate"
                    data-type="number"
                    data-color={color}
                    data-number={number}
                    onClick={rateHandler}
                  />
                  <Label fontSize="20px">{number}</Label>
                </Item>
              );
            })}
          </Wrapper>

          <Wrapper direction="column">
            <Item
              width="60px"
              height="160px"
              topRightRadius="70px"
              onClick={() => play({ id: 'mouse_click' })}
            >
              <Input
                type="radio"
                name="rate"
                data-type="low"
                data-color={null}
                data-number={null}
                onClick={rateHandler}
              />
              <Label fontSize="16px">low</Label>
            </Item>
            <Item
              width="60px"
              height="160px"
              onClick={() => play({ id: 'mouse_click' })}
            >
              <Input
                type="radio"
                name="rate"
                data-type="odd"
                data-color={null}
                data-number={null}
                onClick={rateHandler}
              />
              <Label fontSize="16px">odd</Label>
            </Item>
            <Item
              width="60px"
              height="160px"
              onClick={() => play({ id: 'mouse_click' })}
            >
              <Input
                type="radio"
                name="rate"
                data-type="red"
                data-color={null}
                data-number={null}
                onClick={rateHandler}
              />
              <Label fontSize="16px">red</Label>
            </Item>
          </Wrapper>
        </Wrapper>

        <Wrapper>
          <Item
            width="30px"
            height="60px"
            bottomLeftRadius="30px"
            onClick={() => play({ id: 'mouse_click' })}
          >
            <Input
              type="radio"
              name="rate"
              data-type="dozen-1"
              data-color={null}
              data-number={null}
              onClick={rateHandler}
            />
            <Label fontSize="12px">12P</Label>
          </Item>
          <Item
            width="30px"
            height="60px"
            onClick={() => play({ id: 'mouse_click' })}
          >
            <Input
              type="radio"
              name="rate"
              data-type="dozen-2"
              data-color={null}
              data-number={null}
              onClick={rateHandler}
            />
            <Label fontSize="12px">12M</Label>
          </Item>
          <Item
            width="30px"
            height="60px"
            onClick={() => play({ id: 'mouse_click' })}
          >
            <Input
              type="radio"
              name="rate"
              data-type="dozen-3"
              data-color={null}
              data-number={null}
              onClick={rateHandler}
            />
            <Label fontSize="12px">12D</Label>
          </Item>
          <Item
            width="30px"
            height="60px"
            onClick={() => play({ id: 'mouse_click' })}
          >
            <Input
              type="radio"
              name="rate"
              data-type="column-1"
              data-color={null}
              data-number={null}
              onClick={rateHandler}
            />
          </Item>
          <Item
            width="30px"
            height="60px"
            onClick={() => play({ id: 'mouse_click' })}
          >
            <Input
              type="radio"
              name="rate"
              data-type="column-2"
              data-color={null}
              data-number={null}
              onClick={rateHandler}
            />
          </Item>
          <Item
            width="30px"
            height="60px"
            onClick={() => play({ id: 'mouse_click' })}
          >
            <Input
              type="radio"
              name="rate"
              data-type="column-3"
              data-color={null}
              data-number={null}
              onClick={rateHandler}
            />
          </Item>
          <Item
            width="30px"
            height="60px"
            onClick={() => play({ id: 'mouse_click' })}
          >
            <Input
              type="radio"
              name="rate"
              data-type="dozen-3"
              data-color={null}
              data-number={null}
              onClick={rateHandler}
            />
            <Label fontSize="12px">12D</Label>
          </Item>
          <Item
            width="30px"
            height="60px"
            onClick={() => play({ id: 'mouse_click' })}
          >
            <Input
              type="radio"
              name="rate"
              data-type="dozen-2"
              data-color={null}
              data-number={null}
              onClick={rateHandler}
            />
            <Label fontSize="12px">12M</Label>
          </Item>
          <Item
            width="30px"
            height="60px"
            bottomRightRadius="30px"
            onClick={() => play({ id: 'mouse_click' })}
          >
            <Input
              type="radio"
              name="rate"
              data-type="dozen-1"
              data-color={null}
              data-number={null}
              onClick={rateHandler}
            />
            <Label fontSize="12px">12P</Label>
          </Item>
        </Wrapper>

        <Counter getValue={amountHandler} margin="30px 0 0 0" />

        <Button
          type="submit"
          background="green"
          width="100%"
          height="50px"
          borderRadius="50px"
          margin="30px 0 0 0"
          shadow
          onClick={() => play({ id: 'counter_click' })}
        >
          Make a bet
        </Button>
      </Form>

      <GameWheel value={randomNumber} isWon={isWon} />

      {showSuccessModal && (
        <Modal title="Congratulations, you've won." onClose={toggleSuccesModal}>
          <Success experience={experienceGained} money={receivedMoney} />
        </Modal>
      )}
    </Container>
  );
};

export default Mobile;
