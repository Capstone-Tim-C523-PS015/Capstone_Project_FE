/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import "flowbite";
import "../styles/index.css";
import App from "../views/app";
import "fullcalendar";
import { createElement } from "@fullcalendar/core/preact";
import swRegister from "./utils/sw-register";
import "regenerator-runtime";

const app = new App({ content: document.querySelector(".content") });
window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
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
const contentlogin = new App({
  content: document.querySelector(".contentuser"),
});

window.addEventListener("hashchange", () => {
  contentlogin.renderPage();
});

window.addEventListener("load", () => {
  contentlogin.renderPage();
});
const contentchangepassword = new App({
  content: document.querySelector(".forgotpassword"),
});

window.addEventListener("hashchange", () => {
  contentchangepassword.renderPage();
});

window.addEventListener("load", () => {
  contentchangepassword.renderPage();
});

document.addEventListener("DOMContentLoaded", () => {
  // Ambil semua elemen dengan kelas 'menu-item'
  const menuItems = document.querySelectorAll(".menu-item");

  // Tambahkan event listener untuk setiap elemen menu
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Hapus kelas 'active' dari semua elemen menu
      menuItems.forEach((menuItem) => {
        menuItem.classList.remove("active");
      });

      // Tambahkan kelas 'active' ke elemen menu yang diklik
      item.classList.add("active");
    });
  });
});
