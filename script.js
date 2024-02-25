document.addEventListener("DOMContentLoaded", function () {
    const heartRain = document.querySelector('.heart-rain');
    const heartsNumber = 80;
    const snowflakesNumber = 80;
    const snowflakeDelay = 6000; // Tempo em milissegundos antes dos flocos de neve começarem a cair (5 segundos)

    // Função para criar um coração
    function createHeart() {
        const heart = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        heart.setAttribute('class', 'heart');
        heart.setAttribute('viewBox', '0 0 50 50');
        heart.innerHTML = `
            <path fill="#ff4b4b" d="M25 4.875c-7.454-11.525-24.77-7.916-24.77 7.874C.23 26.84 25 45.745 25 45.745S49.769 26.84 49.769 12.75C49.769-3.041 32.454-6.65 25 4.875z"/>
        `;
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animation = `heart-fall ${Math.random() * 5 + 1}s linear infinite`;
        heartRain.appendChild(heart);
    }

    // Função para criar um floco de neve
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animation = `snow-fall ${Math.random() * 5 + 1}s linear infinite`;
        heartRain.appendChild(snowflake);
    }

    // Adiciona os corações
    for (let i = 0; i < heartsNumber; i++) {
        createHeart();
    }

    // Adiciona os flocos de neve após um intervalo de tempo
    setTimeout(function() {
        document.body.style.backgroundColor = "#808080"; // Altera o fundo para cinza
        for (let i = 0; i < snowflakesNumber; i++) {
            createSnowflake();
        }
    }, snowflakeDelay);
});
