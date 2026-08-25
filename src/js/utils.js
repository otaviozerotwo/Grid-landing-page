import iconClose from '../assets/images/icon-close.svg'
import iconMenu from '../assets/images/icon-menu.svg'

const toggleMenu = (menu, icon, button) => {
  const isMenuOpen = menu.hidden;
  menu.hidden = !isMenuOpen;
  
  const iconPath = isMenuOpen ? iconClose : iconMenu;
  const ariaLabel = isMenuOpen ? 'Close menu' : 'Open menu';

  icon.src = iconPath;
  button.setAttribute('aria-label', ariaLabel);
  button.setAttribute('aria-expanded', String(isMenuOpen));
}

export default toggleMenu;