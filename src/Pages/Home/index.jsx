import { useNavigate } from "react-router-dom";
import { HomeContainer, Button, MainImage, ButtonContainer, LogoImage } from "./Home.styles";
import mainImage from "../../assets/main.png"; 
import logoImage from "../../assets/logo.png"

export default function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <LogoImage src={logoImage} alt="Logo"/> 
      <h1>Bem-vindo!</h1>
      <ButtonContainer>
      <Button onClick={() => navigate("/todo")}>Lista To-Do</Button>
      <Button onClick={() => navigate("/gallery")}>Galeria Pokémon</Button>
      <Button onClick={() => navigate("/dashboard")}>Dashboard de Tarefas</Button>
      </ButtonContainer>
      <MainImage src={mainImage} alt="Main" />


    </HomeContainer>
  );
}
