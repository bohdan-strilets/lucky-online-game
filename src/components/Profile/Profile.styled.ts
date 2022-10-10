import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 50px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 50px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 30px;

  border-bottom: 2px dotted var(--brown-color);

  :last-child {
    margin-bottom: 0;
  }
`;

export const Avatar = styled.img`
  position: absolute;
  top: -50px;
  left: 50px;

  width: 93px;
  height: 93px;

  border-radius: 50%;
  border: 3px solid var(--white-color);
  opacity: 1;

  cursor: pointer;
  transition: border-color var(--hover-effect), opacity var(--hover-effect);

  :hover,
  :focus {
    border-color: var(--brown-color);
    opacity: 0.7;
  }
`;

export const Name = styled.p`
  font-size: 44px;
  font-weight: 900;
  margin-bottom: 50px;
`;

export const Nickname = styled.span`
  font-size: 24px;
  color: var(--green-color);
`;

export const Text = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
`;

export const Value = styled.span`
  text-transform: uppercase;
  margin-right: 10px;
`;

export const EditBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;
  transition: opacity var(--hover-effect);

  :hover,
  :focus {
    opacity: 0.5;
  }
`;
