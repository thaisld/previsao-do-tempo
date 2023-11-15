const key = "1964d0a81a48a309a63c0d58a89bfa02"

function colocarDadosNaTela(dados) {
    console.log(dados);
    document.querySelector(".mensagem-erro").innerHTML = "";

    if (dados.cod === "404") {
        document.querySelector(".mensagem-erro").innerHTML = "Não foi possível encontrar a cidade. Certifique-se de que o nome está correto e tente novamente.";
        document.querySelector(".cidade").innerHTML = "";
        document.querySelector(".temp").innerHTML = "";
        document.querySelector(".texto-previsao").innerHTML = "";
        document.querySelector(".umidade").innerHTML = "";
        document.querySelector(".img-previsao").src = "";

    } else {
        document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
        document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
        document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
        document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
        document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
    }
}

async function buscarCidade(cidade) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`;
    const dados = await fetch(url).then(resposta => resposta.json());
    colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}
