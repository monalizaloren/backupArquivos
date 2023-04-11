class Game {
    constructor() {}
  
    //Crie uma função que se chama 'getState' para obter o estado do jogo
    ???() {
        //Utilize o código 'database.ref' para referenciar o caminho do estado 
        //do jogo dentro do firebase
      var gameStateRef = ???("gameState");
      gameStateRef.on("value", function(data) {
        //O código ' data.val' atualiza com o valor atual do estado do jogo no banco de dados.
        gameState = ???();
      });
    }
    //Crie uma função chamada 'update' para atualizar o banco de daods
    update(state) {
        //Utilize o código que referecia o firebase
      ???("/").update({
        gameState: state
      });
    }
  
    start() {
        //Utilize 'new Player ()' para criar um objeto do player
      player = ???;
      playerCount = player.getCount();
  
      form = new Form();
      form.display();
  

      car1 = createSprite(width / 2 - 50, height - 100);
      car1.addImage("carro1", car1_img);
      car1.scale = 0.07;
  
      car2 = createSprite(width / 2 + 100, height - 100);
      car2.addImage("carro2", car2_img);
      car2.scale = 0.07;
  //Dentro da lista abaixo, adicione o nome do sprite do primeiro carro e do segundo carro
      cars = [???, ???];
      
    }
        drawSprites();
      }
    
  