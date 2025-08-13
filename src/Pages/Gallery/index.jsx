import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GalleryContainer, BackButton, Title, SearchInput, ImageGrid, ImageCard } from "./Gallery.styles";

export default function Gallery() {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  const filteredPokemon = pokemonList.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleClick = (pokemon) => {
    navigate(`/gallery/${pokemon.name}`);
  };

  return (
    <GalleryContainer>
      <BackButton onClick={() => navigate("/")}>Voltar</BackButton>
      <Title>Galeria Pokémon</Title>
      <SearchInput
        type="text"
        placeholder="Buscar Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ImageGrid>
        {filteredPokemon.map((pokemon) => (
          <ImageCard key={pokemon.name} onClick={() => handleClick(pokemon)}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`}
              alt={pokemon.name}
            />
            <p>{pokemon.name}</p>
          </ImageCard>
        ))}
      </ImageGrid>
    </GalleryContainer>
  );
}
