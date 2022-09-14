import { IRateInfoState } from 'types/IStatusBar';
import { Wrapper, Title, Item, Property, Value } from './RateInfo.styled';

const RateInfo: React.FC<IRateInfoState> = ({
  type,
  number,
  color,
  betAmount,
  coefficient,
}) => {
  return (
    <Wrapper>
      <Title>Current rate</Title>
      <ul>
        <Item>
          <Property>type:</Property>
          <Value>{type ? type : '---'}</Value>
        </Item>
        <Item>
          <Property>number:</Property>
          <Value>{number ? number : '---'}</Value>
        </Item>
        <Item>
          <Property>color:</Property>
          <Value>{color ? color : '---'}</Value>
        </Item>
        <Item>
          <Property>bet amount:</Property>
          <Value>{`${betAmount ? betAmount : 0}$`}</Value>
        </Item>
        <Item>
          <Property>coefficient:</Property>
          <Value>{coefficient ? coefficient : '---'}</Value>
        </Item>
      </ul>
    </Wrapper>
  );
};

export default RateInfo;
