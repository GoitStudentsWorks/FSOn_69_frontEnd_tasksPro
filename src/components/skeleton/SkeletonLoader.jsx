import { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import {
  Background,
  BackgroundHome,
  BackgroundLogin,
  BoardBody,
  Button,
  Header,
  ListWrapper,
  Logo,
  ProjectName,
  SideBar,
  Tabs,
  Theme,
  UserName,
  UserPic,
} from './SkeletonLoader.styled';

const SkeletonLoader = ({ page }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const generateSkeletonList = count => {
    return new Array(count)
      .fill(null)
      .map((_, index) => (
        <Skeleton
          key={index}
          height={154}
          style={{ marginBottom: 10, marginLeft: screenWidth < 776 ? 60 : 0 }}
        />
      ));
  };

  const skeletonColumns = screenWidth > 1150 ? 3 : screenWidth > 776 ? 2 : 1;

  return (
    <>
      {page === '/welcome' && (
        <SkeletonTheme baseColor="#bedbb0" highlightColor="#ffffff">
          <Background>
            <Skeleton width={162} height={162} style={{ marginBottom: 24 }} />
            <Skeleton width={200} height={40} style={{ marginBottom: 24 }} />
            <Skeleton width={400} height={36} style={{ marginBottom: 20 }} />
            <Skeleton width={344} height={50} style={{ marginBottom: 14 }} />
            <Skeleton width={40} height={21} style={{ marginBottom: 14 }} />
          </Background>
        </SkeletonTheme>
      )}
      {page === '/auth/login' && (
        <>
          <SkeletonTheme baseColor="#bedbb0" highlightColor="#ffffff">
            <BackgroundLogin>
              <Tabs>
                <Skeleton width={100} height={23} style={{}} />
                <Skeleton width={70} height={23} />
              </Tabs>
              <Skeleton width={345} height={50} style={{ marginBottom: 14 }} />
              <Skeleton width={345} height={50} style={{ marginBottom: 24 }} />
              <Skeleton width={345} height={50} style={{ marginBottom: 24 }} />
            </BackgroundLogin>
          </SkeletonTheme>
        </>
      )}
      {page === '/auth/register' && (
        <>
          <SkeletonTheme baseColor="#bedbb0" highlightColor="#ffffff">
            <BackgroundLogin>
              <Tabs>
                <Skeleton width={100} height={23} style={{}} />
                <Skeleton width={70} height={23} />
              </Tabs>
              <Skeleton width={345} height={50} style={{ marginBottom: 14 }} />
              <Skeleton width={345} height={50} style={{ marginBottom: 14 }} />
              <Skeleton width={345} height={50} style={{ marginBottom: 24 }} />
              <Skeleton width={345} height={50} style={{ marginBottom: 24 }} />
            </BackgroundLogin>
          </SkeletonTheme>
        </>
      )}
      {page.includes('/home/') && (
        <>
          <SkeletonTheme baseColor="#161616" highlightColor="#1f1f1f">
            <BackgroundHome>
              {screenWidth > 1150 && <SideBar></SideBar>}
              <Header>
                <Logo>
                  <Skeleton />
                </Logo>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Theme>
                    <Skeleton />
                  </Theme>
                  <UserName>
                    <Skeleton />
                  </UserName>
                  <UserPic>
                    <Skeleton />
                  </UserPic>
                </div>
              </Header>
              <BoardBody>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <ProjectName>
                    <Skeleton style={{ marginLeft: 60 }} />
                  </ProjectName>
                </div>
                <Button>
                  <Skeleton
                    height={50}
                    style={{ marginLeft: 60, marginBottom: 20 }}
                  />
                </Button>
                <div
                  style={{
                    display: 'flex',
                    gap: '30px',
                    marginTop: 6,
                    justifyContent: 'space-between',
                  }}
                >
                  {[...Array(skeletonColumns)].map((_, index) => (
                    <ListWrapper key={index}>
                      {generateSkeletonList(3)}
                    </ListWrapper>
                  ))}
                </div>
              </BoardBody>
            </BackgroundHome>
          </SkeletonTheme>
        </>
      )}
    </>
  );
};

export default SkeletonLoader;