const prompt = require('prompt-sync')({ sigint: true });
function play() {
        const perguntasDoMilhao = [
            {
                pergunta: "Qual a capital do Brasil?",
                opcoes: ["(a)Rio de Janeiro", "(b)São Paulo", "(c)Brasília", "(d)Belo Horizonte"],
                respostaCorreta: "c",
                dificuldade: "fácil"
            },
            {
                pergunta: "Quem pintou a Mona Lisa?",
                opcoes: ["(a)Vincent van Gogh", "(b)Pablo Picasso", "(c)Leonardo da Vinci", "(d)Claude Monet"],
                respostaCorreta: "c",
                dificuldade: "médio"
            },
            {
                pergunta: "Quantos planetas existem no nosso sistema solar?",
                opcoes: ["(a)7", "(b)8", "(c)9", "(d)10"],
                respostaCorreta: "b",
                dificuldade: "fácil"
            },
        ]
        return perguntasDoMilhao;
        
}

function iniciarJogo() {
    
        
    let opcao,nome;
    console.log("SEJA BEM VINDO AO JOGO DO TRILÃO");
    console.log("MAS ANTES VAMOS PEGAR ALGUNS DOS SEUS DADOS PARA USOS FUTUROS.....");
    console.log("NOS INFORME SEU nome ");
    nome = prompt();

    do {
        console.log("--------------------------MENU--------------------------");
        console.log("1 - INICIAR JOGO");
        console.log("2 - VER RANKING");
        console.log("3 - SAIR");
        console.log("--------------------------------------------------------");
        opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case '1':
                for(let i =0; i<=2;i++){
                    let resposta;
                    console.log(`Iniciando o jogo para ${nome}...`);
                    const primeiraPergunta = play();
                    console.log(primeiraPergunta[i].pergunta);
                    console.log(primeiraPergunta[i].opcoes);
            
                    resposta = prompt("qua opção e a correta?: ");
                    if(resposta == primeiraPergunta[i].respostaCorreta){
                        console.log("acertou!!!");
                    }else{
                        console.log("errou!!!");
                    }
                }  
                break;
            case '2':
                console.log("Exibindo ranking...");
                break;
            case '3':
                console.log("Saindo do jogo. Até logo!");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== '3');
}

iniciarJogo();