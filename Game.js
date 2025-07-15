const prompt = require('prompt-sync')({ sigint: true });
let numerosJaGerados = new Set();
let ranking = []; 
function play() {
    const perguntasDoMilhao = [
        {
            pergunta: "Qual a capital do Brasil?",
            opcoes: ["(a)Rio de Janeiro", "(b)São Paulo", "(c)Brasília", "(d)Belo Horizonte"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"], // Estes valores serão sobrescritos pela lógica da rodada
            respostaCorreta: "c",
            valor: 100 
        },
        {
            pergunta: "Quem pintou a Mona Lisa?",
            opcoes: ["(a)Vincent van Gogh", "(b)Pablo Picasso", "(c)Leonardo da Vinci", "(d)Claude Monet"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "c",
            valor: 100
        },
        {
            pergunta: "Quantos planetas existem no nosso sistema solar?",
            opcoes: ["(a)7", "(b)8", "(c)9", "(d)10"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "b",
            valor: 100
        },
        {
            pergunta: "Qual o maior oceano do mundo?",
            opcoes: ["(a)Oceano Atlântico", "(b)Oceano Índico", "(c)Oceano Pacífico", "(d)Oceano Ártico"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "c",
            valor: 100
        },
        {
            pergunta: "Qual animal é conhecido como o 'Rei da Selva'?",
            opcoes: ["(a)Tigre", "(b)Leão", "(c)Elefante", "(d)Urso"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "b",
            valor: 100
        },
        {
            pergunta: "Qual é o país mais populoso do mundo?",
            opcoes: ["(a)Índia", "(b)Estados Unidos", "(c)China", "(d)Indonésia"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "a",
            valor: 100
        },
        {
            pergunta: "Em que ano o homem pisou na Lua pela primeira vez?",
            opcoes: ["(a)1959", "(b)1969", "(c)1979", "(d)1989"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "b",
            valor: 100
        },
        {
            pergunta: "Qual é a capital da França?",
            opcoes: ["(a)Berlim", "(b)Madri", "(c)Londres", "(d)Paris"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "d",
            valor: 100
        },
        {
            pergunta: "Qual o elemento químico mais abundante na crosta terrestre?",
            opcoes: ["(a)Ferro", "(b)Silício", "(c)Oxigênio", "(d)Alumínio"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "c",
            valor: 100
        },
        {
            pergunta: "Quantos lados tem um triângulo?",
            opcoes: ["(a)2", "(b)3", "(c)4", "(d)5"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "b",
            valor: 100
        },
        {
            pergunta: "Qual rio é o mais longo do mundo?",
            opcoes: ["(a)Rio Amazonas", "(b)Rio Nilo", "(c)Rio Mississippi", "(d)Rio Yangtzé"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "a",
            valor: 100
        },
        {
            pergunta: "Quem escreveu 'Dom Quixote'?",
            opcoes: ["(a)William Shakespeare", "(b)Miguel de Cervantes", "(c)Machado de Assis", "(d)Victor Hugo"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "b",
            valor: 100
        },
        {
            pergunta: "Qual é o símbolo químico da água?",
            opcoes: ["(a)O2", "(b)CO2", "(c)H2O", "(d)NaCl"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "c",
            valor: 100
        },
        {
            pergunta: "Qual continente é o maior em área terrestre?",
            opcoes: ["(a)África", "(b)América do Norte", "(c)Ásia", "(d)Europa"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "c",
            valor: 100
        },
        {
            pergunta: "Qual é a velocidade da luz no vácuo (aproximadamente)?",
            opcoes: ["(a)300.000 km/h", "(b)3.000 km/s", "(c)300.000 km/s", "(d)30.000 km/s"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "c",
            valor: 100
        },
        {
            pergunta: "Qual cidade é conhecida como a 'Cidade Eterna'?",
            opcoes: ["(a)Atenas", "(b)Roma", "(c)Cairo", "(d)Istambul"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "b",
            valor: 100
        },
        {
            pergunta: "Qual é o nome do criador do Facebook?",
            opcoes: ["(a)Bill Gates", "(b)Steve Jobs", "(c)Mark Zuckerberg", "(d)Elon Musk"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "c",
            valor: 100
        },
        {
            pergunta: "Qual país tem a forma de uma bota?",
            opcoes: ["(a)Espanha", "(b)Grécia", "(c)Itália", "(d)Portugal"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "c",
            valor: 100
        },
        {
            pergunta: "Qual é a montanha mais alta do mundo?",
            opcoes: ["(a)Monte Fuji", "(b)Monte Kilimanjaro", "(c)Monte Everest", "(d)K2"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "c",
            valor: 100
        },
        {
            pergunta: "De que país é a banda The Beatles?",
            opcoes: ["(a)Estados Unidos", "(b)Canadá", "(c)Reino Unido", "(d)Austrália"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "c",
            valor: 100
        },
        {
            pergunta: "Qual é o maior animal terrestre?",
            opcoes: ["(a)Girafa", "(b)Elefante Africano", "(c)Rinoceronte", "(d)Hipopótamo"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "b",
            valor: 100
        },
        {
            pergunta: "Qual é o metal mais abundante na Terra?",
            opcoes: ["(a)Ferro", "(b)Cobre", "(c)Alumínio", "(d)Ouro"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "a",
            valor: 100
        },
        {
            pergunta: "Quem foi o primeiro presidente do Brasil?",
            opcoes: ["(a)Dom Pedro I", "(b)Marechal Deodoro da Fonseca", "(c)Getúlio Vargas", "(d)Juscelino Kubitschek"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "b",
            valor: 100
        },
        {
            pergunta: "Qual é o esporte mais popular do mundo?",
            opcoes: ["(a)Basquete", "(b)Tênis", "(c)Futebol", "(d)Natação"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "c",
            valor: 100
        },
        {
            pergunta: "Qual é o único número par primo?",
            opcoes: ["(a)0", "(b)1", "(c)2", "(d)4"],
            premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
            respostaCorreta: "c",
            valor: 100
        }
    ];
    return perguntasDoMilhao;
}

function gerarNumeroAleatorioNaoRepetido(min, max) {
    if (numerosJaGerados.size === (max - min + 1)) {
        numerosJaGerados.clear(); 
    }

    let numero;
    do {
        numero = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (numerosJaGerados.has(numero));

    numerosJaGerados.add(numero);
    return numero;
}

function iniciarJogo() {
    let nomeJogador;
    let jogarNovamente = 'S';

    
    while (jogarNovamente.toUpperCase() === 'S') {
        let valorAcumulado = 0; 
        let acertos = 0;
        let erros = 0;
        let rodadaQueParou = 0; 
        let ultimaRespostaCorreta = '';

        console.log("SEJA BEM VINDO AO JOGO DO TRILHÃO!");

        do {
            console.log("NOS INFORME SEU NOME:");
            nomeJogador = prompt().trim();
            if (nomeJogador === '') {
                console.log("O nome não pode ser vazio. Por favor, digite seu nome.");
            }
        } while (nomeJogador === '');

        console.log("--------------------------MENU--------------------------");
        console.log("1 - INICIAR JOGO");
        console.log("2 - VER RANKING");
        console.log("3 - SAIR");
        console.log("--------------------------------------------------------");
        let opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case '1':
            
                const premiacoesPorRodada = [
                    { acertou: 100, errou: 0, parou: 25 },
                    { acertou: 250, errou: 0, parou: 75 },
                    { acertou: 500, errou: 0, parou: 150 },
                    { acertou: 1000, errou: 0, parou: 300 },
                    { acertou: 5000, errou: 0, parou: 1000 }
                ];

               
                let continuarJogo = true;
                for (let j = 0; j < premiacoesPorRodada.length; j++) {
                    if (!continuarJogo) {
                        break; 
                    }

                    console.log(`\n### Rodada ${j + 1} de ${premiacoesPorRodada.length} ###`);
                    rodadaQueParou = j + 1; 

                    const perguntas = play();
                    
                    let indicePergunta = gerarNumeroAleatorioNaoRepetido(0, perguntas.length - 1);
                    let perguntaAtual = perguntas[indicePergunta];

                    console.log(`Pergunta: ${perguntaAtual.pergunta}`);
                    perguntaAtual.opcoes.forEach(opcao => console.log(opcao));

                    const premioAcerto = premiacoesPorRodada[j].acertou;
                    const premioErro = premiacoesPorRodada[j].errou;
                    const premioParou = premiacoesPorRodada[j].parou;

                    console.log(`\nPremiação desta rodada:`);
                    console.log(` - Acertou: $${premioAcerto.toFixed(2)}`);
                    console.log(` - Errou: $${premioErro.toFixed(2)} (perde tudo)`);
                    console.log(` - Parou: $${premioParou.toFixed(2)} (acumula o valor da parada)`);

                    console.log("Deseja parar e levar o valor acumulado? [S]/[N]");
                    let parar = prompt();
                    if (parar.toUpperCase() === 'S') {
                        valorAcumulado += premioParou;
                        console.log(`Você decidiu parar e levou $${premioParou.toFixed(2)} desta rodada.`);
                        continuarJogo = false; 
                        break; 
                    }

                    let respostaUsuario = prompt("Qual opção é a correta?: ").toLowerCase();
                    ultimaRespostaCorreta = perguntaAtual.respostaCorreta; 

                    if (respostaUsuario === perguntaAtual.respostaCorreta) {
                        valorAcumulado += premioAcerto;
                        acertos++;
                        console.log("ACERTOU! Parabéns!");
                    } else {
                        erros++;
                        valorAcumulado = premioErro; 
                        console.log(`ERROU! A resposta correta era: (${perguntaAtual.respostaCorreta.toUpperCase()})`);
                        console.log(`Você perdeu todo o seu dinheiro. Seu valor final é $${valorAcumulado.toFixed(2)}.`);
                        continuarJogo = false; 
                        break; 
                    }

                    if (j < premiacoesPorRodada.length - 1 && continuarJogo) {
                        console.log("\nDeseja continuar para a próxima rodada? [S]/[N]");
                        let respostaContinuar = prompt();
                        if (respostaContinuar.toUpperCase() === 'N') {
                            continuarJogo = false;
                        }
                    }
                }

                console.log("\n--------------------DADOS DA PARTIDA--------------------");
                console.log(`Jogador: ${nomeJogador}`);
                console.log(`Premiação Final: $${valorAcumulado.toFixed(2)}`);
                console.log(`Acertos: ${acertos} perguntas`);
                console.log(`Erros: ${erros} perguntas`);

                let rodadasFaltando = premiacoesPorRodada.length - rodadaQueParou;
                if (erros > 0) {
                    console.log(`Você errou na rodada ${rodadaQueParou}.`);
                } else if (rodadaQueParou < premiacoesPorRodada.length && !continuarJogo) {
                    console.log(`Você parou na rodada ${rodadaQueParou} (faltavam ${rodadasFaltando} rodadas).`);
                } else {
                    console.log(`Você completou todas as ${premiacoesPorRodada.length} rodadas!`);
                }
                console.log(`A resposta correta da última pergunta respondida foi: (${ultimaRespostaCorreta.toUpperCase()})`);
                console.log("--------------------------------------------------------");

                
                ranking.push({ nome: nomeJogador, valor: valorAcumulado, rodadaParou: rodadaQueParou });
                break;

            case '2':
                console.log("[error 404]");
                break;
            case '3':
                console.log("Saindo do jogo!");
                jogarNovamente = 'N'; 
                break;
            default:
                console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
        }

       
        if (opcao !== '3') {
            console.log("\nDeseja jogar novamente? [S]/[N]");
            jogarNovamente = prompt();
        }
    }
}

iniciarJogo();