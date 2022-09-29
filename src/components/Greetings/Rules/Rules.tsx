import gameRules from 'data/gameRules.json';
import { Item } from './Rules.styled';

const Rules: React.FC<{}> = () => {
  return (
    <ol>
      {gameRules.map(({ id, rules }) => {
        return (
          <Item key={id}>
            <p>{rules}</p>
          </Item>
        );
      })}
    </ol>
  );
};

export default Rules;
