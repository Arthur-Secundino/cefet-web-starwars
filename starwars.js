// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.info/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

import { play } from "./music.js";

const API_ENDPOINT = 'https://swapi.info/api'

const resposta = await fetch(API_ENDPOINT + "/films");
const jsonFilmes = await resposta.json();
console.log(jsonFilmes);

const objetoMusica = {
    audioUrl: "./audio/tema-sw.mp3",
    coverImageUrl: "./imgs/logo.svg",
    title: "Intro",
    artist: "John Williams"
};

play(objetoMusica, document.body);