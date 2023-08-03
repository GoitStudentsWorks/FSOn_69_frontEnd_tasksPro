import React from 'react';
import { useSelector } from 'react-redux';

import { UserAvatar, Modal } from 'components';

import { useModal } from 'hooks';

import { authSelectors } from 'redux/auth';

import { Container, UserName, AvatarWrap } from './Profile.styled';

const Profile = () => {
  const user = useSelector(authSelectors.getUser);
  const { isModal, toggleModal, onBackdropClick } = useModal();

  return (
    <Container>
      <UserName>{user?.name ?? 'No User'}</UserName>
      <AvatarWrap onClick={toggleModal}>
        <UserAvatar avatar={user?.avatarURL} width="32px" height="32px" />
      </AvatarWrap>
      {isModal ? (
        <Modal onBackdropClick={onBackdropClick}>
          <div>PopUp</div>
        </Modal>
      ) : null}
    </Container>
  );
};

export default Profile;
