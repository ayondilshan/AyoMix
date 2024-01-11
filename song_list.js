//song list
let All_song = [
   {
     name: "Manopara ",
     path: "music/1.mp3",
     img: "images/1.jpg",
     singer: "Dilo"
   },
   {
     name: " Faded",
     path: "music/2.mp3",
     img: "images/2.jpg",
     singer: "Alan Walker"
   },
   {
     name: " Hope",
     path: "music/3.mp3",
     img: "images/3.jpg",
     singer: "xxxtentacion"
   },
   {
     name: "Calm Down",
     path: "music/4.mp3",
     img: "images/4.jpg",
     singer: "Rema, Selena Gomez "
   },
   {
     name: "People (Official Music)",
     path: "music/5.mp3",
     img: "images/5.jpg",
     singer: "Libianca"
   },
   {
    name: " lovely (Official Music)",
    path: "music/6.mp3",
    img: "images/6.jpg",
    singer: "Billie Eilish, Khalid"
   },
   {
    name: " 24kGoldn - Mood (Official Music)",
    path: "music/7.mp3",
    img: "images/7.jpg",
    singer: "ft. iann dior"
   },
   {
    name: " See You Again Furious 7  (Official Music)",
    path: "music/8.mp3",
    img: "images/8.jpg",
    singer: "Wiz Khalifa ,ft. Charlie Puth"
   },
   {
    name: " Manabandu Karanawak (Official Music)",
    path: "music/9.mp3",
    img: "images/9.jpg",
    singer: "Yuki Navaratne "
   },
   {
    name: "Viramayak(Official Music)",
    path: "music/10.mp3",
    img: "images/10.jpg",
    singer: "Bhashi Devanga"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/