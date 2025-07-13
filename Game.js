const prompt = require('prompt-sync')({ sigint: true });
function play() {
        const perguntasDoMilhao = [
            {
                pergunta: "Qual a capital do Brasil?",
                opcoes: ["(a)Rio de Janeiro", "(b)São Paulo", "(c)Brasília", "(d)Belo Horizonte"],
                premiaco: ["caertou: $100,00", "errou: $0,00", "parou: $25,00"],
                respostaCorreta: "c",
                valor: 100
            },
            {
                pergunta: "Quem pintou a Mona Lisa?",
                opcoes: ["(a)Vincent van Gogh", "(b)Pablo Picasso", "(c)Leonardo da Vinci", "(d)Claude Monet"],
                premiaco: ["caertou: $100,00", "errou: $0,00", "parou: $25,00"],
                respostaCorreta: "c",
                valor: 100
            },
            {
                pergunta: "Quantos planetas existem no nosso sistema solar?",
                opcoes: ["(a)7", "(b)8", "(c)9", "(d)10"],
                premiaco: ["caertou: $100,00", "errou: $0,00", "parou: $25,00"],
                respostaCorreta: "b",
                valor: 100
            },
        ]
        return perguntasDoMilhao;
}

function iniciarJogo() {
    
        
    let opcao,nome,valor = 0;

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
                    console.log(primeiraPergunta[i].premiaco);

                    resposta = prompt("qua opção e a correta?: ");
                    if(resposta == primeiraPergunta[i].respostaCorreta){
                        console.log("acertou!!!");
                        valor += primeiraPergunta[i].valor;
                    }else{
                        console.log("errou!!!");
                    }
                    console.log(`player ${nome} conseguiu $${valor}`);
                    console.log("deseja parar???[S]/[N]");
                    parar = prompt();
                    if(parar == 'S' || parar == 's'){
                        break;
                    }
                }  
                break;
            case '2':
                console.log("Exibindo ranking...");
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