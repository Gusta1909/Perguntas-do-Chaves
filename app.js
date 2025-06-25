const cartoes = document.querySelectorAll(".cartao");

cartoes.forEach(cartao => {
  cartao.addEventListener("click", () => {
    const resposta = cartao.querySelector(".cartao__conteudo__resposta");
    resposta.classList.toggle("visivel");
  });
});
