// console.log("Welcome to Spotify");

// // Initialize the Variables
// let songIndex = 0;
// let audioElement = new Audio('songs1/1.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');
// let songItems = Array.from(document.getElementsByClassName('songItem'));

// let songs = [
//     {songName: "Meri Banogi Kya", filePath: "songs1/1.mp3", coverPath: "covers/1.jpg"},
//     {songName: "Cardigan", filePath: "songs1/2.mp3", coverPath: "covers/2.jpg"},
//     {songName: "All the stars", filePath: "songs1/3.mp3", coverPath: "covers/3.jpg"},
//     {songName: "Another Love", filePath: "songs1/4.mp3", coverPath: "covers/4.jpg"},
//     {songName: "Kaise Hua", filePath: "songs1/5.mp3", coverPath: "covers/5.jpg"},
//     {songName: "Enchanted", filePath: "songs1/6.mp3", coverPath: "covers/6.jpg"},
//     {songName: "Husn", filePath: "songs1/7.mp3", coverPath: "covers/7.jpg"},
//     {songName: "Pehla Pyaar", filePath: "songs1/8.mp3", coverPath: "covers/8.jpg"},
//     {songName: "Ajab Si", filePath: "songs1/9.mp3", coverPath: "covers/9.jpg"},
//     {songName: "Aankhein Khuli", filePath: "songs1/10.mp3", coverPath: "covers/10.jpg"},
//     {songName: "Car's outside", filePath: "songs1/11.mp3", coverPath: "covers/8.jpg"},
//     {songName: "Classic", filePath: "songs1/12.mp3", coverPath: "covers/9.jpg"},
//     {songName: "Ilahi", filePath: "songs1/13.mp3", coverPath: "covers/10.jpg"},
// ]

// songItems.forEach((element, i)=>{ 
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
// })
 

// // Function to play the next song
// const playNextSong = () => {
//     // Increment the songIndex or reset to 0 if it reaches the end
//     songIndex = (songIndex + 1) % songs.length;

//     // Update audio source and song name
//     audioElement.src = songs[songIndex].filePath;
//     masterSongName.innerText = songs[songIndex].songName;

//     // Play the audio
//     audioElement.play();

//     // Update play/pause button icon
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// };


// // Handle play/pause click
// masterPlay.addEventListener('click', ()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// });

// // Listen for the 'ended' event on the audio element
// audioElement.addEventListener('ended', () => {
//     // Call the function to play the next song
//     playNextSong();
// });
// // Listen to Events
// audioElement.addEventListener('timeupdate', ()=>{ 
//     // Update Seekbar
//     progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
//     myProgressBar.value = progress;
// })

// myProgressBar.addEventListener('change', ()=>{
//     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
// })

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = `songs1/${songIndex+1}.mp3`;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');

//         document.addEventListener('DOMContentLoaded', function() {
//             const songItems = document.querySelectorAll('.songItem');
        
//             songItems.forEach(function(item) {
//                 item.addEventListener('click', function() {
//                     const songId = parseInt(item.querySelector('.far').id);
//                     const container = document.querySelector('.container');
//                     container.style.backgroundImage = `url(musicbg/song${songId + 1}.jpg)`;
//                 });
//             });
//         });
//     });
// });



// document.getElementById('next').addEventListener('click', ()=>{
//     if(songIndex>=9){
//         songIndex = 0
//     }
//     else{
//         songIndex += 1;
//     }
//     audioElement.src = `songs1/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');

// })

// document.getElementById('previous').addEventListener('click', ()=>{
//     if(songIndex<=0){
//         songIndex = 0
//     }
//     else{
//         songIndex -= 1;
//     }
//     audioElement.src = `songs1/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// })

console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs1/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let timeInfo = document.getElementById('timeInfo'); // Added timeInfo reference
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Song", filePath: "songs1/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Song", filePath: "songs1/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Song", filePath: "songs1/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Song", filePath: "songs1/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Song", filePath: "songs1/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Song", filePath: "songs1/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Song", filePath: "songs1/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Song", filePath: "songs1/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Song", filePath: "songs1/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Song", filePath: "songs1/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Song", filePath: "songs1/11.mp3", coverPath: "covers/8.jpg"},
    {songName: "Song", filePath: "songs1/12.mp3", coverPath: "covers/9.jpg"},
    {songName: "Song", filePath: "songs1/13.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Update the displayed time as the music plays
audioElement.addEventListener('timeupdate', () => {
    // Update the time display
    const currentTime = formatTime(audioElement.currentTime);
    timeInfo.innerText = currentTime;
});

// Function to format time in MM:SS format
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    return formattedTime;
}

// Function to play the next song
const playNextSong = () => {
    // Increment the songIndex or reset to 0 if it reaches the end
    songIndex = (songIndex + 1) % songs.length;

    // Update audio source and song name
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;

    // Play the audio
    audioElement.play();

    // Update play/pause button icon
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
};


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listen for the 'ended' event on the audio element
audioElement.addEventListener('ended', () => {
    // Call the function to play the next song
    playNextSong();
});
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs1/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

        document.addEventListener('DOMContentLoaded', function() {
            const songItems = document.querySelectorAll('.songItem');
        
            songItems.forEach(function(item) {
                item.addEventListener('click', function() {
                    const songId = parseInt(item.querySelector('.far').id);
                    const container = document.querySelector('.container');
                    container.style.backgroundImage = `url(musicbg/song${songId + 1}.jpg)`;
                });
            });
        });
    });
});



document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs1/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs1/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
