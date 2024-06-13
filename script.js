document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation ul');

    menuToggle.addEventListener('click', function () {
        navigation.classList.toggle('show');
    });
});