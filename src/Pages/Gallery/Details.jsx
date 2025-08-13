import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto; /* duas linhas: card e botão */
  justify-items: center; /* centraliza horizontalmente */
  row-gap: 10px; /* espaço entre card e botão */
  padding: 30px;
  background-color: #000;
  align-items:center;
  min-height: 100vh;
  color: #fff;
`;


const BackButton = styled.button`
  margin-top: 20px; /* abaixo do card */
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.25);
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #ffae00;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255,255,255,0.2);
    transform: scale(1.05);
  }
`;


const PokemonCard = styled.div`
  display: inline-block;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 30px;
  color: #fff;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  border: 1px solid #fff; /* borda branca fina */
`;


const PokemonName = styled.h1`
  color: #ffae00;
  text-transform: capitalize;
  margin-bottom: 20px;
`;

const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

const Metric = styled.p`
  font-size: 18px;
  color: #ffea00; /* amarelo */
  margin: 5px 0;

  span {
    color: #fff; /* valor em branco */
    font-weight: bold;
  }
`;

export default function PokemonDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => setPokemon(data));
  }, [name]);

  if (!pokemon) return <DetailContainer>Carregando...</DetailContainer>;

  const heightMeters = (pokemon.height / 10).toFixed(2); // decímetros → metros
  const weightKg = (pokemon.weight / 10).toFixed(1); // hectogramas → kg

  return (
<DetailContainer>
  <PokemonCard>
    <PokemonName>{pokemon.name}</PokemonName>
    <PokemonImage 
      src={pokemon.sprites.other["official-artwork"].front_default} 
      alt={pokemon.name} 
    />
    <Metric>Altura: <span>{heightMeters} m</span></Metric>
    <Metric>Peso: <span>{weightKg} kg</span></Metric>
    <Metric>Tipo: <span>{pokemon.types.map(t => t.type.name).join(", ")}</span></Metric>
    <Metric>Habilidades: <span>{pokemon.abilities.map(a => a.ability.name).join(", ")}</span></Metric>
  </PokemonCard>

  <BackButton onClick={() => navigate("/gallery")}>Voltar</BackButton>
</DetailContainer>

  );
}
