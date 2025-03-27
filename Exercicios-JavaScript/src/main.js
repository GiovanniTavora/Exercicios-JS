import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.addEventListener("DOMContentLoaded", () => {
  const paragrafo = document.getElementById("meuParagrafo");
  const botaoTexto = document.getElementById("botaoTexto");

  const numeros = [1, 2, 3, 4, 5];
  const botaoMultiplica = document.getElementById("botaoMultiplica");
  const numerosOriginais = document.getElementById("numerosOriginais");
  const numerosMultiplicados = document.getElementById("numerosMultiplicados");

  const numerosFiltro = [5, 8, 12, 19, 3, 25, 7, 15];
  const numerosOriginaisFilter = document.getElementById("numerosOriginaisFilter");
  const numerosFiltrados = document.getElementById("numerosFiltrados");
  const botaoFiltrar = document.getElementById("botaoFiltrar");

  const numerosSomados = document.querySelector("#numerosSomados");
  const botaoSoma = document.querySelector("#botaoSoma");

  numerosOriginais.innerText = `Array original: ${numeros.join(", ")}`;

  const produtos = [
    {nome: "Camiseta", preco: 30},
    {nome: "Calças", preco: 60},
    {nome: "Tênis", preco: 150},
    {nome: "Computador", preco: 2000}
  ];

  const listaProdutos = document.getElementById("listaProdutos");
  const produtoEncontrado = document.getElementById("produtoEncontrado");
  const botaoBuscarProduto = document.getElementById("botaoBuscarProduto");

  const frutas = ["Maçã", "Banana", "Morango", "Uva", "Laranja"];
  const listaFrutas = document.getElementById("listaFrutas");
  const botaoPercorrer = document.getElementById("botaoPercorrer");





  botaoTexto.addEventListener("click", () => {
    paragrafo.innerText = "Agora o texto foi alterado!"
  });

  if (numerosOriginais && numerosMultiplicados && botaoMultiplica) {
    numerosOriginais.innerText = `Array original: ${numeros.join(", ")}`;
    
    botaoMultiplica.addEventListener("click", () => {
        const resultado = numeros.map(num => num * 2);
        numerosMultiplicados.innerText = `Array multiplicado: ${resultado.join(", ")}`;
    });
  }

  if(botaoSoma && numerosSomados){
    botaoSoma.addEventListener("click", () => {
      const soma = numeros.reduce((total, num) => total + num, 0);
      numerosSomados.innerText = `Soma dos números: ${soma}`
    });
  }

  if (numerosOriginaisFilter && numerosFiltrados && botaoFiltrar) {
    numerosOriginaisFilter.innerText = `Array original: ${numerosFiltro.join(", ")}`;

    botaoFiltrar.addEventListener("click", () => {
      const resultado = numerosFiltro.filter(num => num > 10);
      numerosFiltrados.innerText = `Números maiores que 10: ${resultado.join(", ")}`;
    });
  }

  if (listaProdutos && produtoEncontrado && botaoBuscarProduto) {
    listaProdutos.innerText = produtos.map(p => `${p.nome}: R$${p.preco}`).join(" | ");
  
    botaoBuscarProduto.addEventListener("click", () => {
      const produto = produtos.find(p => p.preco > 50);
  
      if (produto) {
        produtoEncontrado.innerText = `Primeiro produto encontrado: ${produto.nome} - R$${produto.preco}`;
      } else {
        produtoEncontrado.innerText = "Nenhum produto acima de R$50 encontrado.";
      }
    });
  }

  if (listaFrutas && botaoPercorrer) {
    listaFrutas.innerText = frutas.join(" | ");

    botaoPercorrer.addEventListener("click", () => {
      console.log("Percorrendo array de frutas:");
      frutas.forEach((fruta, index) => {
        console.log(`${index + 1}. ${fruta}`);
      });
    });
  }

});


