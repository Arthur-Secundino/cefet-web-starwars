// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.info/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

import { play } from "./music.js";
import { decimalParaRomano } from "./roman.js";
import { restartAnimation } from "./restart-animation.js";
import { comparaFilmes } from "./sort.js";

const API_ENDPOINT = 'https://swapi.info/api';

const objetoMusica = {
    audioUrl: "./audio/tema-sw.mp3",
    coverImageUrl: "./imgs/logo.svg",
    title: "Intro",
    artist: "John Williams"
};

const listaFilmesEl = document.querySelector("#filmes ul");
const preEl = document.querySelector("pre");
let filmeEl;

play(objetoMusica, document.body);

const resposta = await fetch(API_ENDPOINT + "/films");
let jsonFilmes = await resposta.json();

jsonFilmes = jsonFilmes.sort(comparaFilmes);

listaFilmesEl.innerHTML = "";
jsonFilmes.forEach(filme => {
    filmeEl = document.createElement("li");
    filmeEl.innerHTML = `Episode ${decimalParaRomano(filme.episode_id).padEnd(3, " ")} - ${filme.title}`;

    filmeEl.addEventListener("click", function (){
        preEl.innerHTML = `Episode ${decimalParaRomano(filme.episode_id).padEnd(3, " ")}
        ${filme.title}
        
        ${filme.opening_crawl}`;

        restartAnimation(preEl);
    });

    listaFilmesEl.appendChild(filmeEl);
});