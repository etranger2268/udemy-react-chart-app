'use client';
import Image from 'next/image';
import { usePokemon } from '@/app/pokemon/_hooks/usePokemon';

export default function PokemonPage() {
  const { query, pokemon, errorMessage, fetchPokemon, handleSetQuery, loading } = usePokemon();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-center">
        <div className="space-y-4">
          <div className="space-y-2">
            <input
              type="text"
              value={query}
              disabled={loading}
              onChange={handleSetQuery}
              placeholder="ポケモンの名前を入力する"
              className="border h-9 rounded-md bg-transparent px-3 py-1 text-sm font-medium focus:outline-none focus:ring focus:ring-blue-500 disabled:bg-gray-200 disabled:cursor-not-allowed"
            />
            {errorMessage && <p className="text-sm text-red-500">ポケモンが見つかりません</p>}
          </div>

          {loading && <p className="text-center">Loading...</p>}

          {pokemon && (
            <div className="text-base text-center space-y-1">
              <h3>{pokemon.name}</h3>
              <div className="flex justify-center">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={150}
                  height={150}
                />
              </div>
              <p>タイプ: {pokemon.types.map(({ type }) => type.name).join(', ')}</p>
              <p>身長: {pokemon.height}</p>
              <p>重さ: {pokemon.weight}</p>
            </div>
          )}

          <div className="flex justify-center">
            <button
              type="button"
              disabled={loading}
              onClick={fetchPokemon}
              className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-md transition-all duration-100 hover:opacity-75 disabled:bg-gray-200 disabled:cursor-not-allowed"
            >
              検索
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
