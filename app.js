function criaCartao(categoria,pergunta,resposta0{
  let container= documento.getElementByld(´container´)
  let cartao= document.creatElement('article´)
  cartao.className='cartao'
  cartao.innerHTML=
  <div class="cartao__conteudo">
  <h3>${categoria}</h3>
  <div class="cartao__conteudo__pergunta">
    </p>${pergunta}</p>
  </div>
  <div class="cartao__conteudo__resposta">
    </div>
    </div>
  let respostaEstaVisivel= false
  function viraCartao(){
    respostaEstaVisivel=!respostaEstaVisivel
    cartao.classList.toggle(`active',respostaEstaVisivel)
 }
 cartao.addEventListener(`click', viraCartao)

 container.appendChild(cartao)

 }
