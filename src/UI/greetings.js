export default class Greetings{
  static init(name){
    this.player = name;
    this.domCache();
    this.render();
    this.bindEvent();
  }
  static render(){
    this.greetingMessage.textContent = `${this.player} Won The Match`;
    this.greetingsLayout.style.display = 'grid';
    this.setGif();
  }
  static domCache(){
    this.greetingsLayout = document.querySelector('.greetings_layout');
    this.greetingGif = document.querySelector('.greetings_layout .gif img');
    this.greetingMessage = document.querySelector('.greeting');
    this.revealBtn = document.querySelector('.greetings_layout .reveal_btn');
    this.restartBtn = document.querySelector('.greetings_layout .restart_btn');
    this.reviewBtn = document.querySelector('.greetings_layout .review_btn');
  }
  static bindEvent(){
    // this.revealBtn.addEventListener('click', this.revealClk.bind(this));
    this.restartBtn.addEventListener('click', this.restartClk);
    // this.reviewBtn.addEventListener('click', this.reviewClk.bind(this));
  }
  static async setGif(){
    const key = (this.player=='AI')? 'sad': 'happy'
    const apiCode = 'eNSyVSBV1h56QbQZN9TNR73COMnUtRvS';
    const reqUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiCode}&tag=${key}`;
    const response = await fetch(reqUrl);
    const resData = await response.json();
    const gifUrl = resData.data.images.downsized.url;
    this.greetingGif.src =gifUrl;
    this.greetingGif.style.display="block";
  }
  static restartClk(){
    console.log("restart")
    location.reload();
  }
}