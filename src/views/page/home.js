const Home = {
  async render() {
    return `
      <header>
        <nav class="border-blue-200 shadow-lg bg-sky-200">
          <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="./images/logo.jpg" alt="Logo Plan Plan" class="w-14" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-sky-900">Plan Plan</span>
            </div>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm rounded-lg text-sky-900 md:hidden hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-200">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto lg:flex lg:gap-8 lg:items-center" id="navbar-default">
              <ul class="flex flex-col items-center p-4 mt-4 font-medium border rounded-lg md:p-0 border-sky-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                <li>
                  <a href="#/home" class="block px-3 py-2 font-medium rounded menu-item text-sky-900 hover:font-bold md:bg-transparent focus:font-bold md:p-0 ">Beranda</a>
                </li>
                <li>
                  <a id="home" href="#/about" class="block px-3 py-2 font-medium rounded menu-item text-sky-900 focus:font-bold hover:font-bold md:bg-transparent md:p-0 ">Tentang Kami</a>
                </li>
                <div class="items-center px-2 py-2 text-center">
                    <a class="" href="#/masuk"><button class="px-3 py-2 font-bold rounded-lg bg-sky-900 text-sky-50 hover:bg-sky-800">Masuk</button></a>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main class="flex max-w-screen-xl p-4 mx-auto">
        <div class="pb-32 animate-fade-in transition duration-1000 ease-in-out md:mt-5 mt-8">
          <div class="lg:h-[750px] h-[650px]">
            <div class="flex justify-end lg:mt-3"><img class="lg:w-36 lg:h-20 w-22 h-10" src="./images/awan.png" alt="" /></div>
            <div class="flex lg:justify-around flex-wrap-reverse lg:items-center mt-4">
              <div>
                <h1 class="font-black text-xl md:text-4xl" style="letter-spacing: 2px;">Selamat datang di PlanPlan!</h1>
                <p class="max-w-xs text-sky-900 my-4 text-xs md:text-">Tempat untuk merencanakan dan mengelola aktivitas atau tugas dalam kehidupan sehari-hari. Bergabunglah sekarang dan jadikan setiap langkah Anda menuju kesuksesan yang lebih teratur dan menyenangkan.</p>
                <button id="scrollButton" class="w-44 flex justify-center items-center gap-2 font-bold rounded-lg bg-sky-900 text-sky-50 h-10">Mulai Menjelajah <span class="material-symbols-outlined font-bold">arrow_right_alt</span></button>
              </div>
              <div><img src="./svg/hero1.svg" alt="" class="lg:h-80 w-[575px] h-48"/></div>
            </div>
            <div class="flex justify-start mt-5"><img class="lg:w-36 lg:h-20 w-22 h-10" src="./images/awan.png" alt="" /></div>
          </div>

          <div class="target flex justify-center border-b-sky-900 border-b-2 p-3">
            <h1 class=" text-sky-900 text-2xl md:text-4xl font-bold">Fitur Aplikasi</h1>
          </div>

          <div class="flex flex-wrap items-center justify-between">
            <div class="md:w-[40%] flex items-center flex-col mt-20 md:mt-10">
              <img src="./svg/future.svg" alt="" class="" />
              <div class="m-5">
                <h1 class="lg:font-black font-bold text-2xl lg:text-4xl pb-4 w-full" style="letter-spacing: 2px;">Fitur Prioritas Task</h1>
                <p class="text-justify text-sm md:text-base text-sky-900 w-full">
                  Sebuah Fitur untuk membantu Anda dalam mengelola dan mengatur prioritas task mana yang perlu dikerjakan terlebih dahulu. Task akan dikelompokkan ke dalam kuadran yang sesuai. Kuadran yang dimaksud yaitu akan dikelompokkan berdasarkan mendesak, penting, ditunda, dan selesai, sehingga Anda dapat memiliki visibilitas yang jelas terhadap task mana yang menjadi prioritas Anda terlebih dahulu untuk dikerjakan.
                </p>
                <div class="w-full mt-4">
                  <a href="#/daftar">
                  <button class="flex justify-center items-center gap-2 font-bold rounded-lg bg-sky-900 text-sky-50 w-44 h-10 shadow-lg">Mulai Mencoba<span class="material-symbols-outlined font-bold">arrow_right_alt</span></button>
                  </a>
                </div>
              </div>
            </div>
            <div class="md:w-[40%] flex items-center flex-col md:mt-10 mt-20">
              <img src="./svg/calendar.svg" alt="" class="" />
              <div class="m-5">
                <h1 class="lg:font-black font-bold text-2xl lg:text-4xl pb-4 w-full" style="letter-spacing: 2px;">Fitur Kalender</h1>
                <p class="text-justify text-sm md:text-base text-sky-900 w-full">
                  Sebuah alat untuk membantu Anda dalam mengelola waktu dan sebagai pengingat Aktivitas atau Acara yang ingin Anda lakukan pada hari itu. Tampilan Kalender dapat diubah formatnya sesuai dengan keinginan Anda yaitu harian, mingguan, dan bulanan. Terdapat dua pilihan status yaitu sebagai Event dan Task. Jika memilih Task maka akan otomatis ditambahkan pada Fitur Todo-List.
                </p>
                <div class="w-full mt-4">
                  <a href="#/daftar">
                    <button class="flex justify-center items-center gap-2 font-bold rounded-lg bg-sky-900 text-sky-50 w-44 h-10 shadow-lg">Mulai Mencoba<span class="material-symbols-outlined font-bold">arrow_right_alt</span></button>
                  </a>
                </div>
              </div>
            </div>

            <div class="md:w-[40%] flex items-center flex-col md:mt-28 mt-20">
              <img src="./svg/todo.svg" alt="" class="" />
              <div class="m-5">
                <h1 class="lg:font-black font-bold text-2xl lg:text-4xl pb-4 w-full" style="letter-spacing: 2px;">Fitur Todo-List </h1>
                <p class="text-justify text-sm md:text-base text-sky-900 w-full">
                  Sebuah Fitur untuk membantu Anda dalam mengelola dan menyelesaikan task atau tugas dalam kehidupan sehari hari. Fitur ini dapat menetapkan tenggat waktu, judul task, dan deksripsi task, dapat juga melakukan perubahan status yang dimana berisikan beberapa status yaitu dikerjakan, menunggu, revisi, dan selesai
                </p>
                <div class="w-full mt-4">
                  <a href="#/daftar">
                    <button class="flex justify-center items-center gap-2 font-bold rounded-lg bg-sky-900 text-sky-50 w-44 h-10 shadow-lg">Mulai Mencoba<span class="material-symbols-outlined font-bold">arrow_right_alt</span></button>
                  </a>
                </div>
              </div>
            </div>
            <div class="md:w-[40%] flex items-center flex-col md:mt-28 mt-20">
              <img src="./svg/notifikasi.svg" alt="" class="" />
              <div class="m-5">
                <h1 class="lg:font-black font-bold text-2xl lg:text-4xl pb-4 w-full" style="letter-spacing: 2px;">Fitur Notifikasi</h1>
                <p class="text-justify text-sm md:text-base text-sky-900 w-full">
                Sebuah Fitur yang dirancang untuk memberikan pemberitahuan terkait event atau deadline task, hal ini membantu Anda untuk tetap terhubung dengan setiap perkembangan progress dan tanggung jawab Anda. Anda dapat menetapkan jadwal notifikasi sesuai dengan kebutuhan Anda
                </p>
                <div class="w-full mt-4">
                  <a href="#/daftar">
                    <button class="flex justify-center items-center gap-2 font-bold rounded-lg bg-sky-900 text-sky-50 w-44 h-10 shadow-lg">Mulai Mencoba<span class="material-symbols-outlined font-bold">arrow_right_alt</span></button>
                  </a>
              </div>
              </div>
            </div>
          </div>

          <div class="flex justify-end mt-16 md:mt-28 md:mb-0 mb-5"><img class="lg:w-36 lg:h-20 w-22 h-10" src="./images/awan.png" alt="" /></div>
          <div class="flex justify-center content-center items-center">
            <div class="md:w-[40%] flex items-center flex-col">
              <img src="./svg/histori.svg" alt="" class="" />
              <div class="m-5">
                <h1 class="lg:font-black font-bold text-2xl lg:text-4xl pb-4 w-full" style="letter-spacing: 2px;">Fitur Histori Task</h1>
                <p class="text-justify text-sm md:text-base text-sky-900 w-full">
                  Sebuah fitur untuk membantu anda dalam mengelola dan mengatur prioritas task mana yang perlu dikerjakan terlebih dahulu. Task akan dikelompokkan kedalam kuadran kuadran yang sesuai. Kuadran yang dimaksud yaitu akan dikelompokkan berdasarakan mendesak, penting, ditunda, dan selesai, Sehingga Anda dapat memiliki visibilitas yang jelas terhadap task mana yang menjadi prioritas Anda terlebih dahulu untuk dikerjakan.
                </p>
                <div class="w-full mt-4">
                  <a href="#/daftar">
                    <button class="flex justify-center items-center gap-2 font-bold rounded-lg bg-sky-900 text-sky-50 w-44 h-10 shadow-lg">Mulai Mencoba<span class="material-symbols-outlined font-bold">arrow_right_alt</span></button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-start mt-5 "><img class="lg:w-36 lg:h-20 w-22 h-10" src="./images/awan.png" alt="" /></div>      
        </div>
      </main>

      <footer class="bottom-0 w-full shadow bg-sky-200">
        <div class="w-[95%] border border-t border-t-sky-900 border-sky-200 mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-sky-900">© 2023 <a class="hover:underline">PlanPlan™</a>. All Rights Reserved.</span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
            <li>
              <a href="#/about" class="hover:underline me-4 md:me-6 text-sky-900">Tentang Kami</a>
            </li>
            <li>
              <a href="#/about" class="hover:underline text-sky-900">Kontak</a>
            </li>
          </ul>
        </div>
      </footer>  
    `;
  },

  async afterRender() {
    window.addEventListener('beforeunload', () => {
      // Tambahkan kelas animasi saat meninggalkan halaman
      const contentElement = document.getElementById('content');
      contentElement.classList.remove('animate-fade-in');
      contentElement.classList.add('animate-fade-out');
    });

    document
      .getElementById('scrollButton')
      .addEventListener('click', () => {
        // Smooth scroll to the content section
        document
          .querySelector('.target')
          .scrollIntoView({ behavior: 'smooth' });
      });
  },
};

export default Home;
