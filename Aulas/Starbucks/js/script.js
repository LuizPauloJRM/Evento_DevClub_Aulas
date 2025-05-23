//Variáveis : Memória do computador par armazenar dados
//let nome = "Lucas";
//let idade = 20;   
//Função : Bloco de código que pode ser chamado em qualquer lugar do programa
//function soma(a, b) {
//    return a + b;
//} 
//So executa a função quando chamamos ela "Quando ordenamos"
//console.log(soma(2, 3)); // 5 
//Algoritmo : Sequência de passos para resolver um problema ao clicar no botão alterar a cor do fundo e imagem 
//function mudarCor() {
//    let cor = document.getElementById("cor").value;
//    let imagem = document.getElementById("imagem");
//    let fundo = document.getElementById("fundo");
//Function para mudar a cor do fundo e imagem
//Algortmo
// Descobrir quando o usuário clicar no botão
// Assim que o usuário clicar no botão
// Mudar a cor do fundo
// Mudar a cor da imagem
//Document = HTML 
//getElementById = Seleciona o elemento pelo id
let circulo = document.querySelector(".circulo");// Seleciona o elemento com a classe "circulo"
function mudarCor(cor) {// Seleciona o elemento com id "cor"
    circulo.style.background= cor; // Altera a cor de fundo do elemento para vermelho no estilo css

}