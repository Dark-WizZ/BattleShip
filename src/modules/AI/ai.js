import GameBoard from "../GameBoard";
import Ship from "../ship";

export default class AI{
  constructor(){
    this.gb = new GameBoard('AI');
    this.autoplace();
  }
  autoplace(){
    while(this.gb.ships.length<5){
      let l = Math.floor(Math.random()*4)+3;
      let x = Math.floor(Math.random()*10);
      let y = Math.floor(Math.random()*10);
      this.gb.place(x, y, l);
    }
  }
  move(board){
    let x, y;
    do{
      x = Math.floor(Math.random()*10);
      y = Math.floor(Math.random()*10);
    }while(!this.isValidMove(board.board, x, y));
    board.receiveAttack(x, y);
  }

  isValidMove(board, x, y){
    if(!board[x][y]) return true;
    if(board[x][y] instanceof Ship){
      for(let ship of board[x][y].body)
      if(ship.coord.x == x && !ship.hit) return true;
    }return false;
  }
}