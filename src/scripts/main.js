document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero');
    const alturaAtual = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaAtual) {
            ocultaElementos();
        } else {
            exibeElementos();
        }
    })

    function ocultaElementos () {
        const header = document.querySelector('header');
        header.classList.add('header--is--hidden');
    }

    function exibeElementos () {
        const header = document.querySelector('header');
        header.classList.remove('header--is--hidden');
    }

    //section atrações, progamação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            escondeAbas ();
            aba.classList.add('shows__list--is--active');
            removBotaoAtivo();
            botao.target.classList.add('shows__tabs__buttons--is--active');
        });
    }

    //Seção FAC, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
});

function abreOuFechaResposta (elemento){
    const classe = 'faq__questions__item--is--open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}


function escondeAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}

function removBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__buttons--is--active')
    }
}