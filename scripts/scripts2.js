document.getElementById("btnCarregarAleatorio").addEventListener("click", () => {
  carregarProdutosAleatorios(4); 
});

async function carregarProdutosAleatorios(qtd = 4) {
  try {
    const resposta = await fetch("https://fakestoreapi.com/products");
    const produtos = await resposta.json();

    for (let i = produtos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [produtos[i], produtos[j]] = [produtos[j], produtos[i]];
    }

    const selecionados = produtos.slice(0, qtd);

    const container = document.getElementById("produtos");
    container.innerHTML = "";

    selecionados.forEach(produto => {
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