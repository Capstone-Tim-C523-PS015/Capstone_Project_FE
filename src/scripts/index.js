import 'flowbite';
import '../styles/index.css';
import App from '../views/app';

const app = new App({ content: document.querySelector('.content') });
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

document.addEventListener('DOMContentLoaded', () => {
  // Ambil semua elemen dengan kelas 'menu-item'
  const menuItems = document.querySelectorAll('.menu-item');

  // Tambahkan event listener untuk setiap elemen menu
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      // Hapus kelas 'active' dari semua elemen menu
      menuItems.forEach((menuItem) => {
        menuItem.classList.remove('active');
      });

      // Tambahkan kelas 'active' ke elemen menu yang diklik
      item.classList.add('active');
    });
  });
});
