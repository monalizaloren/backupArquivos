class Player {
    constructor (){
/*Dentro do constructor definas as seguintes propriedades:
"name": uma string que armazena o nome do jogador. Inicialmente, o valor é definido como "null".
"index": um número que armazena o índice do jogador. Inicialmente, o valor é definido como "null".
"positionX" e "positionY": números que armazenam as coordenadas X e Y da posição atual do jogador. Inicialmente, os valores são definidos como 0.
"rank": um número que armazena a posição do jogador na corrida. Inicialmente, o valor é definido como 0.
"fuel" e "life": números que armazenam a quantidade de combustível e de vida do jogador, respectivamente. Inicialmente, ambos os valores são definidos como 185.
"score": um número que armazena a pontuação do jogador. Inicialmente, o valor é definido como 0. 

Lembre-se de utilizar o "this" antes da criação desses atributos para referenciar o objeto atual em que o código está sendo executado
*/

  }
  
  
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on ("value",(data)=>{
        playerCount = data.val();
  
    })
  }
  
  updateCount (count){
    database.ref("/").update({
      playerCount: count
    });
  }
  }
  /* "getCount" e "updateCount". Ambos os métodos usam o objeto "database" para recuperar 
  ou atualizar dados armazenados em um banco de dados em tempo real do Firebase.*/


  /*getDistance é responsável por obter a posição atual do jogador no jogo (ou seja, as coordenadas X e Y do jogador)*/
  
  getDistance() {
    var playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value", data => {
        /*método "val()" é usado para obter o valor atual dos dados do jogador no banco de dados.
        Utilize esse método abaixo*/
      var data = data.???();
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    });
  }