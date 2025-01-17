import styled from '@emotion/styled';
export const Container = styled.div`
  @media screen and (max-width: var(--maxPRESMALL)) {
    max-width: 374px;
    width: 100%;
  }
  @media screen and (min-width: var(--small)) {
    width: 375px;
  }
  @media screen and (min-width: var(--medium)) {
    width: 768px;
  }
  @media screen and (min-width: var(--large)) {
    width: 1440px;
  }
`;

export const ScreenWrapper = styled.div`
  @media screen and (min-width: var(--xs)) {
    padding: 14px 20px 24px 20px;
  }
  @media screen and (min-width: var(--medium)) {
    padding: 18px 32px 32px 32px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const MainWrapper = styled.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: calc(100% - 260px);
  }
`;
