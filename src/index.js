const { getPokemonById } = require('./pokemon');

function criarTreinador(nome, idade, pokemonInicialId) {
  const pokemonInicial = { ...getPokemonById(pokemonInicialId) };
  pokemonInicial.nivelAtual = pokemonInicial.levelInicial; 
  return {
    nome,
    idade,
    pokemons: [pokemonInicial],
  };
}

function capturarPokemon(treinador, pokemonCapturadoId) {
  const pokemonCapturado = { ...getPokemonById(pokemonCapturadoId) };
  pokemonCapturado.nivelAtual = pokemonCapturado.levelInicial; 

  treinador.pokemons = treinador.pokemons.map((pokemon) => {
    pokemon.nivelAtual++;
    return verificarEvolucao(pokemon);
  });

  treinador.pokemons.push(pokemonCapturado);
}

function verificarEvolucao(pokemon) {
  if (pokemon.evolucao && pokemon.nivelAtual >= pokemon.evolucao.level) {
    const pokemonEvoluido = { ...getPokemonById(pokemon.evolucao.id) };
    pokemonEvoluido.nivelAtual = pokemon.evolucao.level; 
    return pokemonEvoluido;
  }
  return pokemon;
}

module.exports = { criarTreinador, capturarPokemon, verificarEvolucao };
