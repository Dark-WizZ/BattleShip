import GameBoard from "../modules/GameBoard";
import CreateShip from "./createShips";
import Board from "./board";
import AI from "../modules/AI/ai";
import Greetings from "./greetings";

export default class Playground{
  static init(){
    this.playerData = CreateShip.gb;
    this.ai = new AI();
    this.aiData = this.ai.gb;
    this.domCache();
    this.render();
    this.bindEvent();
  }
  static domCache(){
    this.outLayout  = document.querySelector('.outer_layout');
    this.inLayout = document.querySelector('.inner_layout');
    this.board1 = document.querySelector('.board1');
    this.board2 = document.querySelector('.board2');
    this.aiBoard = document.querySelector('.board1 .board');
    this.playerBoard = document.querySelector('.board2 .board');
    this.restartBtn = document.querySelector('.restart_btn');
    this.greetingsLayout = document.querySelector('.greetings_layout');
    this.greetingsTxt = document.querySelector('.greeting');
    this.revealBtn = document.querySelector('.inner_layout .reveal');
  }
  static render(){
    Board.boardCreate(this.aiBoard);
    Board.boardCreate(this.playerBoard);
    Board.boardRender(this.aiBoard.parentElement, this.aiData, false);
    Board.boardRender(this.playerBoard.parentElement, this.playerData, true);
    this.domReload();
  }
  static domReload(){
    this.b1Plot = document.querySelectorAll('.board1 .plot');
  }
  static bindEvent(){
    this.b1Plot.forEach(e => {
      e.addEventListener('click',this.plotClick.bind(this, e))
    })
    this.restartBtn.addEventListener('click', this.restartClick.bind(this));
    this.revealBtn.addEventListener('click', this.revealClk.bind(this));
  }
  static plotClick(plot){
    if(plot.hasAttribute('clicked')) return;
    plot.setAttribute('clicked', true);
    let x = plot.getAttribute('x');
    let y = plot.getAttribute('y');
    this.aiData.receiveAttack(x, y);
    Board.boardRender(this.aiBoard.parentElement, this.aiData, false);
    if(this.aiData.isAllSink()) Greetings.init('Player');
    this.ai.move(this.playerData);
    Board.boardRender(this.playerBoard.parentElement, this.playerData, true);
    if(this.playerData.isAllSink()) Greetings.init('AI');
  }
  static restartClick(){
    location.reload();
  }
  static revealClk(){
    Board.boardRender(this.aiBoard, this.aiData, true);
  }
}