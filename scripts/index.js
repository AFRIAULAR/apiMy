/*FORMULARIOS*/
/*Register*/
const registerForm = document.getElementById('registerFormContainer')
const registerDelete = document.getElementById('registerDeleteBtn')
const showRegister = document.getElementById('showRegister')
showRegister.addEventListener("click", (e)=>{
    e.preventDefault();
    registerForm.classList.remove("is-hidden")
})
registerDelete.addEventListener("click", (e)=>{
    e.preventDefault();
    registerForm.classList.add("is-hidden")
})
/*Ingresar*/
const loginForm = document.getElementById('loginFormContainer')
const loginDelete = document.getElementById('loginDeleteBtn')
const showLogin = document.getElementById('showLogin')
showLogin.addEventListener("click", (e)=>{
    e.preventDefault();
    loginForm.classList.remove("is-hidden")
})
loginDelete.addEventListener("click", (e)=>{
    e.preventDefault();
    loginForm.classList.add("is-hidden")
})
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



