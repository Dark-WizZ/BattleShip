import Ship from '../modules/ship'
import Player from './player';

export default class GameBoard{
  constructor(name){
    this.player = new Player(name);
    this.board = new Array(10).fill().map(()=>new Array(10).fill());
    this.ships = new Array();
  }
  place(x, y, len){
    if(this.ships.length>=5 || len<=0) return false;
    if(x+len>10 || y>10) return false;
    if(this.board[x][y]) return false;
    let coll = (this.isColloidal(x, y, len))
    if(coll) return;
    let s = new Ship(x, y, len);
    this.ships.push(s);
    for(let i=x; i<x+len; i++)
    this.board[i][y] = s;
    return true;
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
  isColloidal(x, y, len){
    for(let s of this.ships){
      if(s.body[0].coord.y==y){
        let newStart = x;
        let newEnd = x+len-1;
        let start = s.body[0].coord.x;
        let end = s.body[0].coord.x + s.len - 1;
        if((newStart < start) && (newEnd >= start)) return true;
        if((newStart > start) && (newStart<=end)) return true
      }
    }
    return false;
  }
}