const pokemons = [
    {
      id: 1,
      nome: "Squirtle",
      poderAtaque: 1,
      levelInicial: 1,
      evolucao: { level: 5, id: 2 },
    },
    {
      id: 2,
      nome: "Wartortle",
      poderAtaque: 10,
      levelInicial: 5,
      evolucao: { level: 10, id: 3 },
    },
    {
      id: 3,
      nome: "Blastoise",
      poderAtaque: 100,
      levelInicial: 10,
      evolucao: null,
    },
    {
      id: 4,
      nome: "Cyndaquil",
      poderAtaque: 1,
      levelInicial: 1,
      evolucao: { level: 5, id: 5 },
    },
    {
      id: 5,
      nome: "Quilava",
      poderAtaque: 10,
      levelInicial: 5,
      evolucao: { level: 10, id: 6 },
    },
    {
      id: 6,
      nome: "Thyphlosion",
      poderAtaque: 100,
      levelInicial: 10,
      evolucao: null,
    },
    {
      id: 7,
      nome: "Bulbasaur",
      poderAtaque: 1,
      levelInicial: 1,
      evolucao: { level: 5, id: 8 },
    },
    {
      id: 8,
      nome: "Ivysaur",
      poderAtaque: 10,
      levelInicial: 5,
      evolucao: { level: 10, id: 9 },
    },
    {
      id: 9,
      nome: "Venusaur",
      poderAtaque: 100,
      levelInicial: 10,
      evolucao: null,
    },
  ];
  
  function getPokemonById(id) {
    return pokemons.find((pokemon) => pokemon.id === id);
  }
  
  module.exports = { pokemons, getPokemonById };
  