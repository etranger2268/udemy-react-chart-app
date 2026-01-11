import { type ChangeEvent, useState } from 'react';

type PokemonType = {
  type: {
    name: string;
  };
};

type PokemonSprites = {
  front_default: string;
};

type Pokemon = {
  sprites: PokemonSprites;
  name: string;
  types: PokemonType[];
  height: number;
  weight: number;
};

type UsePokemonReturn = {
  query: string;
  loading: boolean;
  errorMessage: string;
  pokemon: Pokemon | null;
  handleSetQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  fetchPokemon: () => Promise<void>;
};

type UsePokemonType = () => UsePokemonReturn;

export const usePokemon: UsePokemonType = () => {
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const handleSetQuery = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
  const fetchPokemon = async () => {
    setPokemon(null);
    setErrorMessage('');
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      const data = (await res.json()) as Pokemon;
      setLoading(false);
      setPokemon(data);
    } catch (e) {
      setErrorMessage('ポケモンが見つかりません。');
      setLoading(false);
      setPokemon(null);
      console.error(e);
    }
  };

  return { query, loading, errorMessage, pokemon, handleSetQuery, fetchPokemon };
};
