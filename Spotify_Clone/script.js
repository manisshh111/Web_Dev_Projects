console.log("Welcome to spotify");

let songIndex=0;
let audioElement= new Audio('1.mp3') 
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songItems= Array.from(document.getElementsByClassName('songItem'));








let songs=[
{songName: "Let me love you", filePath:'songs/1.mp3', coverPath: "covers/1.jpg"},
{songName: "Keshariya - Arijit Singh - 2022", filePath:"songs/2.mp3", coverPath: "covers/2.jpg"},
{songName: "Chahunga main Tujhe - Muhammad Rafi - 1980", filePath:"songs/3.mp3", coverPath: "covers/3.jpg"},
{songName: "Bairi Piya - Udit Narayan - 2001 ", filePath:"songs/4.mp3", coverPath: "covers/4.jpg"},
{songName: "Tumhare Siva - Pawan Singh - 2022", filePath:"songs/5.mp3", coverPath: "covers/5.jpg"},
{songName: "Shukran Allah - Sonu Nigam - 2005", filePath:"songs/6.mp3", coverPath: "covers/6.jpg"},
{songName: "Ae Dil hai Muskil - Pritam - 2018", filePath:"songs/7.mp3", coverPath: "covers/7.jpg"}
];

songItems.forEach((element, i)=>{

// console.log(element, i)
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText= songs[i].songName;

    let filepath1= songs[i].filePath;
    // console.log(filepath1);
    let audioElement1= new Audio(filepath1);
    let duration2= audioElement1.duration;
    // console.log(duration2);

    element.getElementsByClassName('duration1')[0].innerHTML= duration2;
   // element.getElementsByClassName('duration1')[0].innerHTML= songs[i].songName;

});


// Handle play pause click

masterPlay.addEventListener('click', ()=>{

    if(audioElement.paused || audioElement.currentTime<=0){

        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }


});
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate')

    let progress= parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress);
    myProgressBar.value = progress;


})

myProgressBar.addEventListener('change', ()=>{

    audioElement.currentTime = ((myProgressBar.value)*(parseInt(audioElement.duration)))/100;
})

// audioElement.play();
// audioElement.pause();

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('icon1')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
       
        console.log(element);
    });

    
}

Array.from(document.getElementsByClassName('icon1')).forEach((element)=>{
    
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause')
       
    })
 
})