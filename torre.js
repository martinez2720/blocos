class Tower{

constructor(x, y, w , h){

//faz a torre ficar paradinha
var options = {
    isStatic:true
}

//carrega a imagem
this.imagem =  loadImage("assets/tower.png");

//declara as variáveis dentro da classe usando this

this.w = w;
this.h = h;

//cria o corpitcho
this.body = Bodies.rectangle(this.x, this.y, this.w, this.h);

//coloca no mundo do nosso jogo
World.add(world, this.body)
}

display(){

//pode abreviar 
var pos = this.body.position
//adiciona a imagem na tela, obs.: os parâmetros podem ser 0,0,this.w,this.h
push ()
imageMode(CENTER);
image (this.imagem, 0,0,this.w,this.h  )
pop ()
}

}