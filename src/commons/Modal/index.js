import React, { useEffect } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

import { CloseButton } from '../CloseButton';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: stretch;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  /* height: 100%; */
  /* overflow: scroll; */
  transition: 0.5s;
  z-index: 100;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
        overflow: hidden;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

const LockScroll = createGlobalStyle`
  html, body {
    overflow: hidden;
  }
`;

export const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    console.log('isOpen', isOpen);
  }, [isOpen]);

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area=true]');
        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {isOpen && <LockScroll />}
      <motion.div
        variants={{
          open: {
            x: 0,
          },
          closed: {
            x: '100%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          type: 'spring',
          duration: 0.5,
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <div>
          {children({
            'data-modal-safe-area': 'true',
            CloseButton: <CloseButton onClose={onClose} />,
          })}
        </div>
      </motion.div>
    </ModalWrapper>
  );
};
