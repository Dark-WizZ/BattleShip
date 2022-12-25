import GameBoard from "../GameBoard";
import Ship from "../ship";

export default class AI{
  constructor(){
    this.gb = new GameBoard('AI');
    this.autoplace();
    this.firstHit;
    this.leftWing;
    this.rightWing;
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
    [x, y] = this.pickMove(board.board);
    board.receiveAttack(x, y);
    if(this.isItSink(board.board, x, y)){
      this.firstHit = this.rightWing = this.leftWing = undefined;
      return;
    }
    if(this.isItHit(board.board, x, y)){
      if(this.firstHit){
        if(this.rightWing) this.rightWing=[this.rightWing[0]+1, this.rightWing[1]]
        else if(this.leftWing) this.leftWing=[this.leftWing[0]-1, this.leftWing[1]]
      }else{
        this.firstHit = [x, y];
        this.rightWing = [x+1, y];
        this.leftWing = [x-1, y];
      }
    }else{
      if(this.firstHit){
        if(this.rightWing) this.rightWing = undefined;
      }
    }
  }

  isValidMove(board, x, y){
    if(x<0 || x>9 || y<0 || y>9) return false;
    if(!board[x][y]) return true;
    if(board[x][y] instanceof Ship){
      for(let ship of board[x][y].body)
      if(ship.coord.x == x && !ship.hit) return true;
    }return false;
  }

  isItHit(board, x, y){
    return (board[x][y]instanceof Ship && !this.isValidMove(board, x, y));
  }

  isItSink(board, x, y){
    return (board[x][y]instanceof Ship && board[x][y].isSink());
  }
  pickMove(board){
    let x, y;
    do{
      if(this.firstHit){
        if(this.rightWing) {
          [x,y]=this.rightWing;
          if(!this.isValidMove(board, x, y)){
            this.rightWing=undefined;
            continue;
          }
        }else if(this.leftWing) [x,y]=this.leftWing;
      }else{
        x = Math.floor(Math.random()*10);
        y = Math.floor(Math.random()*10);
      }
    }while(!this.isValidMove(board, x, y));
    return [x, y];
  }
}