document.addEventListener("DOMContentLoaded", function () {
    const heartRain = document.querySelector('.heart-rain');
    const heartsNumber = 50; // Número de corações

    for (let i = 0; i < heartsNumber; i++) {
        const heart = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        heart.setAttribute('class', 'heart');
        heart.setAttribute('width', '50');
        heart.setAttribute('height', '50');
        heart.innerHTML = `
            <path fill="#ff4b4b" d="M25 4.875c-7.454-11.525-24.77-7.916-24.77 7.874C.23 26.84 25 45.745 25 45.745S49.769 26.84 49.769 12.75C49.769-3.041 32.454-6.65 25 4.875z"/>
        `;
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animation = `heart-fall ${Math.random() * 5 + 3}s linear infinite`;
        heartRain.appendChild(heart);
    }
});
