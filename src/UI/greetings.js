export default class Greetings{
  static init(name){
    this.name = name;
    this.domCache();
    this.render();
    this.bindEvent();
  }
  static render(){

  }
  static domCache(){
    this.greetingsLayout = document.querySelector('.greetings_layout');
    this.greetingGif = document.querySelector('.greeitngs_layout .gif img');
    this.greetingMessage = document.querySelector('.greeting');
    this.revealBtn = document.querySelector('.reveal_btn');
    this.restartBtn = document.querySelector('.restart_btn');
    this.reviewBtn = document.querySelector('.review_btn');
  }
  static bindEvent(){
    this.revealBtn.addEventListener('click', this.revealClk.bind(this));
    this.restartBtn.addEventListener('click', this.restartClk);
    this.reviewBtn.addEventListener('click', this.reviewClk.bind(this));
  }
}