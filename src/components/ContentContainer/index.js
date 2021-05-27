import styled from 'styled-components';

export default function ContentContainer({ children }) {
  return <Container>{children}</Container>;
}

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  max-width: 95%;
  width: 95%;
  height: 100vh;
  margin: 0 auto;
`;
