const main = document.getElementsByTagName('main')[0]

function movieSection(movie, parentElement){
    const section = document.createElement('section');
    parentElement.appendChild(section);
    
    const img = document.createElement('img');
    section.appendChild(img);
    img.src = `img/${movie.movieTag}.jpg`;
    img.alt = movie.title;
    img.onclick = detailView.bind(img, movie);
            
    const movieTitle = document.createElement('h6');
    section.appendChild(movieTitle);
    movieTitle.innerText = movie.title;
}

// Grille des films
//
async function movieGrid() {
    try {
        let response = await fetch('./data/movies.json')
        const movies = await response.json()

        movies.forEach(movie => {
            movieSection(movie, main)
        })
    } catch (error){
        console.error(error)
    }
}

movieGrid()

// Affichage vue detail
//

function detailView(movie) {

    const modalWindow = document.createElement('div');

    main.appendChild(modalWindow);
    modalWindow.classList.add('modal');

    const section = document.createElement('section');
    modalWindow.appendChild(section);
    section.classList.add('modal-content');
    
    const img = document.createElement('img');
    section.appendChild(img);
    img.src = `img/${movie.movieTag}.jpg`;
    img.alt = movie.title;
    img.onclick = detailView.bind(img, movie);
     
    const modalP = document.createElement('p');
    section.appendChild(modalP);
    modalP.innerText = movie.synopsis;
           
    const movieTitle = document.createElement('h6');
    section.appendChild(movieTitle);
    movieTitle.innerText = movie.title;


    const modalSpan = document.createElement('span');
    section.appendChild(modalSpan);
    modalSpan.innerText = 'Close';
    modalSpan.onclick = function () {
        closeModal();
    }

    document.addEventListener('keydown', escapeKeyListener);

}

function escapeKeyListener(event) {
    if (event.keyCode === 27) {
        closeModal();
    }
}

function closeModal() {
    const modalWindow = document.getElementsByTagName('div')[0];
    main.removeChild(modalWindow);
    document.removeEventListener('keydown', escapeKeyListener);
}



