const BASE_URL = 'http://localhost:3000';

window.addEventListener('load', () => {
    loadGenres()
});

const loadGenres = () => {
    const url = BASE_URL + '/genres';

    let genreList = document.getElementById('accordion')
    genreList.innerHTML = '';

    fetch(url)
    .then(response => response.json())
    .then(genres => {
        genres.map(genre => {
            genreList.innerHTML += genreMarkup(genre)
            genreSelectOption(genre)
        });
    });
};

const genreSelectOption = genreObj => {
    const genreSelect = document.getElementById('genre-select')

    const option = document.createElement('option')
    option.value = genreObj.id
    option.label = genreObj.name

    genreSelect.appendChild(option)
};

const genreMarkup = genreObj => {
    const genreGames = genreObj.games

    let markup = `<div class="card">
        <div class="card-header" id="${genreObj.name}">
        <h5 class="mb=0">
        <button class="btn btn-link"
        data-toggle="collapse"
        data-target="#${genreObj.id}"
        aria-expanded="true"
        aria-controls="${genreObj.id}">
        ${genreObj.name}
        </button>
        </h5>
        </div>

        <div id="${genreObj.id}"
        class="collapse show"
        aria-labelledby="${genreObj.name}"
        data-parent="#accordion">
        <div class="card-body">
        <ul id="genre-game-list" class="${
            genreObj.name
        }-class">
        ${gameMarkup(genreGames, genreObj)}
        </ul>
        </div>
        </div>
        </div>`;

    return markup
};

const gameMarkup = (gameArr, genreObj) => {
    const gameList = document.getElementsByClassName(genreObj.name + '-class')
    gameList.innerHTML = '';

    gameArr.map(game => {
        gameList.innerHTML += `<li>Title: ${game.title} --- Length: ${game.length} minutes --- Played: ${game.has_played}</li>`;
    });
    return gameList.innerHTML
};

// creating genre
const createGenreBtn = document.getElementById('create-genre-btn')
const createGenreText = document.getElementById('create-genre-text')

createGenreBtn.addEventListener('click', event => {
    event.preventDefault()
    createGenre()
})

const createGenre = () => {
    const genreName = createGenreText.value

    if (genreName.length > 0) {
        createGenreText.value = '';

        const genre = {
            name: genreName
        };

        fetch(BASE_URL + '/genres', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(genre)
        })
        .then(response => response.json())
        .then(genre => {
            const newGenre = new Genre(genre)
            newGenre.render()
        })
        .catch(error => {
            const errorMsg = document.getElementById('errors')
            console.log(error)
            errorMsg.innerHTML = 'Genre already exists.'
        })
    }
};

// creating games
const genreSelect = document.getElementById('genre-select')
const gameTitle = document.getElementById('create-game-title-text')
const gameLength = document.getElementById('create-game-length-text')
const playedCheckBox = document.getElementById('create-game-played-check')
const createGameBtn = document.getElementById('create-game-btn')
// const deleteGameBtn = document.getElementById('delete-game-btn')

// deleteGameBtn.addEventListener('click', event => {
//   event.preventDefault()
//   deleteGame()
// });


createGameBtn.addEventListener('click', event => {
    event.preventDefault()
    createGame()
});

const createGame = () => {
    const game = {
        title: gameTitle.value,
        length: gameLength.value,
        has_played: playedCheckBox.checked,
        genre_id: genreSelect.value
    };

    gameTitle.value = '';
    gameLength.value = '';

    fetch(BASE_URL + '/games', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    })
    .then(response => response.json())
    .then(game => {
        const newGame = new Game(game)
        newGame.render()
    })
    .catch(error => {
        const errorMsg = document.getElementById('errors')
        errorMsg.innerHTML = error
    });
  };
