import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";

import App from "./components/App"

const rootElement = document.getElementById("root")
const root = ReactDom.createRoot(rootElement)

root.render(

  <StrictMode>
    <App />
  </StrictMode>
 ,

)

// Atividade
/* Passo a Passo 

1- Crie o component CreateArea e depois importe ele para o app 
Crie um form com input, textarea e button
Para capturar o titulo e descrição crie o state (de objeto) deles
Criar uma constante que acompanho o titulo e o conteúdo
Para capturar o resultado do que foi escrito no input e textArea deve criar um value e uma função que identifique a mudança 
Crie um destruturing com name e value
Crie uma função que passe a nota anterior, retornando-a e depois passa um novo valor


2- No button crie uma função que quando clicar Passe o componente App o props
Depois crie uma função para passar dentro do props, Essa função deve receber um parametro
Vá no CreateArea e receba o props na função que quando clica no botão


3- Adicionar uma nova nota ao array
crie state com array para armazenar as notas novas 

use a função para pegar o objeto anterior e retorne o array completo

Apaga o map antigo e utilize o map com o array atual

4- Agora adicione a exclusão de notas

Va no componente responsavel pelas notas e adicione um botão com a função que apague quando clica
Depois use o props para colocá lo no component principal

Depois de adicionar ao componente principal, crie uma função no component App que identifique as notas que você clicou

5 - vai fazer o mesma lógica de programação do ToDoList com filter e id
Depois tire o comportamento padrão do form que deixa o que está escrito gravado
*/

// 1. Implemente a funcionalidade de adicionar nota
// Criar uma constante que acompanho o titulo e o conteúdo
// Passa a nova nota de volta para o App
// Adiciona uma nova nota ao Array
// Pega o array e renderiza os componentes Note separados para cada item

// 2. implemente a funcionalidade de exclusão de nota