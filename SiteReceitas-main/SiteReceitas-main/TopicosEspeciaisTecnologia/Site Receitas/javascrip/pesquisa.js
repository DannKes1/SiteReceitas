const recipes = {
  "bolo de chocolate":
    "http://127.0.0.1:5500/SiteReceitas-main/TopicosEspeciaisTecnologia/Site%20Receitas/receitasHome.html/receita02.html",
  "torta de limão":
    "http://127.0.0.1:5500/SiteReceitas-main/TopicosEspeciaisTecnologia/Site%20Receitas/receitasHome.html/receita01.html",
  "receitas de doces":
    "http://127.0.0.1:5500/SiteReceitas-main/TopicosEspeciaisTecnologia/Site%20Receitas/html/doces.html",
};

function searchRecipes() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();

  if (searchTerm) {
    const url = recipes[searchTerm];
    if (url) {
      window.location.href = url;
    } else {
      alert("Receita não encontrada.");
    }
  } else {
    alert("Por favor, insira um termo de pesquisa.");
  }
}

// Adiciona o eventListener ao botão de pesquisa
document
  .getElementById("searchButton")
  .addEventListener("click", searchRecipes);
