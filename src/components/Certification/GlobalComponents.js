import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: #ffffff; /* Set all text to white */
    transition: all 0.3s ease-in-out;
  }
  a {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Section = styled.div`
  padding: 60px 20px;
  max-width: 1000px;
  margin: auto;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #ffffff !important;  /* Force white color */
  margin-bottom: 20px;
`;


export const SectionText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 40px;
`;
