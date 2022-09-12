import { IGameWheelState } from 'types/IGameWheel';
import { OuterCircle, InnerCircle, Value } from './GameWheel.styled';

const GameWheel: React.FC<IGameWheelState> = ({ value, isWon }) => {
  return (
    <OuterCircle>
      <InnerCircle isWon={isWon}>
        <Value>{value}</Value>
      </InnerCircle>
    </OuterCircle>
  );
};

export default GameWheel;
