class Forca {

    constructor(palavra) { // define as variaveis
      this.palavra = palavra;
      this.vidas = 6; // 6 vidas iniciais
      this.historico = []; // ira armazenar as letras erradas que forem digitadas
      this.palavra_escondida = palavra_parcial(palavra); // é a palavra definida pelo usuario com todos seus caracteres substituidos por "_"
    }
  
    chutar(letra) {
      if ((letra.length <= 0) || (letra.length > 1) || (this.historico.includes(letra))) { //caso a letra tenha mais de um caractere ou esteja vazio ou esteja incluido no historico, sistema ira continuar o jogo normalmente
        return "" // nada ocorre
      }
  
      this.historico.push(letra); // letra é incluida no historico
      if (!this.palavra.includes(letra)) { // caso letra nao esteja na palavra nem no historico, perde uma vida
        this.vidas--;
  
      } else {
        for (let i in this.palavra) { // faz uma busca por todos caracteres
          if (letra == this.palavra[i]) { // caso algum dos caracteres seja igual a letra
            this.palavra_escondida[i] = letra; // a posição do caractere que esta escondida é substituida pelo caractere informado pelo usuario 
          }}}}
  
    buscarEstado() {
      if (this.vidas == 0) { // se acabar as vidas jogador perde
        return "perdeu"
      }
      if (this.palavra_escondida.join("") == this.palavra) { // se a palavra for completa jogador ganha
        return "ganhou"
      }
      return "aguardando chute" // estado padrao
    } 
  
    buscarDadosDoJogo() {
      return {
        letrasChutadas: this.historico, // Deve conter todas as letras chutadas
        vidas: this.vidas, // Quantidade de vidas restantes
        palavra: this.palavra_escondida // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }}}

  function palavra_parcial(palavra) { //cria a array que contem apenas _ com o mesmo numero de itens que a palavra escolhida
    let palavraEscondida = []
    for (let _ in palavra) {
      palavraEscondida.push("_");
    }
    return palavraEscondida
  }
  
  module.exports = Forca;