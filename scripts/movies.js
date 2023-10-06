const movies = [
  {
    backdrop_path: "/mRGmNnh6pBAGGp6fMBMwI8iTBUO.jpg",
    genre_ids: [27, 9648, 53],
    id: 968051,
    overview:
      "Quatro anos após os acontecimentos na abadia de St. Carta, a Irmã Irene (Taissa Farmiga) regressa mais uma vez e depara-se com a força demoníaca de Valak, a Freira (Bonnie Aarons).",
    poster_path: "/omV2IW2OlFTSw6Hih13hz6lFdvP.jpg",
    release_date: "2023-09-06",
    title: "A Freira 2",
  },
  {
    backdrop_path: "/pA3vdhadJPxF5GA1uo8OPTiNQDT.jpg",
    genre_ids: [28, 18],
    id: 678512,
    overview:
      "A história de Tim Ballard, um ex-agente do governo dos EUA, que largou seu emprego para dedicar sua vida a resgatar crianças de traficantes sexuais globais.",
    poster_path: "/2BWhcrlPr6UvSJy5D044Ikq2QxH.jpg",
    release_date: "2023-07-03",
    title: "Som da Liberdade",
  },
  {
    backdrop_path: "/xFYpUmB01nswPgbzi8EOCT1ZYFu.jpg",
    genre_ids: [12, 28, 18],
    id: 980489,
    overview:
      "Baseado na história de Jann Mardenborough, e relata a trajetória de um jogador de videogame que utilizou suas habilidades nos simuladores para se tornar um piloto profissional de verdade.",
    poster_path: "/qU60nhBRbKU23gIGrZi2CvUj6MQ.jpg",
    release_date: "2023-08-09",
    title: "Gran Turismo: De Jogador a Corredor",
  },
  {
    backdrop_path: "/1syW9SNna38rSl9fnXwc9fP7POW.jpg",
    genre_ids: [28, 878, 12],
    id: 565770,
    overview:
      "Jaime Reyes, um adolescente de origem mexicana que encontra um artefato alienígena que lhe dá um exoesqueleto mecanizado e poderes, tornando-o no Besouro Azul.",
    poster_path: "/y5sdkgO4IJMTnkjh9PG7kREPWrP.jpg",
    release_date: "2023-08-16",
    title: "Besouro Azul",
  },
  {
    backdrop_path: "/jkKVLzLWjSvTnc84VzeljhSy6j8.jpg",
    genre_ids: [10749, 18],
    id: 820525,
    overview:
      "Hardin não para de pensar na sua relação conturbada com Tessa. Vítima de um bloqueio criativo, o jovem escritor resolve fazer as malas e partir para Lisboa, capital portuguesa, onde espera reencontrar a sua inspiração.",
    poster_path: "/tRjzdNiFHda6lrXySOQPyY3OtCA.jpg",
    release_date: "2023-09-13",
    title: "After: Para Sempre",
  },
  {
    backdrop_path: "/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg",
    genre_ids: [28, 878, 27],
    id: 615656,
    overview:
      "Um mergulho exploratório nas profundezas do oceano de uma ousada equipe de pesquisa se transforma em caos quando uma operação de mineração malévola ameaça sua missão e os força a uma batalha de alto risco pela sobrevivência.",
    poster_path: "/klGKGITBYYyTiHrph1VDSgGULOR.jpg",
    release_date: "2023-08-02",
    title: "Megatubarão 2",
  },
  {
    backdrop_path: "/1DBo2V4KyBWXuagt4JOR2jZJMHB.jpg",
    genre_ids: [28, 53],
    id: 1171541,
    overview:
      "Quando um culto terrorista internacional ameaça a estabilidade política global e sequestra um colega agente, Ace Sniper Brandon Beckett e a recém-formada Equipe de Resposta e Inteligência Global – ou GRIT – liderada pelo Coronel Stone devem viajar pelo mundo até Malta, infiltrar-se no culto e elimine seu líder para libertar Lady Death e deter a ameaça global.",
    poster_path: "/v7mXgXpNZYYPVBo6sqdxjIhQIsb.jpg",
    release_date: "2023-09-26",
    title: "O Atirador: Resposta Global e Equipe Tática",
  },
  {
    backdrop_path: "/lNxR7SmtFxFUfA7n9qtzuaIYvoM.jpg",
    genre_ids: [28, 53, 80],
    id: 926393,
    overview:
      "Sentindo-se em casa no sul da Itália, o ex-agente Robert McCall logo descobre que seus novos amigos estão sob o controle dos chefes do crime local.  À medida que os acontecimentos se tornam mortais, McCall sabe o que tem de fazer: tornar-se o protetor dos seus amigos, enfrentando a máfia.",
    poster_path: "/ysRGRuG4ccFzugiKZNXcx44wSnY.jpg",
    release_date: "2023-08-30",
    title: "O Protetor: Capitulo Final",
  },
  {
    backdrop_path: "/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg",
    genre_ids: [28, 9648, 53, 80],
    id: 762430,
    overview:
      "Com seus filhos presos no banco de trás e uma bomba que explodirá se eles saírem do carro, um trajeto normal se torna um jogo distorcido de vida ou morte enquanto Matt Turner segue as instruções cada vez mais perigosas de um estranho em uma corrida contra o tempo para salvar sua  família.",
    poster_path: "/yd0iEtqAXseXQgKf9RjmMaPjUPG.jpg",
    release_date: "2023-08-23",
    title: "A Chamada",
  },
  {
    backdrop_path: "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
    genre_ids: [28, 80, 53],
    id: 385687,
    overview:
      "O fim da estrada está chegando. Velozes & Furiosos 10, é o décimo filme da franquia Velozes & Furiosos, lança os capítulos finais de uma grande saga, uma das mais famosas e populares do cinema, agora com sua terceira década e ainda mais forte. Com o mesmo elenco e personagens principais de quando começou. Ao longo de muitas missões e lutando contra todos os obstáculos impossíveis, Dom Toretto (Vin Diesel) e sua família foram mais espertos, mais furiosos e mais rápidos do que todos os inimigos em seu caminho. Agora, eles enfrentam o seu oponente mais letal: uma ameaça terrível das sombras do passado, alimentada por sede de vingança e determinada a destruir esta família.",
    poster_path: "/wDWAA5QApz5L5BKfFaaj8HJCAQM.jpg",
    release_date: "2023-05-17",
    title: "Velozes & Furiosos 10",
  },
];
