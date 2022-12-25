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
    let x, y, bd;
    do{
      let hit=false
      x = Math.floor(Math.random()*10);
      y = Math.floor(Math.random()*10);
      bd = board.board[x][y];
    if(bd instanceof Ship){
      bd.body.forEach(e=>{
        if(e.hit && e.coord.x == x) hit=true;
      })
      if(hit)continue;
      else break;
    }
    }while(bd);
    board.receiveAttack(x, y);
  }
}