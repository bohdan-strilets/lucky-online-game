import { OuterCircle, InnerCircle, Value } from './GameWheel.styled';

const GameWheel: React.FC<{}> = () => {
  return (
    <OuterCircle>
      <InnerCircle>
        <Value>11</Value>
      </InnerCircle>
    </OuterCircle>
  );
};

export default GameWheel;
