![](https://sm.ign.com/t/ign_ap/video/p/pokemon-le/pokemon-lets-go-6-expert-tips_my7j.1280.jpg)

Um mundo pokemon é cheio de aventuras, imagine exemplificar ele por meio de algumas funções JS.

Na aplicação a gente deve poder criar um treinador, esse treinador terá nome, idade e um pokemon inicial

Conforme o treinador vai capturando novos pokemons, a cada captura, devemos executar os seguintes passos:

  - Subir 1 level de todos pokemons
  - Evoluir os pokemons que tiverem que evoluir
  - Adicionar o pokemon  capturado a uma nova instância do treinador.
  
 Devemos garantir o funcionamento da nossa aplicação por testes unitários.
 
 Podemos contar com uma lista pronta de pokemons. Sendo ela a seguinte: 
 
 ```js
 [ 
  {
    "id": 1,
    "nome": "Squirtle",
    "poderAtaque": 1,
    "levelInicial": 1,
    "evolucao": {
      "level": 5,
      "id": 2
    } 
  },
  {
    "id": 2,
    "nome": "Wartortle",
    "poderAtaque": 10,
    "levelInicial": 5,
    "evolucao": {
      "level": 10,
      "id": 3
    } 
  },
  {
    "id": 3,
    "nome": "Blastoise",
    "poderAtaque": 100,
    "levelInicial": 10,
    "evolucao": null
  },
  {
    "id": 4,
    "nome": "Cyndaquil",
    "poderAtaque": 1,
    "levelInicial": 1,
    "evolucao": {
      "level": 5,
      "id": 5
    }
  },
  {
    "id": 5,
    "nome": "Quilava",
    "poderAtaque": 10,
    "levelInicial": 5,
    "evolucao": {
      "level": 10,
      "id": 6
    }
  }, 
  {
    "id": 6,
    "nome": "Thyphlosion",
    "poderAtaque": 100,
    "levelInicial": 10,
    "evolucao": null
  }, 
  {
    "id": 7,
    "nome": "Bulbasaur",
    "poderAtaque": 1,
    "levelInicial": 1,
    "evolucao": {
      "level": 5,
      "id": 8
    }
  },
  {
    "id": 8,
    "nome": "Ivysaur",
    "poderAtaque": 10,
    "levelInicial": 5,
    "evolucao": {
      "level": 10,
      "id": 9
    }
  },
  {
    "id": 9,
    "nome": "Venusaur",
    "poderAtaque": 100,
    "levelInicial": 10,
    "evolucao": null
  }
]
 ```
 
 Agora falando um pouco sobre a estrutura do pokemon:
 ```js
  {
    "id": 8,
    "nome": "Ivysaur",
    "poderAtaque": 10,
    "levelInicial": 5,
    "evolucao": {
      "level": 10,
      "id": 9
    }
  }
 ```
 ```
 id: identificador único para aquele pokemon ser encontrado na lista.
 nome: nome do pokemon.
 poderAtaque: poder de ataque do pokemon.
 levelInicial: level que ele inicia quando capturado ou evoluido.
 evolucao: objeto que detalha a evolução do pokemon.
 evolucao.level: level que o pokemon deve chegar parar evoluir.
 evolucao.id: identificador do pokemon que ele ira se transformar.
 ```
 Lembrem-se não façam ligação com OO, bom exercicio.