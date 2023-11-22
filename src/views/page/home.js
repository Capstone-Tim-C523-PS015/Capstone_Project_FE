const Home = {
  async render() {
    return `
    <div class="pb-32 animate-fade-in transition duration-1000 ease-in-out ">
      <div class="h-[873px] lg:mx-6">
        <div class="lg:flex lg:justify-end lg:mt-3"><img src="../awan.png" alt="" /></div>
        <div class="lg:flex lg:justify-around lg:items-center mt-14 ">
          <div>
            <h1 class="lg:font-black lg:text-4xl" style="letter-spacing: 2px;">Selamat datang di PlanPlan!</h1>
            <p class="lg:max-w-lg text-sky-900 lg:my-4">Tempat untuk merencanakan dan mengelola aktivitas atau tugas dalam kehidupan anda sehari hari. Bergabunglah sekarang dan jadikan setiap langkah Anda menuju kesuksesan yang lebih teratur dan menyenangkan.</p>
            <button id="scrollButton" class="lg:w-44 flex justify-center items-center gap-2 font-bold rounded-lg bg-sky-900 text-sky-50 lg:h-10">Mulai Menjelajah <span class="material-symbols-outlined font-bold">
            arrow_right_alt
            </span></button>
          </div>
          <div><img src="../hero1.svg" alt="" class="lg:h-96 w-[575px]"/></div>
        </div>
        <div class="lg:flex lg:justify-start"><img src="../awan.png" alt="" /></div>
      </div>
      <div class=" target h-[873px] lg:mx-6">
        <div class="lg:flex lg:justify-between">
          <div class="w-[40%] lg:flex lg:items-center lg:flex-col">
            <div><img src="../future.svg" alt="" class="" /></div>
            <h1 class="lg:font-black lg:text-4xl pb-4 w-full" style="letter-spacing: 2px;">Fitur Prioritas Task</h1>
            <p class="text-justify text-base text-sky-900 w-full lg:w-full">
              Sebuah Fitur untuk membantu anda dalam mengelola dan mengatur prioritas task mana yang perlu dikerjakan terlebih dahulu. Task akan dikelompokkan kedalam kuadran kuadran yang sesuai. Kuadran yang dimaksud yaitu akan dikelompokkan berdasarkan mendesak, penting, ditunda, dan selesai, Sehingga Anda dapat memiliki visibilitas yang jelas terhadap task mana yang menjadi prioritas Anda terlebih dahulu untuk dikerjakan.
            </p>
            <div class="w-full mt-4">
              <button class="lg:w-44 flex justify-center items-center gap-2 font-bold rounded-lg bg-sky-900 text-sky-50 lg:h-10 shadow-lg">Mulai Mencoba  <span class="material-symbols-outlined font-bold">
                arrow_right_alt
                </span>
              </button>
            </div>
            
          </div>
      
          <div class="w-[40%] lg:flex lg:items-center lg:flex-col">
            <div><img src="../calendar.svg" alt="" class="" /></div>
            <h1 class="lg:font-black lg:text-4xl pb-4 w-full" style="letter-spacing: 2px;">Fitur Kalender</h1>
            <p class="text-justify text-base text-sky-900 w-full lg:w-full">
            Sebuah alat untuk membantu Anda dalam mengelola waktu dan sebagai pengingat Aktivitas atau Acara yang ingin Anda lakukan pada hari itu. Tampilan Kalender dapat diubah formatnya sesuai dengan keinginan Anda yaitu harian, mingguan, dan bulanan. Terdapat dua pilihan status yaitu sebagai Event dan Task. Jika memilih Task maka akan otomatis ditambahkan pada Fitur Todo-List.
            </p>
            <div class="w-full mt-4">
                <button class="lg:w-44 flex justify-center items-center gap-2 font-bold rounded-lg bg-sky-900 text-sky-50 lg:h-10 shadow-lg">Mulai Mencoba  <span class="material-symbols-outlined font-bold">
                  arrow_right_alt
                  </span>
                </button>
            </div>
          </div>
        </div>
      </div>
      <div class=" pb-32 lg:mx-6">
        <div class="lg:flex lg:justify-between">
          <div class="w-[40%] lg:flex lg:items-center lg:flex-col">
            <div><img src="../todo.svg" alt="" class="" /></div>
            <h1 class="lg:font-black lg:text-4xl pb-4 w-full" style="letter-spacing: 2px;">Fitur Todo-List</h1>
            <p class="text-justify text-base text-sky-900 w-full lg:w-full">
            Sebuah Fitur untuk membantu Anda dalam mengelola dan menyelesaikan task atau tugas dalam kehidupan sehari hari. Fitur ini dapat menetapkan tenggat waktu, judul task, dan deksripsi task, dapat juga melakukan perubahan status yang dimana berisikan beberapa status yaitu mendesak, penting, ditunda, dan selesai.
            </p>
            <div class="w-full mt-4">
              <button class="lg:w-44 flex justify-center items-center gap-2 font-bold rounded-lg bg-sky-900 text-sky-50 lg:h-10 shadow-lg">Mulai Mencoba  <span class="material-symbols-outlined font-bold">
                arrow_right_alt
                </span>
              </button>
            </div>
            
          </div>
      
          <div class="w-[40%] lg:flex lg:items-center lg:flex-col">
          <div><img src="../notifikasi.svg" alt="" class="" /></div>
          <h1 class="lg:font-black lg:text-4xl pb-4 w-full" style="letter-spacing: 2px;">Fitur Notifikasi </h1>
          <p class="text-justify text-base w-full text-sky-900 lg:w-full">
          Sebuah Fitur yang dirancang untuk memberikan pemberitahuan terkait event atau deadline task, hal ini membantu Anda untuk tetap terhubung dengan setiap perkembangan progress dan tanggung jawab Anda. Anda dapat menetapkan jadwal notifikasi sesuai dengan kebutuhan Anda
          </p>
          <div class="w-full mt-8">
              <button class="lg:w-44 flex justify-center items-center gap-2 font-bold rounded-lg bg-sky-900 text-sky-50 lg:h-10 shadow-lg">Mulai Mencoba  <span class="material-symbols-outlined font-bold">
                arrow_right_alt
                </span>
              </button>
            </div>
        </div>
        </div>
      </div>

      <div class="h-[873px] lg:mx-6 ">
        <div class="lg:flex lg:justify-end lg:mt-3 lg:pr-40"><img src="../awan.png" alt="" /></div>
        <div class="lg:flex lg:justify-center">
          <div class="w-[40%] lg:flex lg:items-center lg:flex-col">
            <div><img src="../todo.svg" alt="" class="" /></div>
            <h1 class="lg:font-black lg:text-4xl pb-4 w-full" style="letter-spacing: 2px;">Fitur Todo-List</h1>
            <p class="text-justify text-base text-sky-900 w-full lg:w-full">
            Sebuah Fitur untuk membantu Anda dalam mengelola dan menyelesaikan task atau tugas dalam kehidupan sehari hari. Fitur ini dapat menetapkan tenggat waktu, judul task, dan deksripsi task, dapat juga melakukan perubahan status yang dimana berisikan beberapa status yaitu mendesak, penting, ditunda, dan selesai.
            </p>
            <div class="w-full mt-4">
              <button class="lg:w-44 flex justify-center items-center gap-2 font-bold rounded-lg bg-sky-900 text-sky-50 lg:h-10 shadow-lg">Mulai Mencoba  <span class="material-symbols-outlined font-bold">
                arrow_right_alt
                </span>
              </button>
            </div>
            
          </div>
        </div>
        <div class="lg:flex lg:justify-start lg:mt-3 lg:pl-40"><img src="../awan.png" alt="" /></div>
      </div>
    </div>
      
      
      `;
  },

  async afterRender() {
    window.addEventListener("beforeunload", function () {
      // Tambahkan kelas animasi saat meninggalkan halaman
      const contentElement = document.getElementById("content");
      contentElement.classList.remove("animate-fade-in");
      contentElement.classList.add("animate-fade-out");
    });

    document
      .getElementById("scrollButton")
      .addEventListener("click", function () {
        // Smooth scroll to the content section
        document
          .querySelector(".target")
          .scrollIntoView({ behavior: "smooth" });
      });
  },
};

export default Home;
