import styled from "styled-components";

export const CertificationsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const CertificationCard = styled.a`
  background: ${({ theme }) => theme.cardBackground};
  padding: 20px;
  border-radius: 10px;
  text-decoration: none;  /* Prevents underline on links */
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 250px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color:  #B1B2B3;
  position: relative;
  
  h3 {
  font-size: 18px;
  font-weight: bold;
  color: #B1B2B3;  /* White color for heading */
      }  
  p {
    font-size: 14px;
    color:  #B1B2B3;
  }
  
  &:hover {
    background: ${({ theme }) => theme.primary};  
    color: white;
    transform: scale(1.05);
  }
  
  &:hover::after {
    // content: "Click to view details";
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    white-space: nowrap;
  }
`;
