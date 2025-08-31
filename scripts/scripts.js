document
  .getElementById("btnCarregar")
  .addEventListener("click", carregarProdutos);
document.getElementById("btnFechar").addEventListener("click", fecharProdutos);

async function carregarProdutos() {
  try {
    const resposta = await fetch("https://fakestoreapi.com/products");
    const produtos = await resposta.json();

    const container = document.getElementById("produtos");
    container.innerHTML = "";

    produtos.forEach((produto) => {
      const card = document.createElement("div");
      card.classList.add("produto");

      card.innerHTML = `
        <img src="${produto.image}" alt="${produto.title}">
        <h2>${produto.title}</h2>
        <p>${produto.description.substring(0, 80)}...</p>
        <strong>R$ ${produto.price.toFixed(2)}</strong>
      `;

      container.appendChild(card);
    });
  } catch (erro) {
    console.error("Erro ao carregar produtos:", erro);
    document.getElementById("produtos").innerHTML =
      "<p>Erro ao carregar produtos.</p>";
  }
}

async function fecharProdutos() {
  const container = document.getElementById("produtos");
  container.innerHTML = "";
  const card = document.createElement("div");
  card.innerHTML = `
        <h2>CONTAINER FECHADO</h2>
        <p>Voce fechou os produtos...</p>
      `;

  container.appendChild(card);
}

// 🎯 Aqui nós pegamos o botão com id="btnCarregar"
// e adicionamos um "ouvidor de eventos" (event listener).
// Ou seja: quando o usuário CLICAR no botão, a função carregarProdutos() será chamada.
document
  .getElementById("btnCarregar")
  .addEventListener("click", carregarProdutos);

// 💡 Caso você queira que os produtos apareçam automaticamente
// assim que a página carregar, basta tirar o comentário da linha abaixo.
// carregarProdutos();

// 🚀 Função assíncrona para buscar os produtos na API
// "async" permite que a gente use "await" dentro dela (esperar respostas de promessas).
async function carregarProdutos() {
  try {
    // 🌐 Fazendo uma requisição HTTP do tipo GET para a API Fake Store
    // O "await" pausa o código até a API responder.
    const resposta = await fetch("https://fakestoreapi.com/products");

    // 📦 Convertendo a resposta da API para JSON (formato fácil de manipular em JS)
    const produtos = await resposta.json();

    // 🏗️ Pegamos a <section> com id="produtos" (lá no HTML)
    const container = document.getElementById("produtos");

    // 🔄 Antes de mostrar os produtos, limpamos o conteúdo dela (caso já tenha algo renderizado).
    container.innerHTML = "";

    // 📌 Agora percorremos a lista de produtos (que é um array)
    // e criamos um "card" para cada item usando forEach
    produtos.forEach((produto) => {
      // Criamos uma <div> para representar o produto
      const card = document.createElement("div");
      card.classList.add("produto"); // adiciona uma classe para estilização no CSS

      // 🖼️ Preenchemos o card com informações vindas da API:
      // - Imagem
      // - Nome (title)
      // - Descrição resumida (substring limita os primeiros 80 caracteres)
      // - Preço formatado (toFixed(2) garante 2 casas decimais)
      card.innerHTML = `
        <img src="${produto.image}" alt="${produto.title}">
        <h2>${produto.title}</h2>
        <p>${produto.description.substring(0, 80)}...</p>
        <strong>R$ ${produto.price.toFixed(2)}</strong>
      `;

      // ➕ Finalmente, colocamos esse card dentro do container
      container.appendChild(card);
    });
  } catch (erro) {
    // ⚠️ Caso algo dê errado (por exemplo, API fora do ar ou sem internet),
    // mostramos um aviso no console e também na tela do usuário.
    console.error("Erro ao carregar produtos:", erro);
    document.getElementById("produtos").innerHTML =
      "<p>Erro ao carregar produtos.</p>";
  }
}
