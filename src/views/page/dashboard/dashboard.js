import { Calendar } from 'fullcalendar';
import '../../../styles/index.css';

const Home = {
  async render() {
    return `
    <div id="content" class="pb-32 animate-fade-in transition duration-1000 ease-in-out ">
      <div class=" lg:mx-6 pb-36 relative"> 
        <div class="lg:flex lg:flex-col lg:justify-around lg:items-center py-10 relative">
          <div class="right-0 top-0 absolute"><img class="lg:w-32 lg:h-20 w-22 h-10" src="./svg/awan.svg" alt="" /></div>
          <div class="flex flex-col gap-4 justify-center items-center">
            <div><img  src="./svg/welcome.svg" alt="" class="lg:w-[540px]"/></div>
            <p class=" text-sky-900 lg:my-4 text-center lg:max-w-2xl">Selamat datang di PlanPlan! Tempat untuk merencanakan dan mengelola aktivitas atau tugas dalam hidup Anda. Mulai lah untuk melihat jadwal Anda dengan mengklik tombol dibawah ini!.</p>
            <button id="scrollButton" class="flex justify-center items-center p-2 gap-2 font-bold rounded-lg bg-sky-900 text-sky-50 "><span class="material-symbols-outlined">
            south
            </span>Lihat Jadwal Anda<span class="material-symbols-outlined">
            south
            </span></button>
          </div>
          <div class="absolute bottom-0 left-0"><img class="lg:w-32 lg:h-20 w-22 h-10" src="./svg/awan.svg" alt="" /></div>
        </div> 
      </div>

      <div class="target pb-32 lg:mx-6">
        <div class="flex flex-col items-center justify-center">
          <div class=" border-black border-b-2 md:w-96 w-72 text-center">
            <h1 class="text-3xl font-bold text-sky-900">PRIORITAS</h1>
          </div>
          <div class="py-12 w-full flex flex-col justify-center gap-4 items-center">
            <img src="./svg/kosong.svg" class="w-96"/>
            <div class="text-center">
              <h2 class="text-sky-900 text-xl">Tidak Ada Tugas atau Task yang perlu dikerjakan!</h2>
              <p class="text-sky-900 font-bold">Silakan isi Todo-List Terlebih dahulu!</p>
            </div>
          </div>
        </div>
      </div>

      <div class=" pb-32 lg:mx-6">
        <div class="flex flex-col items-center justify-center">
          <div class=" border-black border-b-2 md:w-96 w-72 text-center">
            <h1 class="text-3xl font-bold text-sky-900">KALENDER</h1>
          </div>
          <div id='calendar' class="w-full border border-black mt-5 p-4 z-0"></div>
        </div>
      </div>

      <div class="pb-32 lg:mx-6 ">
        <div class="flex flex-col items-center justify-center">
          <div class=" border-black border-b-2 md:w-96 w-72 text-center">
            <h1 class="text-3xl font-bold text-sky-900">TODO-LIST</h1>
          </div>
          <div class="py-12 w-full flex flex-col justify-center gap-4 items-center">
            <img src="./svg/kosong.svg" class="w-96"/>
            <div class="text-center">
              <h2 class="text-sky-900 text-xl">Tidak Ada Tugas atau Task yang perlu dikerjakan!</h2>
              <p class="text-sky-900 font-bold">Silakan isi Todo-List Terlebih dahulu!</p>
            </div>
          </div>
        </div>
      </div>

      <div class="pb-10 lg:mx-6 ">
        <div class="flex flex-col items-center justify-center">
          <div class=" border-black border-b-2 md:w-96 w-72 text-center">
            <h1 class="text-3xl font-bold text-sky-900">HISTORI</h1>
          </div>
          <div class="py-12 w-full flex flex-col justify-center gap-4 items-center">
            <img src="./svg/kosong.svg" class="w-96"/>
            <div class="text-center">
              <h2 class="text-sky-900 text-xl">Tidak Ada Tugas atau Task yang sudah dikerjakan!</h2>
              <p class="text-sky-900 font-bold">Silakan isi Todo-List Terlebih dahulu!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      
      
      `;
  },

  async afterRender() {
    const jwttoken = localStorage.getItem('token');
    if (jwttoken === null) {
      window.location.replace('./login.html#/masuk');
    }

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

    // API Calendar
    const calendarEl = document.getElementById('calendar');
    const calendar = new Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },

      initialView: 'dayGridMonth',
      events: [],
      aspectRatio: 2,
    });
    calendar.render();
  },
};

export default Home;
