import styled from "styled-components";


export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* começa de cima para baixo */
  gap: 20px;
  background: #ffffff; 
  padding-top: 40px;
  color: #93c249;
`;

export const ButtonContainer = styled.div`
     display:flex;
     gap:10%;
     margin-right: 10%;
     margin-left: 10%;
`;

export const MainImage = styled.img`
  max-width: 100%;
  height:80%;
`;

export const LogoImage = styled.img`
  max-width: 20%;
  height:10%;
`;


export const Button = styled.button`
  padding: 12px 24px;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  background: #93c249;
  color: white;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;