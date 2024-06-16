//configurando objeto do axios para padrozinar a requizição
//1-importar o axios, criar uma const que receberá axios.create e no seu escopo terá o endereço base da API, que terá como ,meio de partida o endereço da API, daí exportamos a const criada e importamos para a home e com isso substituiremos a importação do axios pela nova const que tem o endereço da API, e substituir o axios. get pela const, e como parâmetro deste método usamos só o end point já que na nossa const tem a url da api

//nossa base url como pode ser visto, continua com o mesmo funcionamento, mas podemos ter mais outra utilidade no cabeçalho da requisição, vamos ter o conteúdo de apllication/json, com isso nas requisições vai ter o envio deste cabeçalho tb. Bom mais pra que serve isto? isto facilita para enviar qualquer coisa da api(tokesn etc)
import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type":"application/json"
    }
})


export default blogFetch

//feito tudo, agora vamos colocar funcionalidade no newpost