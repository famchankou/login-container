import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';

const Footer = styled.div`
  display: flex;
`;

const ErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .6rem;
  box-sizing: border-box;
  background-color: #f1c9c9;
`;

const ErrorMessage = styled.span`
  color: red;
`;

const CloseMessageButton = styled.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #04144e;
`;

const PageTemplate = ({ error, clearError, children }) => {
  return (
    <>
      <Header />
      {error && <ErrorMessageContainer>
        <ErrorMessage>{error}</ErrorMessage>
        <CloseMessageButton onClick={clearError}>x</CloseMessageButton>
      </ErrorMessageContainer>}
      {children}
      <Footer />
    </>
  );
};

export default PageTemplate;
