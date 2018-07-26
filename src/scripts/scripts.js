// Tableau des films
// voir movies.json
/* const moviesTab = [
    { title: 'Jurassic Park', movieTag: 'jurassic', synopsis: 'Ne pas réveiller le chat qui dort... C\'est ce que le milliardaire John Hammond aurait dû se rappeler avant de se lancer dans le \"clonage\" de dinosaures. C\'est à partir d\'une goutte de sang absorbée par un moustique fossilisé que John Hammond et son équipe ont réussi à faire renaître une dizaine d\'espèces de dinosaures. Il s\'apprête maintenant avec la complicité du docteur Alan Grant, paléontologue de renom, et de son amie Ellie, à ouvrir le plus grand parc à thème du monde. Mais c\'était sans compter la cupidité et la malveillance de l\'informaticien Dennis Nedry, et éventuellement des dinosaures, seuls maîtres sur l\'île..' },
    { title: 'Matrix', movieTag: 'matrix', synopsis: 'Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l\'un des pirates les plus recherchés du cyber-espace. A cheval entre deux mondes, Neo est assailli par d\'étranges songes et des messages cryptés provenant d\'un certain Morpheus. Celui-ci l\'exhorte à aller au-delà des apparences et à trouver la réponse à la question qui hante constamment ses pensées : qu\'est-ce que la Matrice ? Nul ne le sait, et aucun homme n\'est encore parvenu à en percer les defenses. Mais Morpheus est persuadé que Neo est l\'Elu, le libérateur mythique de l\'humanité annoncé selon la prophétie. Ensemble, ils se lancent dans une lutte sans retour contre la Matrice et ses terribles agents...' },
    { title: 'Solo : A Star Wars Story ', movieTag: 'solo', synopsis: 'Embarquez à bord du Faucon Millenium et partez à l’aventure en compagnie du plus célèbre vaurien de la galaxie. Au cours de périlleuses aventures dans les bas-fonds d’un monde criminel, Han Solo va faire la connaissance de son imposant futur copilote Chewbacca et croiser la route du charmant escroc Lando Calrissian… Ce voyage initiatique révèlera la personnalité d’un des héros les plus marquants de la saga Star Wars.' },
    { title: 'Toy Story', movieTag: 'toy_story', synopsis: 'Quand le jeune Andy quitte sa chambre, ses jouets se mettent à mener leur propre vie sous la houlette de son pantin préféré, Woody le cow-boy. Andy ignore également que chaque anniversaire est une source d\'angoisse pour ses jouets qui paniquent à l\'idée d\'être supplantés par un nouveau venu. Ce qui arrive quand Buzz l\'éclair est offert à Andy. Cet intrépide aventurier de l\'espace, venu d\'une lointaine galaxie, va semer la zizanie dans ce petit monde et vivre avec Woody d\'innombrables aventures aussi dangereuses que palpitantes.' },
    { title: 'L\'envol de Ploé', movieTag: 'ploe', synopsis: 'L’hiver islandais approche. Pour les pluviers, le temps de la migration vers le sud a sonné. Mais PLOÉ ne sait toujours pas voler et se retrouve seul. Il décide alors de traverser « la terre de glace », espérant pouvoir atteindre une vallée préservée des affres du froid : Paradise Valley. Au cours de son périple, il fait la connaissance de GIRON, un majestueux oiseau blanc dont les ailes ont été jadis abimées par SHADOW, un terrible prédateur. Les deux compagnons vont alors rivaliser d’audace et d’amitié pour surmonter les dangers de l’hiver arctique afin que PLOÉ, enfin, prenne son envol.' },
    { title: 'Skycrapper', movieTag: 'skycrapper', synopsis: 'Ancien chef du commando de libération des otages du FBI et vétéran de l\'armée américaine, Will Sawyer est désormais responsable de la sécurité des gratte-ciels. Alors qu\'il est affecté à Hong Kong, il est accusé d\'avoir déclenché un incendie dans la tour la plus haute et réputée la plus sûre du monde … Considéré comme fugitif, Will doit retrouver les criminels, prouver son innocence et surtout sauver sa femme et ses deux enfants prisonniers du bâtiment en flammes …' },
    { title: 'Bécassine!', movieTag: 'becassine', synopsis: 'Bécassine naît dans une modeste ferme bretonne, un jour où des bécasses survolent le village. Devenue adulte, sa naïveté d’enfant reste intacte. Elle rêve de rejoindre Paris mais sa rencontre avec Loulotte, petit bébé adopté par la marquise de Grand-Air va bouleverser sa vie. Elle en devient la nourrice et une grande complicité s’installe entre elles. Un souffle joyeux règne dans le château. Mais pour combien de temps \? Les dettes s\’accumulent et l\’arrivée d’un marionnettiste grec peu fiable ne va rien arranger. Mais c\’est sans compter sur Bécassine qui va prouver une nouvelle fois qu\’elle est la femme de la situation.' }
]; */


// Grille des films
//
const main = document.getElementsByTagName('main')[0]


fetch('./data/movies.json')
    .then(response => {
        return response.json();
    })
    .then(data => data.forEach(movie => {
        const figure = document.createElement('figure');
        main.appendChild(figure);

        const img = document.createElement('img');
        figure.appendChild(img);
        img.src = `img/${movie.movieTag}.jpg`;
        img.alt = movie.title;
        img.onclick = detailView.bind(img, movie);
        const figcaption = document.createElement('figcaption');
        figure.appendChild(figcaption);
        figcaption.innerText = movie.title;
    })
    )
    .catch(console.error);


// Affichage vue detail
//

function detailView(movie) {

    const modalWindow = document.createElement('section');
    main.appendChild(modalWindow);
    modalWindow.classList.add('modal');

    const modalDiv = document.createElement('div');
    modalWindow.appendChild(modalDiv);
    modalDiv.classList.add('modal-content');

    const modalFigcaption = document.createElement('figcaption');
    modalDiv.appendChild(modalFigcaption);
    modalFigcaption.innerText = movie.title;

    const modalFigure = document.createElement('figure');
    modalDiv.appendChild(modalFigure);

    const modalImg = document.createElement('img');
    modalFigure.appendChild(modalImg);
    modalImg.src = `img/${movie.movieTag}.jpg`;
    modalImg.alt = movie.title;

    const modalP = document.createElement('p');
    modalFigure.appendChild(modalP);
    modalP.innerText = movie.synopsis;

    const modalSpan = document.createElement('span');
    modalDiv.appendChild(modalSpan);
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
    const modalWindow = document.getElementsByTagName('section')[0];
    main.removeChild(modalWindow);
    document.removeEventListener('keydown', escapeKeyListener);
}


