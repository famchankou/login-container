import React, { useState } from 'react';
import styled from 'styled-components';

const StyledFormContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 25rem;
  padding: 2rem;
  box-sizing: border-box;
`;

const StyledForm = styled.form`
  border: 1px solid #c2c5c7;
  background-color: #f7f7f7;
  padding: .8rem;
  border-radius: .2rem;
  display: flex;
  flex-direction: column;
  min-width: 20rem;
`;

const LoginPage = ({ loginUser }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    if (email && password) {
      loginUser({ email, password });
    }
  }

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          pattern=".+@[\w]+.[\w]{1,4}"
          size="30"
          name="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)} /><br />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)} /><br /><br />
        <button type="submit">Submit</button>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default LoginPage;
