const ghosts = [
    {
        name:"Spirit",
        description:"O mais comum dos fantasmas, mas ainda assim poderoso e perigoso. Normalmente encontrado em um de seus locais de caçada depois de uma morte não explicada.",
        Strengths:"None",
        Weaknesses:"Queime Incensos para fazê-los pararem de atacar por um longo período",
        Evidences:[
            "Spirit Box",
            "Impressões digitais",
            "Escrita Fantasma"
        ]
    },
    {
        name:"Wraith",
        description:"Um dos fantasmas mais perigosos e também o único até o momento que pode voar, sendo até mesmo capaz de atravessar paredes.",
        Strengths:"Nunca tocam o chão, tornando impossível ser caçado por meio de pegadas.",
        Weaknesses:"Wraiths são intoxicados por sal.",
        Evidences:[
            "Impressões digitais",
            "Temperaturas baixa",
            "Spirit Box"
        ]
    },
    {
        name:"Phantom",
        description:"Podem possuir os vivos, comumente invocado com um tabuleiro de Ouija e pode causar medo naqueles em volta.",
        Strengths:"Olhar para um Espectro diminui consideravelmente sua sanidade.",
        Weaknesses:"Tirar uma foto faz ele desparecer temporariamente.",
        Evidences:[
            "EMF Nível 5",
            "Orb Fantasma",
            "Temperatura Baixa"
        ]
    },
    {
        name:"Poltergeist",
        description:"Pode manipular objetos em volta para causar medo.",
        Strengths:"Pode arremessar múltiplos objetos de uma vez.",
        Weaknesses:"Salas vazias ou sem objetos que podem ser movidos.",
        Evidences:[
            "Spirit Box",
            "Impressõs digitais",
            "Orbe Fantasma"
        ]
    },
    {
        name:"Banshee",
        description:"Banshees são os que mais reagem aos Crucifixos e tentarão perseguir os caçadores e derrubá-los um por um.",
        Strengths:"Estabelece um alvo e manterá seu foco nele até que seja abatido.",
        Weaknesses:"Crucifixo.",
        Evidences:[
            "EMF Nível 5",
            "Impressões digitais",
            "Temperatura Negativa"
        ]
    },
    {
        name:"Jinn",
        description:"Fantasma territorial que irá atacar caso ameaçado. Pode viajar a velocidades altas, mas cortar a energia do cômodo limita sua agilidade.",
        Strengths:"O Jinn fica mais rápido ainda caso seu alvo se distancie.",
        Weaknesses:"Falta de energia elétrica.",
        Evidences:[
            "Spirit Box",
            "Orb Fantasma",
            "EMF Nível 5"
        ]
    },
    {
        name:"Mare",
        description:"O Mare é mais forte no escuro, então manter as luzes acesas e evitar cantos escuros reduz sua força, mas ele tentará apagar as luzes para poder caçar.",
        Strengths:"Ataca com frequência no escuro, vai apagar as luzes sozinho.",
        Weaknesses:"Luzes.",
        Evidences:[
            "Spirit Box",
            "Orb Fantasma",
            "Temperatura Negativa"
        ]
    },
    {
        name:"Revenant",
        description:"O Revenant ataca qualquer um independentemente da situação ou nível de sanidade. Se esconder fará com que ande mais devagar, mas quando decidir caçar um alvo se tornará o fantasma mais rápido do jogo.",
        Strengths:"Ataca qualquer um, a qualquer momento e pode trocar seu alvo deliberadamente",
        Weaknesses:"Se move muito devagar quando os jogadores se escondem.",
        Evidences:[
            "EMF Nível 5",
            "Impressões digitais",
            "Escrita Fantasma"
        ]
    },
    {
        name:"Assombração",
        description:"Não ataca quando há mais de uma pessoa perto, mas isso faz com que seja difícil o encontrar em grupo.",
        Strengths:"Muito difícil de encontrar.",
        Weaknesses:"Não caça se os jogadores estiverem em grupo.",
        Evidences:[
            "EMF Nível 5",
            "Orb Fantasma",
            "Escrita Fantasma"
        ]
    },
    {
        name:"Demon",
        description:"O Demônio é um dos piores para enfrentar, por ser extremamente agressivo e caçar com maior frequência, portanto é recomendado carregar um crucifixo. Para compensar, usar um tabuleiro de Ouija não drena sanidade.",
        Strengths:"Extremamente agressivo e caça com maior frequência, um dos fantasmas mais perigosos do jogo.",
        Weaknesses:"Usar o tabuleiro de Ouija para fazer perguntas não drena sanidade.",
        Evidences:[
            "Spirit Box",
            "Escrita Fantasma",
            "Temperatura Negativa"
        ]
    },
    {
        name:"Yurei",
        description:"O fantasma que mais rápido drena a sanidade dos jogadores, mas manchar a sala em que ele está o impede de sair.",
        Strengths:"Drena a sanidade mais rápido que qualquer outro fantasma.",
        Weaknesses:"Usar um Smudge Stick na sala em que ele está o impede de sair para qualquer lugar.",
        Evidences:[
            "Orb Fantasma",
            "Escrita Fantasma",
            "Temperatura Negativa"
        ]
    },
    {
        name:"Oni",
        description:"O Oni é muito ativo e provavelmente dará as caras nos primeiro minutos do jogo. Possui a tendência de andar em volta da sala assombrada, é recomendado se esconder em um armário e esperar que ele saia.",
        Strengths:"Extremamente ativo e move objetos rápido.",
        Weaknesses:"Muitos movimentos com muitos jogadores próximos o faz fácil de identificar.",
        Evidences:[
            "EMF Nível 5",
            "Spirit Box",
            "Escrita Fantasma"
        ]
    },
]

module.exports = ghosts;