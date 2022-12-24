import GameBoard from "../modules/GameBoard";

export default class Playground{
  static init(){
    this.gameBoard = new GameBoard();
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
    this.boardCreate(this.board1);
    this.boardCreate(this.board2);
    this.sudoGame();
  }
  static domReload(){
    this.b1Plot = document.querySelectorAll('.board1 .plot');
  }
  static bindEvent(){
    this.b1Plot.forEach(e => {
      e.addEventListener('click',x=>this.plotClick(e))
    })
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
  static boardRender(board){
    for(let ship of this.gameBoard.ships){
      for(let part of ship.body){
        let tar = this.plotSelector(board, part);
        if(part.hit)
        tar.style.background = 'rgb(174, 241, 92)'
        // else
        // tar.style.background = 'rgb(241, 107, 92)'
      }
      if(ship.isSink()) ship.body.forEach(part => {
        let tar = this.plotSelector(board, part )
        tar.style.background = 'rgb(253, 44, 21)'
      })
    }
    for(let x=0; x<10; x++)
    for(let y=0; y<10; y++){
      if(this.gameBoard.board[x][y]==1){
        let tar = document.querySelector(`.${board.className} .plot[x="${x}"][y="${y}"]`);
        tar.style.background = 'rgb(69, 216, 249)';
      }
    }
  }
  static plotClick(plot){
    let x = plot.getAttribute('x');
    let y = plot.getAttribute('y');
    this.gameBoard.receiveAttack(x, y);
    this.boardRender(this.board1);
  }

  static plotSelector(board, part){
    let x = part.coord.x;
    let y = part.coord.y;
    let tar = document.querySelector(`.${board.className} .plot[x="${x}"][y="${y}"]`);
    return tar;
  }
  static sudoGame(){
    this.gameBoard.place(3, 4, 3);
    this.gameBoard.place(1, 8, 5);
    this.gameBoard.place(5, 2, 5);
    this.boardRender(this.board1);
  }
}