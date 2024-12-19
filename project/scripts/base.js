document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');
    const socialContent = `
        <a href="https://www.instagram.com/foncor_mantenimiento?igsh=MWNmZzAxZGdyZ3VjdQ==" target="_blank" title="Instragram"><img
                    class="icon instragram-logo" src="../project/images/instragram.png"
                    alt="Instragram icon" /></a>
    `;

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('open');
        navigation.classList.toggle('open');
    });

    document.querySelectorAll('.intro-social, .social').forEach(div => {
        div.innerHTML = socialContent;
    });

    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});