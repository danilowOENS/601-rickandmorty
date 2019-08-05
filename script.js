let caixaDetexto = document.querySelector("input");
let iniciar = document.querySelector("#iniciar");
let tentar = document.querySelector("#tentar");
let h4= document.querySelector("h4");
let imagem = document.querySelector("img");
let p = document.querySelector("p");
let contador = 0;

gerarImagem = () =>{
    let aleatorio = Math.ceil(Math.random()*493);
    fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`)   
    .then(function(result){
        return result.json()
})
    .then(function(data){
        console.log(data.name);
        imagem.src = data.image;
        let nomeDoPersonagem = data.name.toUpperCase().toString();

        tentar.onclick =function(){
            let input = caixaDetexto.value.toUpperCase().toString();
            if(input == nomeDoPersonagem){
                h4.innerHTML = `certou`
                contador ++;
                p.innerHTML = `pontuacão: ${contador}`;
                caixaDetexto.value = "";
            }
            else{
                h4.innerHTML = `errrouuuuuu`
                contador --;
                p.innerHTML = `pontuação: ${contador}`;
                caixaDetexto.value = "";
            }
            gerarImagem();
        }    
    })
    
} 

iniciar.onclick = gerarImagem;