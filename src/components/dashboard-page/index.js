import React from 'react';
import styled from 'styled-components';

const UserDataContainer = styled.div`
  margin: 0 auto;
  width: 25rem;
  background-color: #f7f7f7;
  border-radius: .3rem;
  padding: .8rem;
  color: #060d42;
  top: 5rem;
  position: relative;
`;

const UserDataItem = styled.div`
  margin: .3rem;
`;

const DashboardPage = ({ user }) => {
  const { userId, loggedInUntil, email } = user;

  return (
    <>
      <UserDataContainer>
        <UserDataItem>{`User ID: ${userId}`}</UserDataItem>
        <UserDataItem>{`User Email: ${email}`} {}</UserDataItem> 
        <UserDataItem>{`Valid Until: ${new Date(loggedInUntil).toUTCString()}`}</UserDataItem>
      </UserDataContainer>
    </>
  );
};

export default DashboardPage;
