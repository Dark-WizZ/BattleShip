import Playground from "./playground";
import GameBoard from "../modules/GameBoard";
import Board from "./board";

export default class CreateShip{
  static init(){
    this.domCache();
    this.render();
    this.bindEvent();
  }
  static render(){
    this.gb = new GameBoard("Player1");
    Board.boardCreate(this.createrBoard);
    this.domReload();
  }
  static domCache(){
    this.outLayout = document.querySelector('.outer_layout');
    this.inLayout = document.querySelector('.inner_layout');
    this.createrLayout = document.querySelector('.creater_layout');
    this.createrBoard = document.querySelector(' .creater_board');
    this.nextBtn = document.querySelector('.next_btn');
    this.oddClick = true;
  }
  static domReload(){
    this.plots = document.querySelectorAll('.creater_board .plot')
  }
  static bindEvent(){
    this.plots.forEach(e =>{
      e.addEventListener('click', x => this.plotClick(e))
    })
    this.nextBtn.addEventListener('click', this.nextBtnClick.bind(this));
  }

  static plotClick(e){
    let x = parseInt(e.getAttribute('x'));
    let y = parseInt(e.getAttribute('y'));
    if(this.oddClick){
      this.startBlock = e;
      e.style.background = '#fbbf12';
      this.start = {x, y};
      this.oddClick = false;
      return;
    }
    this.end = {x, y};
    let len = this.end.x - this.start.x + 1;
    let isPlaced = this.gb.place(this.start.x, this.start.y, len);
    if(!isPlaced) this.startBlock.style.background = 'none';
    Board.boardRender(this.createrBoard, this.gb);
    this.oddClick = true;
  }
  static oddClicked(){

  }
  static nextBtnClick(){
    this.createrLayout.style.display = 'none';
    this.inLayout.style.display = 'flex';
    Playground.init();
  }
}