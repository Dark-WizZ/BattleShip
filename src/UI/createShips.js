import Playground from "./playground";
import GameBoard from "../modules/GameBoard";

export default class CreateShip{
  static init(){
    this.domCache();
    this.render();
    this.bindEvent();
  }
  static render(){
    this.gb = new GameBoard();
    this.boardCreate(this.createrBoard);
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
      this.start = {x, y};
      this.oddClick = false;
      return;
    }
    this.end = {x, y};
    let len = this.end.x - this.start.x + 1;
    this.gb.place(this.start.x, this.start.y, len);
    this.boardRender(this.createrBoard, this.gb);
    this.oddClick = true;
  }
  static boardRender(board){
    for(let ship of this.gb.ships){
      for(let part of ship.body){
        let tar = this.plotSelector(board, part);
        if(!part.hit)
        tar.style.background = 'rgb(174, 241, 92)'
        else
        tar.style.background = 'rgb(241, 107, 92)'
      }
      if(ship.isSink()) ship.body.forEach(part => {
        let tar = this.plotSelector(board, part )
        tar.style.background = 'rgb(253, 44, 21)'
      })
    }
    for(let x=0; x<10; x++)
    for(let y=0; y<10; y++){
      if(this.gb.board[x][y]==1){
        let tar = document.querySelector(`.${board.className} .plot[x="${x}"][y="${y}"]`);
        tar.style.background = 'rgb(69, 216, 249)';
      }
    }
  }
  static plotSelector(board, part){
    let x = part.coord.x;
    let y = part.coord.y;
    let tar = document.querySelector(`.${board.className} .plot[x="${x}"][y="${y}"]`);
    return tar;
  }
  static boardCreate(board){
    for(let i=0; i<10; i++)
    for(let j=0; j<10; j++){
      let plot = document.createElement('div');
      plot.className = 'plot';
      plot.setAttribute('x', j);
      plot.setAttribute('y', i);
      board.append(plot);
    }
    this.domReload();
  }
  static nextBtnClick(){
    this.createrLayout.style.display = 'none';
    this.inLayout.style.display = 'flex';
    Playground.init();
  }
}