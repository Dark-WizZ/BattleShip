import Ship from '../modules/ship'

export default class GameBoard{
  constructor(){
    this.board = new Array(10).fill().map(()=>new Array(10).fill());
    this.ships = new Array();
  }
  place(x, y, len){
    if(this.ships.length>4) return;
    let s = new Ship(len);
    this.ships.push(s);
    for(let i=x; i<=x+len; i++){
      this.board[x][y] = s;
    }
  }
}