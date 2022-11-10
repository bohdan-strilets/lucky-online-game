import styled from '@emotion/styled';
import { ImUpload3 } from 'react-icons/im';

export const Text = styled.p`
  text-align: center;
  margin-bottom: 40px;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 150px;
  margin-bottom: 30px;

  background-color: var(--brown-transparent);
  border-radius: 30px;
`;

export const Input = styled.input`
  display: none;
`;

export const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;
  height: 40px;

  background-color: var(--brown-transparent);
  color: var(--brown-color);
  border: 2px solid var(--brown-color);
  border-radius: 10px;

  font-family: inherit;
  font-size: 20px;

  cursor: pointer;
  transition: background-color var(--hover-effect), color var(--hover-effect);

  :hover,
  :focus {
    background-color: var(--brown-color);
    color: var(--white-color);
  }
`;

export const Icon = styled(ImUpload3)`
  margin-right: 7px;
`;

export const Preview = styled.img`
  width: 150px;
  margin-left: 50%;
  transform: translate(-50%);
  margin-bottom: 50px;
`;
