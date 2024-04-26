// imagens do jogo

//let somColisao;
//let somPontos;
//let somTrilha;

function preload(){
  imagemDaEstrada = loadImage("estrada.png");
  imagemDoAtor = loadImage("ator-1.png");
  imagemCarro = loadImage("carro-1.png");
  imagemCarro2 = loadImage("carro-2.png");
  imagemCarro3 = loadImage("carro-3.png");  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  
  somColisao = loadSound("colidiu.mp3")
  somPonto = loadSound("pontos.wav")
  somTrilha = loadSound("trilha.mp3")
}
