import styled from "styled-components";

export const GalleryContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #000; /* fundo preto */
  min-height: 100vh;
  color: #fff;
`;

export const BackButton = styled.button`
  margin-bottom: 20px;
  padding: 8px 16px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #ffae00; /* laranja */
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }
`;

export const Title = styled.h1`
  color: #ffae00; /* laranja */
  margin-bottom: 20px;
  text-shadow: 0 0 6px rgba(0,0,0,0.7);
`;

/* Input de busca */
export const SearchInput = styled.input`
  padding: 10px;
  width: 250px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 1px solid #ffae00; /* laranja */
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-weight: bold;

  ::placeholder {
    color: #ffea00; /* amarelo */
    font-weight: normal;
  }

  &:focus {
    outline: none;
    border-color: #ffea00;
    box-shadow: 0 0 6px #ffea00;
  }
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  justify-items: center;
  gap: 20px;
`;

export const ImageCard = styled.div`
  position: relative; /* necessário para o ::before */
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  border-radius: 15px;

  /* Glass effect */
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  overflow: hidden; /* para o shine não escapar do card */

  /* Pseudo-elemento para faixa de luz */
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(25deg) translateX(-100%);
    transition: transform 0.7s ease-in-out;
  }

  &:hover::before {
    transform: rotate(25deg) translateX(200%);
  }

  p {
    margin-top: 10px;
    text-transform: capitalize;
    color: #ffea00; /* amarelo */
    font-weight: bold;
    text-shadow: 0 0 4px rgba(0,0,0,0.6);
    z-index: 1; /* acima da faixa de luz */
    position: relative;
  }

  img {
    width: 96px;
    height: 96px;
    margin-bottom: 10px;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.6));
    z-index: 1; /* acima da faixa de luz */
    position: relative;
  }

  &:hover {
    transform: scale(1.08);
    transition: transform 0.25s;
  }
`;
