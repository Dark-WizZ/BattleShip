import GameBoard from "../modules/GameBoard"

function checkShipOnBoard(gb, x, y, l, s){
  for(let i=x; i<=x+l; i++){
    let v = gb.board[x][y];
    if(!v || v!==s) return false;
  }return true;
}

test('check placement at currect position',()=>{
  let gb = new GameBoard();
  let x=2, y=7, l=3;
  gb.place(x, y, l);
  let s1 = gb.ships[0];
  expect(checkShipOnBoard(gb, x, y, l ,s1)).toBeTruthy();
})

test('check placement at wrong position',()=>{
  let gb = new GameBoard();
  let x=4, y=1, l=4;
  let s1 = gb.ships[0];
  gb.place(x, y, l);
  expect(checkShipOnBoard(gb, 5, y, l ,s1)).toBe(false);
})

test('check placement of multiple ships', ()=>{
  let gb = new GameBoard();
  let x=4, y=6, l=4;
  gb.place(x, y, l);
  let s = gb.ships[0];
  checkShipOnBoard(gb, x, y, l, s);
  x=1, y=4, l=5;
  gb.place(x, y, l);
  s = gb.ships[1];
  checkShipOnBoard(gb, x, y, l, s);
})

test('check placement of multiple wrong ships', ()=>{
  let gb = new GameBoard();
  let x1=4, y1=6, l1=4;
  gb.place(x1, y1, l1);
  let s1 = gb.ships[0];
  let x2=1, y2=4, l2=5;
  gb.place(x2, y2, l2);
  let s2 = gb.ships[1];
  expect(checkShipOnBoard(gb, x1, y1, l1, s2)).toBe(false);
  expect(checkShipOnBoard(gb, x2, y2, l2, s1)).toBe(false);
})
test('aware of space limits', ()=>{
  
})