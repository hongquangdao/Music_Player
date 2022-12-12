
const wrapper = document.querySelector(".wrapper"),
musicImg = wrapper.querySelector(".img-area img");
musicName = wrapper.querySelector(".song-details .name");
musicArtist = wrapper.querySelector(".song-details .artist");
mainAudio = wrapper.querySelector("#main-audio");
playPauseBtn =  wrapper.querySelector(".play-pause");

let musicIndex = 1;

window.addEventListener("load", () => {
    loadMusic(musicIndex);
})

console.log(allMusic);

// load Music
function loadMusic(indexNumb) {
    musicName.innerText =  allMusic[indexNumb-1].name;
    musicImg.src = `images/${ allMusic[indexNumb-1].img}`
    musicArtist.innerText =  allMusic[indexNumb-1].artist;
    mainAudio.src =  `songs/${ allMusic[indexNumb-1].src}`
}

//play music function 
function playMusic() {
    wrapper.classList.add("paused");
    playPauseBtn.querySelector("i").innerText = "pause";
    mainAudio.play();
}

//pause music function 
function pauseMusic() {
    wrapper.classList.remove("paused");
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    mainAudio.pause();
}

//play or mussic button event
playPauseBtn.addEventListener("click",()=> {
    const isMusicPlay = wrapper.classList.contains("paused");
    isMusicPlay ? pauseMusic() : playMusic();
    console.log(isMusicPlay);
});

