'use client';

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

export default function StarwarsPage() {
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
    setId((prev) => prev + 1);
  };

  if (!character) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center items-center">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col justify-center gap-4">
        <div className="text-center text-base">
          <h2>{character.name}</h2>
          <p>身長: {character.height}</p>
          <p>体重: {character.mass}</p>
          <p>髪の色: {character.hair_color}</p>
          <p>肌の色: {character.skin_color}</p>
          <p>目の色: {character.eye_color}</p>
          <p>生年: {character.birth_year}</p>
          <p>性別: {character.gender}</p>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleClick}
            className="bg-blue-500 py-2 px-4 rounded-md text-white text-sm font-medium transition-all duration-100 hover:opacity-75"
          >
            次のキャラクター
          </button>
        </div>
      </div>
    </div>
  );
}
