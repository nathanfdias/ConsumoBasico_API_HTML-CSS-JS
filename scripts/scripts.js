document.getElementById("btnCarregar").addEventListener("click", carregarProdutos);
// carregarProdutos();

async function carregarProdutos() {
  try {
    const resposta = await fetch("https://fakestoreapi.com/products");
    const produtos = await resposta.json();

    const container = document.getElementById("produtos");
    container.innerHTML = ""; // limpa antes de renderizar

    produtos.forEach(produto => {
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
    document.getElementById("produtos").innerHTML = "<p>Erro ao carregar produtos.</p>";
  }
}