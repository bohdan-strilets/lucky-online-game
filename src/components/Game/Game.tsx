import { useState } from 'react';
import { useAppSelector } from 'hooks/useAppSelector';
import { getUser } from 'redux/user/userSelectors';
import useCoefficient from 'hooks/useCoefficient';
import useMakeMove from 'hooks/useMakeMove';
import { useAppDispatch } from 'hooks/useAppDispatch';
import operations from 'redux/user/userOperations';
import betsOperations from 'redux/bets/betsOperations';

import Container from 'components/InterfaceElements/Container';
import Button from 'components/InterfaceElements/Button';
import Counter from 'components/InterfaceElements/Counter';
import GameWheel from './GameWheel';

import numbers from 'data/numbers.json';
import { ICreateBetRes } from 'types/IBetsApi';
import { Form, Wrapper, Item, Input, Label } from './Game.styled';

const Game: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

  const { complexity, bank } = useAppSelector(getUser);
  const { getCoefficient } = useCoefficient();
  const { getWinner } = useMakeMove();

  const [type, setType] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);
  const [number, setNumber] = useState<number | null>(null);
  const [amount, setAmount] = useState<number | null>(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const rateHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    const type = e.currentTarget.dataset.type;
    const color = e.currentTarget.dataset.color;
    const number = e.currentTarget.dataset.number;

    setType(type !== undefined ? type : null);
    setColor(color !== undefined ? color : null);
    setNumber(number !== undefined ? Number(number) : null);
  };

  const amountHandler = (value: number) => setAmount(value);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const rate = {
      type,
      color,
      number,
      betAmount: amount,
      coefficient: getCoefficient(complexity && complexity),
    };

    if (
      rate.betAmount !== null &&
      rate.betAmount > 0 &&
      bank &&
      bank >= rate.betAmount
    ) {
      dispatch(operations.changeBank({ bank: -rate.betAmount }));
      const data = await dispatch(betsOperations.createBet(rate));

      const result = await getWinner(
        rate.type as string,
        rate.number as number,
        (data.payload as ICreateBetRes).bet._id,
      );
      setRandomNumber(result?.randomNumber as number);
      setIsWon(result?.isWon as boolean);
    }
  };

  return (
    <Container
      type="transparent"
      width="1250px"
      padding="50px"
      direction="row"
      justifyContent="space-between"
    >
      <Form onSubmit={submitHandler}>
        <Item
          width="300px"
          height="60px"
          margin="0 0 0 150px"
          topLeftRadius="30px"
          topRightRadius="30px"
        >
          <Input
            type="radio"
            name="rate"
            data-type="zero"
            data-color={null}
            data-number={0}
            onClick={rateHandler}
          />
          <Label fontSize="30px">0</Label>
        </Item>

        <Wrapper>
          <Wrapper direction="column">
            <Item width="150px" height="240px" topLeftRadius="70px">
              <Input
                type="radio"
                name="rate"
                data-type="high"
                data-color={null}
                data-number={null}
                onClick={rateHandler}
              />
              <Label>high</Label>
            </Item>
            <Item width="150px" height="240px">
              <Input
                type="radio"
                name="rate"
                data-type="even"
                data-color={null}
                data-number={null}
                onClick={rateHandler}
              />
              <Label>even</Label>
            </Item>
            <Item width="150px" height="240px">
              <Input
                type="radio"
                name="rate"
                data-type="black"
                data-color={null}
                data-number={null}
                onClick={rateHandler}
              />
              <Label>black</Label>
            </Item>
          </Wrapper>

          <Wrapper wrap="wrap">
            {numbers.map(({ number, color }) => {
              return (
                <Item
                  key={number}
                  width="calc(100% / 3)"
                  height="60px"
                  background={color}
                >
                  <Input
                    type="radio"
                    name="rate"
                    data-type="number"
                    data-color={color}
                    data-number={number}
                    onClick={rateHandler}
                  />
                  <Label fontSize="30px">{number}</Label>
                </Item>
              );
            })}
          </Wrapper>

          <Wrapper direction="column">
            <Item width="150px" height="240px" topRightRadius="70px">
              <Input
                type="radio"
                name="rate"
                data-type="low"
                data-color={null}
                data-number={null}
                onClick={rateHandler}
              />
              <Label>low</Label>
            </Item>
            <Item width="150px" height="240px">
              <Input
                type="radio"
                name="rate"
                data-type="odd"
                data-color={null}
                data-number={null}
                onClick={rateHandler}
              />
              <Label>odd</Label>
            </Item>
            <Item width="150px" height="240px">
              <Input
                type="radio"
                name="rate"
                data-type="red"
                data-color={null}
                data-number={null}
                onClick={rateHandler}
              />
              <Label>red</Label>
            </Item>
          </Wrapper>
        </Wrapper>

        <Wrapper>
          <Item width="50px" height="60px" bottomLeftRadius="30px">
            <Input
              type="radio"
              name="rate"
              data-type="dozen-1"
              data-color={null}
              data-number={null}
              onClick={rateHandler}
            />
            <Label fontSize="20px">12P</Label>
          </Item>
          <Item width="50px" height="60px">
            <Input
              type="radio"
              name="rate"
              data-type="dozen-2"
              data-color={null}
              data-number={null}
              onClick={rateHandler}
            />
            <Label fontSize="20px">12M</Label>
          </Item>
          <Item width="50px" height="60px">
            <Input
              type="radio"
              name="rate"
              data-type="dozen-3"
              data-color={null}
              data-number={null}
              onClick={rateHandler}
            />
            <Label fontSize="20px">12D</Label>
          </Item>
          <Item width="100px" height="60px">
            <Input
              type="radio"
              name="rate"
              data-type="column-1"
              data-color={null}
              data-number={null}
              onClick={rateHandler}
            />
          </Item>
          <Item width="100px" height="60px">
            <Input
              type="radio"
              name="rate"
              data-type="column-2"
              data-color={null}
              data-number={null}
              onClick={rateHandler}
            />
          </Item>
          <Item width="100px" height="60px">
            <Input
              type="radio"
              name="rate"
              data-type="column-3"
              data-color={null}
              data-number={null}
              onClick={rateHandler}
            />
          </Item>
          <Item width="50px" height="60px">
            <Input
              type="radio"
              name="rate"
              data-type="dozen-3"
              data-color={null}
              data-number={null}
              onClick={rateHandler}
            />
            <Label fontSize="20px">12D</Label>
          </Item>
          <Item width="50px" height="60px">
            <Input
              type="radio"
              name="rate"
              data-type="dozen-2"
              data-color={null}
              data-number={null}
              onClick={rateHandler}
            />
            <Label fontSize="20px">12M</Label>
          </Item>
          <Item width="50px" height="60px" bottomRightRadius="30px">
            <Input
              type="radio"
              name="rate"
              data-type="dozen-1"
              data-color={null}
              data-number={null}
              onClick={rateHandler}
            />
            <Label fontSize="20px">12P</Label>
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
        >
          Make a bet
        </Button>
      </Form>

      <GameWheel value={randomNumber} isWon={isWon} />
    </Container>
  );
};

export default Game;
