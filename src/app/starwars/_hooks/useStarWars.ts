import { useEffect, useState } from 'react';

type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  skin_color: string;
  birth_year: string;
  gender: string;
};

type UseStarWarsReturn = {
  character: Character | null;
  handleClick: () => void;
};

type UseStarWarsType = () => UseStarWarsReturn;

export const useStarWars: UseStarWarsType = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    const fetchCharacter = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const res = await fetch(`https://swapi.info/api/people/${id}`);
      if (!res.ok) {
        throw new Error('api error');
      }
      const data = (await res.json()) as Character;
      setCharacter(data);
    };

    fetchCharacter();
  }, [id]);

  const handleClick = () => {
    setCharacter(null);
    setId((prev) => {
      const nextId = prev + 1;
      return nextId % 83 === 0 ? 1 : nextId % 83;
    });
  };

  return { character, handleClick };
};
