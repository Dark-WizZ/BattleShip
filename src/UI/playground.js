import GameBoard from "../modules/GameBoard";
import CreateShip from "./createShips";
import Board from "./board";

export default class Playground{
  static init(){
    this.gameboard = CreateShip.gb;
    this.domCache();
    this.render();
    this.bindEvent();
  }
  static domCache(){
    this.outLayout  = document.querySelector('.outer_layout');
    this.inLayout = document.querySelector('.inner_layout');
    this.board1 = document.querySelector('.board1');
    this.board2 = document.querySelector('.board2');
  }
  static render(){
    Board.boardCreate(this.board1);
    Board.boardCreate(this.board2);
    Board.boardRender(this.board1, this.gameboard);
    this.domReload();
  }
  static domReload(){
    this.b1Plot = document.querySelectorAll('.board1 .plot');
  }
  static bindEvent(){
    this.b1Plot.forEach(e => {
      e.addEventListener('click',this.plotClick.bind(this, e))
    })
  }
  static plotClick(plot){
    let x = plot.getAttribute('x');
    let y = plot.getAttribute('y');
    this.gameboard.receiveAttack(x, y);
    Board.boardRender(this.board1, this.gameboard);
  }
}