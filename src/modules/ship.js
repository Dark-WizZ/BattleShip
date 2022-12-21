export default class Ship{
  constructor(lenght){
    this.length=lenght;
    this.body = new Array(lenght).fill().map(x=>new Part)
  }
  isSink(){
    for(let x of this.body){
      if (x.hit == false) return false;
    }return true;
  }
  hit(loc){
    this.body[loc].hit = true;
  }
}
class Part{
  constructor(){
    this.hit = false;
  }
}