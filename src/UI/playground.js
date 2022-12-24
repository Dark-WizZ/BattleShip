import GameBoard from "../modules/GameBoard";
import CreateShip from "./createShips";

export default class Playground{
  static init(){
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
    CreateShip.boardCreate(this.board1);
    CreateShip.boardCreate(this.board2);
    CreateShip.boardRender(this.board1);
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
    CreateShip.gb.receiveAttack(x, y);
    CreateShip.boardRender(this.board1);
  }
}