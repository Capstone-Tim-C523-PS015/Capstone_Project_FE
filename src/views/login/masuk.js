/* eslint-disable  */

import axios from 'axios';
import Api from '../../scripts/global/api';

const masuk = {
  async render() {
    return `
        <main class="h-screen bg-sky-50">
        <div class="flex flex-row h-full transition duration-1000 ease-in-out animate-fade-in">
          <!-- Form -->
          <div class="flex flex-col items-center content-center justify-center shadow-lg grow">
            <img class="w-24 md:w-32" src="./images/logo.jpg" alt="Logo Plan Plan" />
            <p class="px-2 mb-2 text-2xl font-bold text-center text-sky-900">Login ke akun kamu</p>
            <p class="px-2 mb-2 text-base font-normal text-center text-sky-900">Selamat Datang Kembali!</p>

            <form id="login-form" class="w-2/3 mx-auto">
              <div class=" mt-5 flex justify-center" ><p class="error-message text-rose-700 font-semibold text-center text-sm max-w-xs" id="Error_input"></p></div>
              <label for="email-address-icon" class="block mt-2 mb-2 text-sm font-bold text-sky-900">Email</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                    </div>
                    <input type="email" id="email-address-icon" class="bg-gray-50 border border-gray-300 font-semibold text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full ps-10 p-2.5" placeholder="Email@gmail.com" required  />
                </div>
        
                <label for="password" class="block mt-2 mb-2 text-sm font-bold text-sky-900">Kata Sandi</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
                    </svg>
                    </div>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 font-semibold text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full ps-10 p-2.5" placeholder="Kata Sandi" required />
                    <div class="absolute inset-y-0 right-3 top-1.5 px-2 py-2 cursor-pointer" id="seepassword">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486z"/>
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708"/>
                      </svg>
                    </div>
                </div>
                <p class="px-2 mt-4 mb-2 text-sm font-semibold text-right text-sky-600 hover:underline">
                    <a href="./lupapassword.html">Lupa Kata Sandi?</a>
                </p>
                <button type="submit" id="masuk-btn" class="flex justify-center w-full text-sky-100 bg-sky-900 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2">
                  <img id="loading-login" src="./svg/loading-login.svg" class="hidden w-5"><p id="Masukuser">Masuk</p>
                </button>
              <p class="text-sky-900 font-normal text-sm md:text-base lg:max-w-6xl text-center px-2 mt-2">
                Belum memiliki akun? <a href="#/daftar" class="text-sky-600 hover:underline">Daftar</a>
              </p>
            </form>
            </div>

          <div class="flex-col justify-center hidden shadow-lg md:flex grow bg-gradient-to-bl from-sky-200 via-sky-500 to-sky-200">
            <div class="flex justify-end">
                <img src="./svg/awan.svg" alt="Cloud" class="xl:w-56 sm:w-52 w-14" />
                </div>
                <div class="flex items-center justify-center gap-2">
                  <img class="w-40 xl:w-96 md:w-72 sm:w-56" src="./svg/masuk.svg" alt="Calendar Login Logo" />
                </div>
                <div class="flex flex-col items-center justify-center mt-5 text-center">
                  <p class="text-sky-950 font-bold text-[10px ] md:text-base text-center">Selamat Datang di Plan Plan</p>
                  <p class="text-sky-950 font-bold text-[10px] md:text-base text-center">Sebuah Langkah Menuju Kesuksesan</p>
                </div>
                <div class="flex justify-start">
                  <img src="./svg/awan.svg" alt="Cloud" class="w-24 xl:w-56 md:w-52 sm:w-48" />
                </div>
          </div>
        </div>
      </main>
      `;
  },

  async afterRender() {
    const jwttoken = localStorage.getItem('token');
    if (jwttoken != null) {
      window.location.replace('./indexdash.html#/dashboard');
    }

    const masukForm = document.getElementById('login-form');
    if (localStorage !== null) {
      document.getElementById('email-address-icon').value = localStorage.getItem('email');
      document.getElementById('password').value = localStorage.getItem('password');
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    }

    seepassword();
    if (masukForm) {
      masukForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const loadinglogin = document.getElementById('loading-login');
        const textlogin = document.getElementById('Masukuser');

        loadinglogin.classList.remove('hidden');
        textlogin.classList.add('hidden');
        setTimeout(login, 1000);
      });
    }

    async function login() {
      const email = document.getElementById('email-address-icon').value;
      const password = document.getElementById('password').value;
      const loginUrl = `${Api.LoginUrl}`;
      const body = { email, password };

      axios.post(loginUrl, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        const errorMessage = document.getElementById('Error_input');
        errorMessage.innerHTML = response.data.message;
        errorMessage.classList.add('text-green-800');
        errorMessage.classList.remove('text-rose-700');

        setTimeout(time, 1000);
        function time() {
          const loadinglogin = document.getElementById('loading-login');
          const textlogin = document.getElementById('Masukuser');

          loadinglogin.classList.remove('hidden');
          textlogin.classList.add('hidden');
          localStorage.setItem('token', response.data.token);
          window.location.replace('./indexdash.html#/dashboard');
        }

      }).catch((error) => {
        const errorMessage = document.getElementById('Error_input');
        errorMessage.innerHTML = error.message;
        errorMessage.classList.remove('text-green-800');
        errorMessage.classList.add('text-rose-700');
        const loadinglogin = document.getElementById('loading-login');
        const textlogin = document.getElementById('Masukuser');

        loadinglogin.classList.add('hidden');
        textlogin.classList.remove('hidden');
      });
    }


    async function seepassword() {
      const seepasswordid = document.getElementById('seepassword');
      seepasswordid.addEventListener('click', function () {
        const password = document.getElementById('password');
        password.type = password.type === 'password' ? 'text' : 'password';
        seepasswordid.innerHTML = seepasswordid.innerHTML.includes('slash') ?
          `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
          </svg>` :
          `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486z"/>
            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708"/>
          </svg>`;
      });
    }
  },
};

export default masuk;
