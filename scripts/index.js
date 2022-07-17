/*FORMULARIOS*/
/*Personaje*/
const characterForm = document.getElementById('characterFormContainer')
const characterDelete = document.getElementById('characterDeleteBtn')
const showChar = document.getElementById('showCharacter')
showChar.addEventListener("click", (e)=>{
    e.preventDefault();
    characterForm.classList.remove("is-hidden")
})
characterDelete.addEventListener("click", (e)=>{
    e.preventDefault();
    characterForm.classList.add("is-hidden")
})
/*Pelicula*/
const movieForm = document.getElementById('movieFormContainer')
const movieDelete = document.getElementById('movieDeleteBtn')
const showMovie = document.getElementById('showMovie')
showMovie.addEventListener("click", (e)=>{
    e.preventDefault();
    movieForm.classList.remove("is-hidden")
})
movieDelete.addEventListener("click", (e)=>{
    e.preventDefault();
    movieForm.classList.add("is-hidden")
})
/*Serie*/
const serieForm = document.getElementById('serieFormContainer')
const serieDelete = document.getElementById('serieDeleteBtn')
const showSerie = document.getElementById('showSerie')
showSerie.addEventListener("click", (e)=>{
    e.preventDefault();
    serieForm.classList.remove("is-hidden")
})
serieDelete.addEventListener("click", (e)=>{
    e.preventDefault();
    serieForm.classList.add("is-hidden")
})
/*Género*/
const genreForm = document.getElementById('genreFormContainer')
const genreDelete = document.getElementById('genreDeleteBtn')
const showGenre = document.getElementById('showGenre')
showGenre.addEventListener("click", (e)=>{
    e.preventDefault();
    genreForm.classList.remove("is-hidden")
})
genreDelete.addEventListener("click", (e)=>{
    e.preventDefault();
    genreForm.classList.add("is-hidden")
})



