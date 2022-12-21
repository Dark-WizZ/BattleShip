import Ship from '../modules/ship';

test ("Ship is not sink yet", ()=>{
  let s = new Ship(3);
  s.hit(0); s.hit(1);
  expect(s.isSink()).toBe(false);
})

test ("Sink the ship", ()=>{
  let s = new Ship(2);
  s.hit(0); s.hit(1);
  expect(s.isSink()).toBe(true);
})