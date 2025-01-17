import { media } from 'helpers';

import styled from '@emotion/styled';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ variant }) =>
    variant === 'welcome' ? 'center' : 'flex-start'};
  gap: ${({ variant }) => (variant === 'welcome' ? '14px' : '8px')};
  margin-top: ${({ variant }) => (variant === 'welcome' ? '14px' : '0')};
  padding: ${({ variant }) => (variant === 'welcome' ? '0' : ' 0 14px')};

  @media (min-width: 768px) {
    padding: ${({ variant }) => (variant === 'welcome' ? '0' : ' 0 24px')};
  }
`;

export const Welcome = styled.h1`
  color: #161616;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -1.12px;

  ${media.MEDIUM`
  font-size: 40px;
    letter-spacing: -1.6px;`}
`;

export const Board = styled.h1`
  color: ${props => `${props.theme.palette.text.sidemenu}`};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.64px;
`;
