import styled from '@emotion/styled';
import { ITextStyledd } from 'types/ITitle';

export const Text = styled.span<ITextStyledd>`
  font-size: 42px;

  font-size: ${({ type }) => {
    if (type === 'h1') {
      return '42px';
    }

    if (type === 'h2') {
      return '32px';
    }

    if (type === 'h3') {
      return '22px';
    }

    if (type === 'h4') {
      return '18px';
    }
  }};
  font-weight: 900;
  text-transform: uppercase;

  color: var(--brown-color);
`;
