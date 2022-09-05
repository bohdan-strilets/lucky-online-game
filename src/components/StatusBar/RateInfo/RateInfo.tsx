import { Wrapper, Title, Item, Property, Value } from './RateInfo.styled';

const RateInfo: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Title>Current rate</Title>
      <ul>
        <Item>
          <Property>typy:</Property>
          <Value>zero</Value>
        </Item>
        <Item>
          <Property>number:</Property>
          <Value>0</Value>
        </Item>
        <Item>
          <Property>color:</Property>
          <Value>---</Value>
        </Item>
        <Item>
          <Property>bet amount:</Property>
          <Value>230$</Value>
        </Item>
        <Item>
          <Property>coefficient:</Property>
          <Value>2.5</Value>
        </Item>
      </ul>
    </Wrapper>
  );
};

export default RateInfo;
