class Genre {
    constructor(genreObj) {
        this.id = genreObj.id
        this.name = genreObj.name 
    }

    render() {
        const genreSelect = document.getElementById('genre-select')

        const option = document.createElement('option')
        option.value = this.id
        option.label = this.name

        genreSelect.appendChild(option)

        let genreList = document.getElementById('accordion')

        const newGenreMarkup = `<div class="card">
        <div class="card-header" id="${this.name}">
        <h5 class="mb=0">
        <button class="btn btn-link"
        data-toggle="collapse"
        data-target="#${this.id}"
        aria-expanded="true"
        aria-controls="${this.id}">
        ${this.name}
        </button>
        </h5>
        </div>
        
        <div id="${this.id}"
        class="collapse show"
        aria-labelledby="${this.name}"
        data-parent="#accordion">
        <div class="card-body">
        <ul id="genre-game-list" class="${this.name}-class">
        </ul>
        </div>
        </div>
        </div>`;

        genreList.innerHTML += newGenreMarkup
    }
}