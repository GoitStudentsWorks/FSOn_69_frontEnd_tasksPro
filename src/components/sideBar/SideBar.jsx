import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useModal } from 'hooks';
import {
  BoardPopUp,
  ButtonPlus,
  Logo,
  Modal,
  SideBarItem,
  SignOut,
  Support,
} from 'components';
import {
  BoardList,
  CreateBoard,
  Overlay,
  SideBarWrapper,
  TitleBoardList,
  TitleButton,
} from './SideBar.styled';

const SideBar = ({ isOpen, isClose, windowHeight }) => {
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const { boardName } = useParams();
  const boards = [];
  let BoardTitle = 'Project Office';
  let icon = '';
  let bg = '';

  return (
    <>
      <SideBarWrapper isOpen={isOpen} windowHeight={windowHeight}>
        <div>
          <Logo style={{ color: '#ffffff' }} />
          <TitleBoardList>My boards</TitleBoardList>
          <CreateBoard type="button" onClick={toggleModal}>
            <TitleButton>
              Create a <br />
              new board
            </TitleButton>
            <ButtonPlus
              width={40}
              height={36}
              stroke="#121212"
              backgroundColor="#BEDBB0"
              size={20}
            />
          </CreateBoard>
          {boardName && (
            <BoardList>
              {boards.map(({ id, iconName, title }) => (
                <SideBarItem key={id} iconName={iconName} title={title} />
              ))}
            </BoardList>
          )}
        </div>
        <div>
          <Support />
          <SignOut />
        </div>
      </SideBarWrapper>
      {isOpen && <Overlay onClick={isClose} />}
      {isModal && (
        <Modal onBackdropClick={onBackdropClick}>
          <BoardPopUp
            title={BoardTitle}
            iconName={icon}
            bg={bg}
            onClose={toggleModal}
          />
        </Modal>
      )}
    </>
  );
};

export default SideBar;

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isClose: PropTypes.func.isRequired,
};
