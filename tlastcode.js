

var musica = document.querySelector('audio');
// musica  1 // 
document.getElementById("sav").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("sav").innerHTML = "<div id='lateral-right'> <div id='logo2'> <img src='IMG/icons8-deezer-64.png'/> </div> <br/> <div> <img src='IMG/212190-a-lot.jpg' width='80px' height='80px'/> </div> <div class='descricao'> <div class='nomemusica'> A lot </div>   <br/> <div class='nomedoartista'> <i>21 - Savage</i> </div> <br/> </div> <div class='duracao'> <div class='barra'> <progress value='0' max='1'> </progress> <div class='ponto'> </div> </div> <div class='tempo'> <p class='inicio'> 0:00</p> <p class='fim'>3:40 </p> </div> </div> <div class='player'> <img src='IMG/icons8-next-page-32.png' class='setas'/> <img src='IMG/icons8-play-30.png' class='botao-play'/> <img src='IMG/icons8-back-67.png' class='setas'/> <img src= 'IMG/icons8-pause-50.png' class='botao-pause'/> </div> </div>';"
}


  // musica 2 //

  document.getElementById("cartola").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("cartola").innerHTML = "YOU CLICKED ME!";}

  // musica 3 //
  document.getElementById("corcovado").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("corcovado").innerHTML = "YOU CLICKED ME!";}
  // musica 4 //

  document.getElementById("elec").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("elec").innerHTML = "YOU CLICKED ME!";}

  // musica 5//
  document.getElementById("kevin").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("kevin").innerHTML = "YOU CLICKED ME!";}

  // musica 6 //
  document.getElementById("ice").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("ice").innerHTML = "YOU CLICKED ME!";}
  // musica 7 // 
  document.getElementById("tim").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("tim").innerHTML = "YOU CLICKED ME!";}

  // musica 8//
  document.getElementById("alec").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("alec").innerHTML = "YOU CLICKED ME!";}
  // musica 9 //
  document.getElementById("cent").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("cent").innerHTML = "YOU CLICKED ME!";}


document.querySelector('.botao-play').addEventListener('click' , tocarMusica);

musica.addEventListener('timeupdate', atualizarBarra);
var duracaoMusica = document.querySelector('.fim');
var imagem = document.querySelector('img');
var nomeMusica = document.querySelector('.descricao .nomemusica');
var nomeDoartista = documente.querySelector('.descricao .nomedoartista');
duracaoMusica.textContent = segundosParaMinutos.Math.floor(musica.duration);

function tocarMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

document.querySelector('.botao-pause').addEventListener('click' , pausarMusica );

function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra() {
    var barra = document.querySelector('progress');
    barra.style.widht = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    var tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = Math.floor(musica.currentTime);
}

function segundosParaMinutos(segundos) {
    var campoMinuto = Math.floor( segundos / 60);
    var campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos+':' +campoSegundos;

}