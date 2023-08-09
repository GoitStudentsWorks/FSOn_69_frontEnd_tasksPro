import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { useBackground, useModal } from 'hooks';
import { fetchBoards } from 'redux/boards/boardOperations';
import operations from 'redux/boards/boardOperations';
import { selectActiveBoardId } from 'redux/boards/boardSelectors';
import SharedLayout from 'sharedLayout/SharedLayout';

import { BoardHead, BoardPopUp, Modal } from 'components';

import {
  BoardBody,
  BoardWrap,
  CreateBoardLink,
  WelcomeText,
} from './homePage.styled';

const HomePage = () => {
  const dispatch = useDispatch();
  const activeBoardId = useSelector(selectActiveBoardId);
  const { isModal, toggleModal, onBackdropClick } = useModal();
  const [backgroundImage] = useBackground('moon');
  // const boardName = false;
  const navigate = useNavigate();
  let BoardTitle = 'Project Office';
  let icon = '';
  let bg = '';

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  useEffect(() => {
    if (activeBoardId) {
      navigate(`/home/${activeBoardId}`);
    }
  }, [activeBoardId, navigate]);

  useEffect(() => {
    if (activeBoardId) {
      dispatch(operations.fetchColumnsTasks(activeBoardId));
    }
  }, [dispatch, activeBoardId]);

  return (
    <SharedLayout>
      <BoardWrap bg={backgroundImage}>
        <BoardHead boardName={activeBoardId} />
        <BoardBody>
          {activeBoardId ? (
            <>
              <Outlet />
            </>
          ) : (
            <>
              <WelcomeText>
                Before starting your project, it is essential to{' '}
                <CreateBoardLink onClick={toggleModal}>
                  create a board
                </CreateBoardLink>{' '}
                to visualize and track all the necessary tasks and milestones.
                This board serves as a powerful tool to organize the workflow
                and ensure effective collaboration among team members.
              </WelcomeText>
            </>
          )}
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
        </BoardBody>
      </BoardWrap>
    </SharedLayout>
  );
};
export default HomePage;
