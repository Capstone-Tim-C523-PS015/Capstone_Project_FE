/* eslint-disable no-use-before-define */
import axios from 'axios';
import Api from '../../scripts/global/api';

const daftar = {
  async render() {
    return `
      <main class="h-screen bg-sky-50">
      <div class="flex flex-row h-full transition duration-1000 ease-in-out animate-fade-in">
        <!-- Form -->
        <div class="flex-col justify-center hidden shadow-lg md:flex grow bg-gradient-to-bl from-sky-200 via-sky-500 to-sky-200">
          <div class="flex items-start justify-start">
            <img src="./svg/awan.svg" alt="Cloud" class="md:w-48 sm:w-42 w-14" />
          </div>
          <div class="flex items-center justify-center gap-2">
            <img class="w-40 xl:w-96 md:w-72 sm:w-56" src="./svg/daftar.svg" alt="Calendar Register Logo" />
          </div>
          <div class="flex flex-col items-center justify-center text-center">
            <p class="text-sky-900 font-bold text-[10px] md:text-base lg:max-w-6xl text-center">Selamat Datang di Plan Plan</p>
            <p class="text-sky-900 font-bold text-[10px] md:text-base text-center max-w-xs md:max-w-3xl">Sebuah Langkah Menuju Kesuksesan</p>
          </div>
          <div class="flex justify-end">
            <img src="./svg/awan.svg" alt="Cloud" class="w-24 md:w-48 sm:w-48" />
          </div>
        </div>

        <div class="flex flex-col items-center content-center justify-center grow">
          <img class="w-24 md:w-32" src="./images/logo.jpg" alt="Logo Plan Plan" />
          <p class="px-2 mb-2 text-xl font-bold text-center text-sky-900">Silahkan untuk membuat akun!</p>
    
          <form id="Regis-form" class="w-2/3 mx-auto">
          <div class=" mt-5 flex justify-center" ><p class="error-message text-rose-700 font-semibold text-center text-sm max-w-xs" id="Error_input"></p></div>
            <label for="username" class="block mt-2 mb-2 text-sm font-bold text-sky-900">Nama Pengguna</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                  <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
              </div>
              <input type="text" id="username" class="bg-gray-50 border border-gray-300 font-semibold text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full ps-10 p-2.5" placeholder="Nama Pengguna" required />
            </div>
    
            <label for="email-address-icon" class="block mt-2 mb-2 text-sm font-bold text-sky-900">Email</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 font-semibold text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full ps-10 p-2.5" placeholder="Email@gmail.com" required />
            </div>
    
            <label for="password" class="block mt-2 mb-2 text-sm font-bold text-sky-900">Kata Sandi</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                  <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
                </svg>
              </div>
              <input type="password" id="password" class="bg-gray-50 border border-gray-300 font-semibold text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full ps-10 p-2.5" placeholder="Kata Sandi" required />
            </div>
    
            <button type="submit" id="daftar-btn" class="w-full text-white bg-sky-900 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6">
              Daftar
            </button>
            <p class="text-sky-950 font-normal text-[10px] md:text-base lg:max-w-6xl text-center px-2 mt-4">
              Sudah memiliki akun? <a href="#/masuk" class="text-sky-600 hover:underline">Masuk</a>
            </p>
          </form>
        </div>
      </div>
    </main>     
            
      `;
  },

  async afterRender() {
    const jwttoken = localStorage.getItem('token');
    if (jwttoken === null) {
      window.location.replace('./login.html#/daftar');
    } else {
      window.location.replace('./indexdash.html#/dashboard');
    }
    const RegisForm = document.getElementById('Regis-form');

    if (RegisForm) {
      RegisForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        regis();
      });
    }

    async function regis() {
      const name = document.getElementById('username').value;
      const email = document.getElementById('email-address-icon').value;
      const password = document.getElementById('password').value;

      // Ganti URL sesuai dengan endpoint login di backend Anda
      const regisUrl = `${Api.RegisUrl}`;
      const body = { name, email, password };

      axios.post(regisUrl, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        const errormessage = document.getElementById('Error_input');
        const errorMessageText = response.data.message;
        errormessage.innerHTML = errorMessageText;
        window.location.href = './login.html#/masuk';
      }).catch((error) => {
        if (error.response) {
          // Cek kode status respons
          if (error.response.status === 400) {
            // Tampilkan pesan kesalahan
            const errormessage = document.getElementById('Error_input');
            const errorMessageText = error.response.data.message;
            errormessage.innerHTML = errorMessageText;
          } else {
            // Tampilkan pesan kesalahan umum
            const errormessage = document.getElementById('Error_input');
            errormessage.innerHTML = error.response.data.message;
          }
        } else {
          // Something happened in setting up the request that triggered an Error
          // Jika tidak ada respons dari server
          const errormessage = document.getElementById('Error_input');
          errormessage.textContent = error.response.data.message;
        }
      });
    }
  },
};

export default daftar;
