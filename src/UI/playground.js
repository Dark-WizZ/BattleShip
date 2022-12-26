import GameBoard from "../modules/GameBoard";
import CreateShip from "./createShips";
import Board from "./board";
import AI from "../modules/AI/ai";

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
    this.playerScoreTxt = document.querySelector('.board1 .score');
    this.aiScoreText = document.querySelector('.board2 .score');
    this.restartBtn = document.querySelector('.restart_btn');
    this.greetingsLayout = document.querySelector('.greetings_layout');
    this.greetingsTxt = document.querySelector('.greeting')
  }
  static render(){
    Board.boardCreate(this.aiBoard);
    Board.boardCreate(this.playerBoard);
    Board.boardRender(this.aiBoard.parentElement, this.aiData);
    Board.boardRender(this.playerBoard.parentElement, this.playerData);
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
  }
  static plotClick(plot){
    if(plot.hasAttribute('clicked')) return;
    plot.setAttribute('clicked', true);
    let x = plot.getAttribute('x');
    let y = plot.getAttribute('y');
    this.aiData.receiveAttack(x, y);
    Board.boardRender(this.aiBoard.parentElement, this.aiData);
    if(this.aiData.isAllSink()){
      this.greetingsTxt.textContent = `Player Won The Match`;
      this.greetingsLayout.style.display = 'grid';
    }
    this.ai.move(this.playerData);
    Board.boardRender(this.playerBoard.parentElement, this.playerData);
    if(this.playerData.isAllSink()){
      this.greetingsTxt.textContent = `AI Won The Match`;
      this.greetingsLayout.style.display = 'grid';
    }
  }
  static restartClick(){
    location.reload();
  }
}