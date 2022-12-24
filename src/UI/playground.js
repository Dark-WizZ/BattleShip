import GameBoard from "../modules/GameBoard";
import CreateShip from "./createShips";
import Board from "./board";
import AI from "../modules/AI/ai";

export default class Playground{
  static init(){
    this.player1Board = CreateShip.gb;
    this.ai = new AI();
    this.aiBoard = this.ai.gb;
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
    Board.boardRender(this.board1, this.player1Board);
    Board.boardRender(this.board2, this.aiBoard)
    this.domReload();
  }
  static domReload(){
    this.b2Plot = document.querySelectorAll('.board2 .plot');
  }
  static bindEvent(){
    this.b2Plot.forEach(e => {
      e.addEventListener('click',this.plotClick.bind(this, this.aiBoard, e))
    })
  }
  static plotClick(data, plot){
    let z = plot.getAttribute('cliked');
    console.log(z)
    if(plot.hasAttribute('clicked')) return;
    plot.setAttribute('clicked', true);
    console.log(plot);
    let x = plot.getAttribute('x');
    let y = plot.getAttribute('y');
    data.receiveAttack(x, y);
    Board.boardRender(plot.parentElement, data);
    this.ai.move(this.player1Board);
    Board.boardRender(this.board1, this.player1Board);
  }
}