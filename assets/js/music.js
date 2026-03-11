const songs = [
  "YOASOBI - ハルジオン・Halzion (Lone Alpha Remix) ♪ - StarlingEDM.mp3",
  "YOASOBI「たぶん」Official Music  Video - Ayase _ YOASOBI.mp3",
];

let currentSongIndex = 0;
let isPlaying = false;
const audio = new Audio();

audio.volume = 1.0;

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

let shuffledSongs = shuffleArray(songs);

function initMusicPlayer() {
  loadSong(currentSongIndex);
  audio.addEventListener("ended", nextSong);
}

function startMusicAfterTerminal() {
  isPlaying = true;
  audio.play().catch((error) => {
    console.error("Music playback error: - music.js:31", error);
    setTimeout(() => {
      audio.play().catch((e) => console.error("Retry error: - music.js:33", e));
    }, 1000);
  });
}

function loadSong(index) {
  audio.src = `./assets/music/${shuffledSongs[index]}`;

  if (isPlaying) {
    audio
      .play()
      .catch((error) => console.error("Play error: - music.js:44", error));
  }
}

function nextSong() {
  currentSongIndex = Math.floor(Math.random() * shuffledSongs.length);
  loadSong(currentSongIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  shuffledSongs = shuffleArray([...songs]);
  initMusicPlayer();
});

window.MusicPlayer = {
  start: startMusicAfterTerminal,
  getAudio: () => audio,
};
