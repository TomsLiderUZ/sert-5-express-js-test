import styled from 'styled-components';

export const StartMenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const StartMenuCardWrapper = styled.div`
  width: 300px;
  height: 300px;
  background-color: var(--cardBgOff);
  border: 1px solid var(--cardBdOff);
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.2s linear;

  &:hover {
    background-color: var(--cardBgOn);
    border: 1px solid var(--cardBdOn);
  }
`;
