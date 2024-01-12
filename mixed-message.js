/*
Mixed Message Project.

This project is a random message generator with
Star Wars quotes.
*/

// Array with Most iconic quotes from Star Wars World
const quotes = [
  "Try not. Do or do not. There is no try",
  "Who’s the more foolish: the fool or the fool who follows him?",
  "Your focus determines your reality",
  "In a dark place we find ourselves and a little more knowledge lights our way",
  "Many of the truths that we cling to depend on our viewpoint",
  "Sometimes we must let go of our pride and do what is requested of us",
];

// Array that hold the authors of the quotes
const authors = ["Yoda", "Obi-Wan Kenobi", "Qui-Gon Jinn", "Anakin Skywalker"];

// Array with the Episode when the quote has been said
const movieEpisode = [
  "Episode V: The Empire Strikes Back",
  "Episode IV: A New Hope",
  "Episode I: The Phantom Menace",
  "Episode III: Revenge Of The Sith",
  "Episode VI: Return Of The Jedi",
  "Episode II: Attack Of The Clones",
];

// Adding functionality

// get a random index for the quote
const quoteIndex = Math.floor(Math.random() * quotes.length);

// get a random index for authors
const authorIndex = Math.floor(Math.random() * authors.length);

// get a random index for movieEpisode
const movieIndex = Math.floor(Math.random() * movieEpisode.length);

// log to the console all together
console.log(
  `${quotes[quoteIndex]} - ${authors[authorIndex]} at Star Wars ${movieEpisode[movieIndex]}`
);
