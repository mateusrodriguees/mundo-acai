//array carrinho vazio, para adicionar os produtos
let carrinho = [];

// Adiciona um item ao carrinho
function adicionarItem(produto, preco) {
  //a funcao push adiciona itens no array na ultima posicao
  carrinho.push({ produto, preco });
  atualizarResumo();
}

// Remove um item do carrinho
function removerItem(index) {
  //modifica um array, removendo ou adicionando elementos. 
  //O primeiro parametro especifica o indice da modificação e o segundo o numeros de elementos que serao removidos.
  carrinho.splice(index, 1);
  atualizarResumo();
}


// Atualiza o resumo do pedido
function atualizarResumo() {
  let total = 0;
  let resumoHtml = "";

  //pegando cada item no indice atual e exibindo dentro de uma tag <li> no carrinho
  carrinho.forEach((item, index) => {
    resumoHtml += `<li>${item.produto} - R$ ${item.preco.toFixed(2)} <button class="remover" onclick="removerItem(${index})">Remover</button></li>`;
    //somando o preco de cada item e atribuindo a variavel total  
    total += item.preco;
  });

  //exibindo o valor total atualizado dentro de uma tag <li>
  resumoHtml += `<li>Total - R$ ${total.toFixed(2)}</li>`;

  //alterando o HTML da minha <div> resumo
  document.getElementById("resumo").innerHTML = resumoHtml;
}

// Finaliza a compra e exibe o resumo em um modal
function finalizarCompra() {

  //se o carrinho estiver vazio, ele retorna uma mensagem de erro dentro do modal
  if (carrinho.length === 0) {
    document.getElementById("resumo-modal").innerHTML = "Nenhum item adicionado, tente novamente!";
  } else {
    let total = 0;
    let resumoHtml = "";

    //pegando cada item e exibindo no modal
    carrinho.forEach((item) => {
      resumoHtml += `<li class="modal-item">${item.produto} - R$ ${item.preco.toFixed(2)}</li>`;
      //somando o preco de cada item e atribuindo a variavel total
      total += item.preco;
    });
    //exibindo o valor total dentro do modal
    resumoHtml += `<li class="total-modal">Total - R$ ${total.toFixed(2)}</li>`;
    //atribuindo o valor do modal sendo igual o da variavel resumoHtml
    document.getElementById("resumo-modal").innerHTML = resumoHtml;
  }

  //setando o display da minha <div> modal como "block"
  let modal = document.getElementById("modal");
  modal.style.display = "block";


  // Adiciona evento para fechar o modal ao clicar no botão de fechar, retornando o valor do display para none
  let closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function () {
    modal.style.display = "none";
  }
}
