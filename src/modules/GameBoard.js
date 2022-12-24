import Ship from '../modules/ship'
import Player from './player';

export default class GameBoard{
  constructor(name){
    this.player = new Player(name);
    this.board = new Array(10).fill().map(()=>new Array(10).fill());
    this.ships = new Array();
    if(name=='AI') this.autoplace();
  }
  place(x, y, len){
    if(this.ships.length>=5 || len<=0) return;
    if(x+len>10 || y>10) return;
    let s = new Ship(x, y, len);
    this.ships.push(s);
    for(let i=x; i<x+len; i++){
      this.board[i][y] = s;
    }
  }
  receiveAttack(x, y){
    let s = this.board[x][y];
    if(s instanceof Ship){
      s.hit(x,y); return;
    }this.board[x][y] = 1;
  }
  isAllSink(){
    for(let s of this.ships)
    if(!s.isSink()) return false;
    return true;
  }
  autoplace(){
    while(this.ships.length<5){
      let l = Math.floor(Math.random()*4)+2;
      let x = Math.floor(Math.random()*10);
      let y = Math.floor(Math.random()*10);
      this.place(x, y, l);
    }
  }
}