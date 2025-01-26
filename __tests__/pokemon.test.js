const { criarTreinador, capturarPokemon, inicializarPokemon } = require('../src/index');
const { getPokemonById } = require('../src/pokemon');

describe('Sistema de Treinador e Pokémon', () => {

  it('Deve subir o nível do pokemon corretamente', () => {
    const treinador = criarTreinador('Ash', 10, 1);
    capturarPokemon(treinador, 4);
    expect(treinador.pokemons[0].nivelAtual).toBe(2); 
  });

  it('Deve evoluir pokemon ao atingir o nível necessário', () => {
    const treinador = criarTreinador('Ash', 10, 1);
    treinador.pokemons[0].nivelAtual = 4; 
    capturarPokemon(treinador, 4); 
    expect(treinador.pokemons[0].nome).toBe('Wartortle'); 
    expect(treinador.pokemons[0].nivelAtual).toBe(5); 
  });

  it('Não deve evoluir pokemon caso não possua o level necessário', () => {
    const treinador = criarTreinador('Ash', 10, 1);
    capturarPokemon(treinador, 4); 
    expect(treinador.pokemons[0].nome).toBe('Squirtle'); 
    expect(treinador.pokemons[0].nivelAtual).toBe(2); 
  });

  it('Treinador será criado com nome correto', () => {
    const treinador = criarTreinador('Ash', 10, 1);
    expect(treinador.nome).toBe('Ash');
  });

  it('Treinador será criado com a idade correta', () => {
    const treinador = criarTreinador('Ash', 10, 1);
    expect(treinador.idade).toBe(10); 
  });

  it('Treinador será criado com o pokemon inicial correto', () => {
    const treinador = criarTreinador('Ash', 10, 1);
    expect(treinador.pokemons[0].nome).toBe('Squirtle'); 
    expect(treinador.pokemons[0].nivelAtual).toBe(1); 
  });

  it('Deve buscar corretamente um Pokémon por ID', () => {
    const pokemon = getPokemonById(3);
    expect(pokemon.nome).toBe('Blastoise');
    expect(pokemon.evolucao).toBeNull(); 
  });

  it('Treinador terá seus pokemons atualizados após nova captura', () => {
    const treinador = criarTreinador('Ash', 10, 1);
    capturarPokemon(treinador, 4); 
    expect(treinador.pokemons).toHaveLength(2); 
    expect(treinador.pokemons[1].nome).toBe('Cyndaquil'); 
  });

  it('Deve lançar erro ao inicializar um Pokémon com ID inválido', () => {
    expect(() => {
      inicializarPokemon(999); 
    }).toThrow('Pokémon não encontrado');
  });
});
