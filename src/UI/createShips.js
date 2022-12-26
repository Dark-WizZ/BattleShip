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
    this.gb = new GameBoard("Player");
    Board.boardCreate(this.createrBoard);
    this.domReload();
  }
  static domCache(){
    this.outLayout = document.querySelector('.outer_layout');
    this.inLayout = document.querySelector('.inner_layout');
    this.createrLayout = document.querySelector('.creater_layout');
    this.createrBoard = document.querySelector(' .creater_board');
    this.oddClick = true;
    this.startPointTxt = document.querySelector('.start_point_txt');
    this.endPointTxt = document.querySelector('.end_point_txt');
    this.startPointHead = document.querySelector('.start_point_txt .heading');
    this.endPointHead = document.querySelector('.end_point_txt .heading');
    this.startPointCont = document.querySelector('.start_point_txt .content');
    this.bottomPlayBtn = document.querySelector('.bottom_play_btn');
    this.count=1;
  }
  static domReload(){
    this.plots = document.querySelectorAll('.creater_board .plot');
    this.topPlayBtn = document.querySelector('.top_play_btn');
  }
  static bindEvent(){
    this.plots.forEach(e =>{
      e.addEventListener('click', x => this.plotClick(e));
    })
    this.bottomPlayBtn.addEventListener('click', this.playBtnClick.bind(this));
  }
  static bindEventReload(){
    this.topPlayBtn.addEventListener('click', this.playBtnClick.bind(this));
  }

  static plotClick(plot){
    let x = parseInt(plot.getAttribute('x'));
    let y = parseInt(plot.getAttribute('y'));
    if(this.oddClick){
      this.startBlock = plot;
      plot.style.background = '#fbbf12';
      this.start = {x, y};
      this.endPointHead.textContent = `Select Ship ${this.count}'s Ending Point`
      this.startPointTxt.style.display = 'none';
      this.endPointTxt.style.display = 'block';
      this.oddClick = false; return;
    }
    this.end = {x, y};
    let len = this.end.x - this.start.x + 1;
    let isPlaced = this.gb.place(this.start.x, this.start.y, len);
    if(isPlaced) this.count++;
    else this.startBlock.style.background = 'none';
    Board.boardRender(this.createrBoard, this.gb, true);
    this.startPointHead.textContent = `Select Ship ${this.count}'s Starting Point`;
    this.startPointTxt.style.display = 'block';
    this.endPointTxt.style.display = 'none';
    this.oddClick = true;
    if(this.count>5){
      this.startPointHead.textContent=`Ship Limit Reached!`;
      this.startPointCont.innerHTML=`you can't place more than 5 ships. Now you may proceed to 
            <button class="top_play_btn">Play>></button>
            <br>(click play button to start)`;
      this.domReload();
      this.count++;
      this.bindEventReload();
    }
  }

  static playBtnClick(){
    this.createrLayout.style.display = 'none';
    this.inLayout.style.display = 'grid';
    Playground.init();
  }
}