let ALEATORIO = Math.floor(Math.random() * 100 + 1)
//geração do número aleatório
let entrada_usuario = "";
let tentativas = 0;
let opcao;

console.log("Adivinhe qual número eu estou pensando!\nEstou pensando em um número entre 1 e 200, você tem apenas 10 tentativas!")
process.stdin.on("data", function (data){
    entrada_usuario = Number(data.toString().trim()); //usuário digitando o número dentro do programa
    let diferenca = Math.abs(ALEATORIO - entrada_usuario)
    if(tentativas == 10){
        console.log("O número era ", ALEATORIO," Acabou suas chances! Obrigado por jogar!");
        process.exit()
    }
    if(tentativas == 5){
        console.log("Como você errou 5 vezes seguidas... SEU NÚMERO MUDOU, o número anterior era ", ALEATORIO);
        ALEATORIO = Math.floor(Math.random() * 200 + 1)
    }if(entrada_usuario == ALEATORIO){ //teste caso acerte
        console.log("Boa! você acertou!")
        process.exit()
    } else if(diferenca == 1){
        tentativas++
        console.log("PARECE QUE ESTÁ PERTO DE UM VULCÃO DE TÃO PERTO QUE ESTÁ! vocÊ ainda tem ", 10-tentativas," tente novamente:")
    }else if(diferenca > 5 && diferenca <= 10){ //se estiver no intervalo de 6 a 10
        tentativas++;
        console.log("Tá esquentando! você ainda tem ", 10-tentativas, " tentativas, tente novamente: ");
    } else if(diferenca < 6 && diferenca > 0){
        tentativas++;
        console.log("TÁ MUITO QUENTE! Você ainda tem ", 10-tentativas, " tentativas, tente novamente: ");
    } else if(diferenca > 10 && diferenca <= 20){
        tentativas++
        console.log("Está morno eu diria, nem tão longe, nem tão perto, você ainda tem ", 10-tentativas, " tentativas, tente novamente:")
    } else if(diferenca > 20){
        tentativas++
        console.log("Só eu que estou sentindo esse frio?! você ainda tem ", 10-tentativas," tente novamente:")
    }


})