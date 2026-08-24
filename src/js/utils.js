const toggleMenu = (menu, icon, button) => {
  const isMenuOpen = menu.hidden;
  menu.hidden = !isMenuOpen;
  
  const iconName = isMenuOpen ? 'icon-close' : 'icon-menu';
  const ariaLabel = isMenuOpen ? 'Close menu' : 'Open menu';

  icon.src = `./src/assets/images/${iconName}.svg`;
  button.setAttribute('aria-label', ariaLabel);
  button.setAttribute('aria-expanded', String(isMenuOpen));
}

export default toggleMenu;