import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  max-width: 95%;
  width: 95%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
  color: ${({ theme }) => theme.colors.grayscale.accents7};
  text-align: center;
`;

export const Description = styled.h3`
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.02em;
  width: 100%;
  margin: 0px 0px 20px;
  color: ${({ theme }) => theme.colors.grayscale.accents5};
  text-align: center;
  max-width: 500px;
`;
