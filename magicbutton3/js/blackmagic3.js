// DANTE 2-29-2024

// ----Helpful Functions

function sleep(milliseconds) {
    let timeStart = new Date().getTime();
    while (true) {
      let elapsedTime = new Date().getTime() - timeStart;
      if (elapsedTime > milliseconds) {
        break;
      }
    }
  }

function randomnumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function playsound(asset,volume) {

  var snd = new Audio(asset);
  snd.volume = volume;
  snd.loop = false;

  snd.play();

}

function clicksound() {

 playsound("https://invertedfate.com/sounds/key_click.mp3",0.4);

}

// ----Music

var MUSIC = new Audio('https://chezzkidsarchive.neocities.org/smiling.mp3');
MUSIC.volume = 0.4;
MUSIC.loop = true;

function changemusic(song) {

 MUSIC.pause();

 MUSIC = new Audio(song);

 MUSIC.volume = 0.4;
 MUSIC.loop = true;

 MUSIC.play();

 console.info("Now Playing: " + song)

}

// White Magic

function enablechoicemode() {
 playsound("https://98.js.org/programs/jspaint/audio/chord.wav",0.4)
 choicemode = true;
}

var choicemode = false

// ----Black Magic

function blackmagic() {
 clicksound()

 var chance = randomnumber(1, 5)

 if (choicemode == true) {
  chance = prompt("Choose your outcome!")
 }

 console.log("Your Magic Number Is: " + chance)

// OUTCOMES

 if (chance == 1) {
  changemusic("asset/bblueberrybb02nevergiveup.mp3");

  document.writeln(`
<title> crossroads </title>

<style>
body {
   background-image: url("asset/null_plainsky512_rt.jpg");
   background-repeat: no-repeat;
   background-attachment: fixed;
   background-position: center; 
   background-size: 2000px 2000px;
}

</style>

<center>

<br>
<br>

<h1>     Remember... </h1>

<img src='asset/originalcrossroads_transparent.png' width='1470' height='800' alt='remember'>

</center>

`)

 } else if (chance == 2) {
 changemusic("asset/wiibrechannelbanner_loop.wav");

 document.writeln(`
 <title> what the future used to look like </title>

 <style>
body {
   background-image: url("https://64.media.tumblr.com/16c0b26bd5f18ef1ba158a660e04aa54/9f50bf20bde4f2d1-cc/s500x750/51c167d00bd4c28d83a55529bc28cca724115a83.gif");
   background-repeat: no-repeat;
   background-attachment: fixed;
   background-position: center; 
   background-size: 1500px 1500px;
}

h1 { font-family: Frutiger; }

.rainbow {
 background-image: url("https://i.stack.imgur.com/zcNQa.gif");
}

</style>

<center>

<br>

<div class="rainbow">
<marquee width="400" scrollamount="6">
<h1 style="font-weight: 700;"> What the future used to look like!! </h1>
</marquee>
</div>

<br>

<img src='asset/frutiger/frutiger-aero-picmix-gifs-v0-x4abzvryqc1c1.gif' height='800' alt='Frutiger'>

<img src='asset/frutiger/picmix.com_11322892.gif' height='800' alt='Frutiger'>

<img src='asset/frutiger/11332127_285bd.gif' height='800' alt='Frutiger'>

<img src='asset/frutiger/05232a2d25e22d6a26410680804c337d.gif' height='800' alt='Frutiger'>

</center>

`);

 } else if (chance == 3) {
 
 changemusic("asset/likethewindlostwavesong.mp3");

 document.writeln(`
 <title> a byproduct of something awful </title>
   
 <style>

 @keyframes animatedBackground {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100;
  }
}
body {
  width: 200px;
  height: 200px;
  background-image: url(https://a.deviantart.net/avatars-big/s/a/sandypants.gif);
  background-position: 0px 0px;
  background-repeat: repeat;
  animation: animatedBackground 50s linear infinite alternate;
}

 </style>

 <br>

 <center>

 <h1> He just came and went, like the wind... </h1>

 <br>

 <img src='https://media1.tenor.com/m/WhilBvzrdV0AAAAd/shmorky-david-kelly.gif' height='400' alt='FRANKENSTEIN'>

 <br>

 <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/923d6647-3e4c-481e-9b0c-ff00d94d10fe/d4t3gek-4e8fa3ca-248e-4102-88ac-a5683b458ca8.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkyM2Q2NjQ3LTNlNGMtNDgxZS05YjBjLWZmMDBkOTRkMTBmZVwvZDR0M2dlay00ZThmYTNjYS0yNDhlLTQxMDItODhhYy1hNTY4M2I0NThjYTguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IFWRII4rgozFOmHFQP-kWldKvpKRrkxRM4HZ3gNug2s' height='400' alt='FRANKENSTEIN'>

<img src='https://a.furaffinity.net/1424255659/peachesthepuppy.gif' height='100' alt='FRANKENSTEIN'>

<img src='https://media1.tenor.com/m/WYuotFrn7W8AAAAC/shmorky-dance.gif' height='400' alt='FRANKENSTEIN'>

<h1><em> LET THIS BE A CAUTIONARY TALE </em></h1>

</center>
 `);

console.info("https://www.youtube.com/watch?v=eVPUdQhk3rI&pp=ygUHc2htb3JreQ%3D%3D")

 } else if (chance == 4) {

  changemusic("asset/thepeniseek_generalmidisndfont_lowqual.mp3");

  document.writeln(`

  <title> MY GEOCITIES WEBSITE!!1!!1 </title>
   
 <style>

body {
  background-image: url(https://web.archive.org/web/20000818154900im_/http://www.vikimouse.com/y2kback.gif);
  background-repeat: repeat;
}

 </style>

 <br>

 <center>

 <h1> WELCOME 2 MY GEOCITIES WEBSITE!!1!!1 :D </h1>

 <br>

 <img src='https://web.archive.org/web/20090728020717/http://www.geocities.com/hopping_keroppi/helloa.gif' height='200' alt='error'>

 <img src='https://web.archive.org/web/20091027075241/http://www.geocities.com/rude_orange/tags/hello1.gif' height='200' alt='error'>

 <img src='https://web.archive.org/web/20090727133836/http://it.geocities.com/aniellobarra/Img/Clip/Animated/Hello_bird.gif' height='200' alt='error'>

<br>

<hr>

<br>

<h1> DIS IZ MY WEBSITE!!!1! I DON'T KNOW WHAT ELSE TO SAY HERE SO HERE'S SOME RANDOM STUFF :P </h1>

<img src='https://web.archive.org/web/20090829103258/http://www.geocities.com/warblingotter/hppycomp.gif' height='200' alt='error'>

<img src='https://web.archive.org/web/20091027013149/http://geocities.com/bobbyco80/otter.gif' height='200' alt='error'>

<img src='https://web.archive.org/web/20000302191658im_/http://www.vikimouse.com/columbinehighschool.gif' alt='error'>

<br>

<br>

<a href="https://web.archive.org/web/20000302191658/http://38.148.250.3/cgi-win/$client.exe?Burst,welcome,ad4254a,1005"><img src="https://web.archive.org/web/20000302191658im_/http://www.vikimouse.com/burst-a.gif" border="0"></a>

<br>

<br>

<br>

<br>

<br>

<br>

<img src="https://web.archive.org/web/20000302191658im_/http://www.vikimouse.com/theend.gif" alt="The End">

</center>

  `)

 } else if (chance == 5) {

 document.writeln(`

 `)

 }

}
