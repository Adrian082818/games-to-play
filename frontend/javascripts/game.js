class Game {
    constructor(gameObj) {
      this.title = gameObj.title;
      this.length = gameObj.length;
      this.hasPlayed = gameObj.has_played;
      this.genre = gameObj.genre;
    }
  
    render() {
      let gameList = document.getElementsByClassName(
        this.genre.name + '-class'
      )[0];
  
      let status = '';
  
      if (this.hasPlayed == false) {
        status = 'false';
      } else {
        status = 'true';
      }
  
      const newGame = `<li>Title: ${this.title} --- Length: ${this.length} minutes --- Played: ${status}</li>`;
      gameList.innerHTML += newGame;
    }
  }