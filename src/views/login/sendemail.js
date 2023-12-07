import axios from 'axios';
import Api from '../../scripts/global/api';

const sendemail = {
  async render() {
    return `
    <main class="flex items-center justify-center h-screen bg-sky-50">
        <div class="flex flex-col items-center content-center justify-center max-w-lg grow">
            <img class="w-24 md:w-32" src="./images/logo.jpg" alt="Logo Plan Plan" />
            <p class="px-2 mb-2 text-2xl font-bold text-center text-sky-900">Lupa Password?</p>
            <p class="px-2 mb-2 text-base font-normal text-center text-sky-900">Silakan masukkan Email anda</p>
            
            <form id="send-email" class="w-2/3 mx-auto">
                <div class="flex justify-center mt-5">
                    <p class="max-w-xs text-sm font-semibold text-center error-message text-rose-700" id="Error_input"></p>
                </div>
                <label for="email-address-icon" class="block mt-2 mb-2 text-sm font-bold text-sky-900">Email</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                    </div>
                    <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 font-semibold text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full ps-10 p-2.5" placeholder="Email@gmail.com" />
                </div>
                <button type="button" id="sendtokenverif" class="w-full text-white bg-sky-900 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6">
                    Kirim
                </button>  
            </form> 
        </div>
    </main>
        `;
  },

  async afterRender() {
    const verifemail = document.getElementById('sendtokenverif');
    verifemail.addEventListener('click', () => {
      const email = document.getElementById('email-address-icon').value;
      const apisend = `${Api.EmailUrl}`;
      const bodyemail = { email };

      axios.post(apisend, bodyemail, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        const message = document.getElementById('Error_input');
        message.innerHTML = response.data.message;
      }).catch((error) => {
        const message = document.getElementById('Error_input');
        message.innerHTML = error.response.data.message;
      });
    });
  },
};

export default sendemail;
