import GameBoard from "../modules/GameBoard"

test('check placement at currect position',()=>{
  let gb = new GameBoard();
  let x=2, y=7, l=3;
  gb.place(x, y, l);
  let s1 = gb.ships[0];
  for(let i=x; i<=x+l; i++){
    expect(gb.board[x][y]).toBeDefined()
    expect(gb.board[x][y]).toBe(s1);
  }
})

test('check placement at wrong position',()=>{
  let gb = new GameBoard();
  let x=4, y=1, l=4;
  gb.place(x, y, l);
  expect(gb.board[1][2]).toBeUndefined()
})