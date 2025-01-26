const { getPokemonById } = require('./pokemon');

function inicializarPokemon(pokemonId) {
  const pokemon = getPokemonById(pokemonId);
  if (!pokemon) {
    throw new Error('Pokémon não encontrado');
  }

  const { levelInicial, evolucao } = pokemon;
  pokemon.nivelAtual = levelInicial;

  return { ...pokemon, nivelAtual: levelInicial, evolucao };
}

function criarTreinador(nome, idade, pokemonInicialId) {
  const pokemonInicial = inicializarPokemon(pokemonInicialId);
  return {
    nome,
    idade,
    pokemons: [pokemonInicial],
  };
}

function capturarPokemon(treinador, pokemonCapturadoId) {
  const pokemonCapturado = inicializarPokemon(pokemonCapturadoId);

  treinador.pokemons = treinador.pokemons.map((pokemon) => {
    pokemon.nivelAtual++;
    return verificarEvolucao(pokemon);
  });

  treinador.pokemons.push(pokemonCapturado);
}

function verificarEvolucao(pokemon) {
  if (pokemon.evolucao && pokemon.nivelAtual >= pokemon.evolucao.level) {
    const pokemonEvoluido = inicializarPokemon(pokemon.evolucao.id);
    return { ...pokemonEvoluido, nivelAtual: pokemonEvoluido.levelInicial };
  }
  return pokemon;
}

module.exports = { criarTreinador, capturarPokemon, verificarEvolucao ,inicializarPokemon};
