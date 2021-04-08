const apiKey = `6A6267q2HCmm86hXpupwWsB5hZMNCrbP8Ym2RVUX`

let imagem = document.querySelector("#imgAtual");

let dataDaImagem = document.querySelector("#ImagemData");

let copyright = document.querySelector("#NomeTexto")

let descricao = document.querySelector("#Explanation");


let request = new XMLHttpRequest()

request.open('GET', `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`, false);
request.addEventListener("load" , function (){
    if(this.status == 200 & this.readyState === 4 ) {
        
        let dados = JSON.parse(request.responseText)
        
        let imagemAtual = dados.url
        imagem.src = imagemAtual;   

        console.log(dados)
        descricao.textContent = dados.explanation;

        dataDaImagem.textContent = dados.date;

        copyright.textContent = dados.copyright;

    }
})
request.send();


let especificaRequest = new XMLHttpRequest();

const botao = document.querySelector("#button");
botao.addEventListener("click" , function (){
    let date = document.querySelector("#data").value;

    especificaRequest.onreadystatechange = function () {
        if (this.status == 200 & this.readyState === 4 ) {
            let dados = JSON.parse(especificaRequest.responseText);
            
            let imagemEspecifica = dados.url
            imagem.src = imagemEspecifica;
           
            descricao.textContent = dados.explanation;

            dataDaImagem.textContent = dados.date;

            copyright.textContent = dados.copyright;

        }
    }
    especificaRequest.open('GET' , `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`, false)
    especificaRequest.send()
})

        

