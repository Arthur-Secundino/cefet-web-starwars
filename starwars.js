// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.info/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

import { play } from "./music.js";
import { decimalParaRomano } from "./roman.js";

const API_ENDPOINT = 'https://swapi.info/api';

const objetoMusica = {
    audioUrl: "./audio/tema-sw.mp3",
    coverImageUrl: "./imgs/logo.svg",
    title: "Intro",
    artist: "John Williams"
};

const listaFilmesEl = document.querySelector("#filmes ul");

play(objetoMusica, document.body);

const resposta = await fetch(API_ENDPOINT + "/films");
const jsonFilmes = await resposta.json();
console.log(jsonFilmes);

listaFilmesEl.innerHTML = "";
jsonFilmes.forEach(filme => {
    listaFilmesEl.innerHTML += `<li>Episode ${decimalParaRomano(filme.episode_id).padEnd(3, " ")} - ${filme.title}</li>`;
});