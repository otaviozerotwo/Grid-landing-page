import toggleMenu from './utils';

const headerMenu = document.getElementById('headerMenu');
const menuButton = document.getElementById('headerButton');
const menuButtonIcon = document.getElementById('iconButtonMenu');

menuButton.addEventListener('click', () => {
  toggleMenu(headerMenu, menuButtonIcon, menuButton);
});