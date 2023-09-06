//-------------botao Hamburguer---------
const btnExp = document.querySelector('.btn-exp')

//-------------expandir menu------------
const menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')   
})

//------------esconder logo----------
const logoSide = document.querySelectorAll('.logo, .btn-expandir')

btnExp.addEventListener('click', function(){
    logoSide.forEach(logo => {
        logo.classList.toggle('expandir-logo')
    }) 
})

//------------esconder texto---------
const itensSide = document.querySelectorAll(".texto, .texto-busca, .item-menu-busca")

    btnExp.addEventListener('click', function(){
        itensSide.forEach(itens => {
            itens.classList.toggle('expandir-texto');
        }) 
})

//---------esconder pessoa-------------
const pessoaSide = document.querySelectorAll(".pessoa, .sair")

btnExp.addEventListener('click', function(){
    pessoaSide.forEach(pessoa => {
        pessoa.classList.toggle('expandir-pessoa')
    }) 
})