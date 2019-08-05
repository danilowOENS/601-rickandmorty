let caixaDetexto = document.querySelector("input");
let iniciar = document.querySelector("#iniciar");
let tentar = document.querySelector("#tentar");
let div = document.querySelector("div");
let imagem = document.querySelector("img");

gerarImagem = () =>{
    let aleatorio = Math.ceil(Math.random()*493);
    fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`)   
    .then(function(result){
        return result.json()
})
    .then(function(data){
        console.log(data.name);
        imagem.src = data.image;
    })
} 

iniciar.onclick = gerarImagem;
