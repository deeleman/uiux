import './styles/main.css';
import { initNavigation } from './navigation';
import { initExperience } from './experience';
import { initMobileNav } from './mobile-nav';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initExperience();
  initMobileNav();
});
