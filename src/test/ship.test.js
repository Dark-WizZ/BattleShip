import Ship from '../modules/ship';

test ("Ship is not sink yet", ()=>{
  let s = new Ship(1, 1, 3);
  s.hit(1, 1); s.hit(2, 1);
  expect(s.isSink()).toBe(false);
})

test ("Sink the ship", ()=>{
  let s = new Ship(1, 1, 2);
  s.hit(1, 1); s.hit(2, 1);
  expect(s.isSink()).toBe(true);
})