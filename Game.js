const prompt = require('prompt-sync')({ sigint: true });
let numerosJaGerados = new Set();

function play() {
        const perguntasDoMilhao = [
            {
                pergunta: "Qual a capital do Brasil?",
                opcoes: ["(a)Rio de Janeiro", "(b)São Paulo", "(c)Brasília", "(d)Belo Horizonte"],
                premiaco: ["acertou: $100,00", "errou: $0,00", "parou: $25,00"],
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
    
        
    let opcao,nome,valor = 0,acertos = 0,erros = 0;

    console.log("SEJA BEM VINDO AO JOGO DO TRILÃO");
    
    

    do {
        console.log("NOS INFORME SEU NOME");
        nome = prompt();
        console.log("--------------------------MENU--------------------------");
        console.log("1 - INICIAR JOGO");
        console.log("2 - VER RANKING");
        console.log("3 - SAIR");
        console.log("--------------------------------------------------------");
        opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case '1':
                //**loop de rodada */
                for(let j = 0;j <=4;j++){
                    console.log(`rodada ${j+1}!!!!`)
                    //**loop de pergunta */
                    for(let i =0; i<=4;i++){
                        let resposta;
                        console.log(`Iniciando o jogo para ${nome}...`);
                        const primeiraPergunta = play();
                        let a = gerarNumeroAleatorioNaoRepetido(1, 24);
                        console.log(primeiraPergunta[a].pergunta);
                        console.log(primeiraPergunta[a].premiaco);
                        console.log(primeiraPergunta[a].opcoes);
                        console.log("deseja parar???[S]/[N]");
                        parar = prompt();
                        if(parar == 'S' || parar == 's'){
                            valor += 25;
                            break;
                        }
                        resposta = prompt("qua opção e a correta?: ");
                        if(resposta == primeiraPergunta[a].respostaCorreta){
                            valor += primeiraPergunta[a].valor;
                            acertos+=1;
                            console.log("acertou!!!");

                        }else{
                            erros+=1;
                            console.log("errou!!!");
                        }
                    } 
                    //**loop de pergunta */
                    console.log("deseja continuar para a proxima rodada???");
                    resposta = prompt("[S]/[N]");
                    if(resposta == 'N' || resposta == 'n'){
                        break;
                    }
                    
                }   
                //**loop de rodada */
                console.log("--------------------dados da partida--------------------");
                console.log(`player ${nome} `);
                console.log(`conseguiu $${valor}`);
                console.log(`acertou ${acertos} perguntas`);
                console.log(`errou ${erros} perguntas`);
                console.log(`parou na rodada n`);
                console.log("--------------------------------------------------------");

                valor = 0;
                acertos = 0;
                erros = 0;

                break;

            case '2':
                console.log("[critical---ERROR@##$$##] = dados indisponiveis no momento...");
                break;
            case '3':
                console.log("Saindo do jogo. falou seu pola!");
                break;
            default:
                console.log("Opção inválida");
        }
    } while (opcao !== '3');
}

iniciarJogo();