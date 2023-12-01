import "flowbite";
import "../styles/index.css";
import App from "../views/app";
import "fullcalendar";
import { createElement } from "@fullcalendar/core/preact";

const app = new App({ content: document.querySelector(".content") });
window.addEventListener("hashchange", () => {
  app.renderPage();
}); 

window.addEventListener("load", () => {
  app.renderPage();
});

const dashboard = new App({
  content: document.querySelector(".contentDashboard"),
});

window.addEventListener("hashchange", () => {
  dashboard.renderPage();
});

window.addEventListener("load", () => {
  dashboard.renderPage();
});
const indexdashboard = new App({
  content: document.querySelector(".contentindexdash"),
});

window.addEventListener("hashchange", () => {
  indexdashboard.renderPage();
});

window.addEventListener("load", () => {
  indexdashboard.renderPage();
});

document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua elemen dengan kelas 'menu-item'
  var menuItems = document.querySelectorAll(".menu-item");

  // Tambahkan event listener untuk setiap elemen menu
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Hapus kelas 'active' dari semua elemen menu
      menuItems.forEach(function (menuItem) {
        menuItem.classList.remove("active");
      });

      // Tambahkan kelas 'active' ke elemen menu yang diklik
      item.classList.add("active");
    });
  });
});


