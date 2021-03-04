import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

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
  /* overflow: scroll; */
  transition: 0.5s;
  z-index: 100;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const Modal = ({ isOpen, onClose, children }) => (
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
          x: '33%',
        },
        closed: {
          x: '33%',
          y: '100%',
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
        })}
      </div>
    </motion.div>
  </ModalWrapper>
);