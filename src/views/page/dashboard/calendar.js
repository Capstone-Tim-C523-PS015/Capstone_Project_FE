/* eslint-disable new-cap */
/* eslint-disable no-use-before-define */
import { Calendar } from 'fullcalendar';
import '../../../styles/index.css';
import axios from 'axios';

const Kalendar = {
  async render() {
    return `
      <div id="contentUtama" class="h-screen  relative">
        <div class="flex flex-col items-center relative justify-center">
          <div id='kalendar' class="w-full h-screen  bg-white shadow-lg target shadow-sky-400 mt-5  z-0 cursor-pointer"></div>
          <div class="modal w-[80%] fade bg-sky-50 md:w-[70%] lg:w-[40%] pb-12 rounded-2xl absolute hidden shadow-lg transition-transform duration-1000 ease-in-out bottom-3" id="dateModal" tabindex="-1" role="dialog" aria-labelledby="dateModalLabel" aria-hidden="true">
          <span id="close" class="material-symbols-outlined absolute right-[-5px] bg-red-500 rounded-full text-white cursor-pointer top-[-10px]">close</span>
            <div class="modal-dialog" role="document">

              <div id="TodoEvent" class="modal-content px-6">
                <div class="modal-header flex text-center justify-center pt-4">
                  <h5 class="modal-title text-sky-900 text-lg font-bold border-black border-b-2 px-4" id="dateModalLabel">Aktivitas Baru</h5>
                </div>
                <div class="mt-6 md:flex lg:flex">
                  <div class="md:w-1/2 md:pr-6">
                    <form class="gap-2 w-full flex flex-col lg:gap-8">
                      <div class="flex gap-2 flex-col lg:gap-2">
                        <label for="" class="text-sm text-sky-900 font-bold">Judul Aktivitas</label>
                        <input id="judulEvent" type="text" class="w-full rounded-lg" placeholder="Meeting Project">
                      </div>
                      <div class="flex flex-col gap-2">
                        <label for="" class="text-sm text-sky-900 font-bold">Kategori</label>
                        <div class="flex gap-4">
                          <button id="btnEventPertama" class="active w-20 h-8 border rounded-lg ">Event</button>
                          <button id="btnTaskPertama" class="w-20 h-8 border rounded-lg ">Task</button>
                        </div>
                      </div>
                      <div class="flex flex-col gap-6">
                        <div class="flex flex-col gap-2 order-1 lg:order-2 ">
                          <label for="" class="text-sm text-sky-900 font-bold">Tanggal</label>
                          <input type="datetime-local" id="customDateEvent" class="w-full border-sky-950 border rounded-lg cursor-pointer"\>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="md:w-1/2 gap-2 flex flex-col justify-center  md:pl-6">
                    <form action="" class="flex flex-col gap-2 lg:gap-8 relative w-full h-full">
                      <div class="flex flex-col gap-2 w-full">
                        <label for="myTextarea" class="text-sm text-sky-900 font-bold">Deskripsi</label>
                        <textarea id="myTextareaEvent" name="myTextarea" class="rounded-xl px-2 py-1 w-full md:h-40 lg:h-40"></textarea>
                      </div>
                      <div class="flex gap-2">
                        <label for="myTextarea" class="text-sm text-sky-900 font-bold">Notifikasi</label>
                          <div class="flex items-center">
                            <input type="checkbox" id="toggle" class="hidden">
                            <label for="toggle" class="cursor-pointer flex items-center">
                                <div class="w-12 h-6 rounded-full p-1 bg-sky-300 flex items-center">
                                    <div id="indicator" class="w-6 h-6 bg-white  rounded-full transition-transform"></div>
                                </div>
                            </label>
                        </div>
                      </div>
                      
                    </form>
                    <button id="buttonSubmitAktivitas" class="bg-green-700 py-2 lg:w-full  text-white rounded-lg flex items-center justify-center  px-4" type="button">Simpan Aktivitas</button>
                  </div>
                  
                </div>
                <div class="modal-body" id="selectedDate"></div>
              </div>


              <div id="TodoTugas" class="modal-content px-6 hidden">
                <div class="modal-header flex text-center justify-center pt-4">
                  <h5 class="modal-title text-sky-900 text-lg font-bold border-black border-b-2 px-4 text-center" id="dateModalLabel">Tugas Baru</h5>
                </div>
                <div class="mt-6 md:flex lg:flex">
                  <div class="md:w-1/2 md:pr-6">
                    <form class="gap-2 w-full flex flex-col lg:gap-8">
                      <div class="flex gap-2 flex-col lg:gap-2">
                        <label for="" class="text-sm text-sky-900 font-bold">Judul Aktivitas</label>
                        <input id="judul" type="text" class="w-full rounded-lg" placeholder="Meeting Project">
                      </div>
                      <div class="flex flex-col gap-2">
                        <label class="text-sm text-sky-900 font-bold">Kategori</label>
                        <div class="flex gap-4">
                          <button id="btnEventKedua" class="w-20 h-8 border rounded-lg ">Event</button>
                          <button id="btnTaskKedua" class="w-20 h-8 border rounded-lg active">Task</button>
                        </div>
                      </div>
                      <div class="flex flex-col gap-6">
                        <div class="flex flex-col gap-2 order-1 lg:order-2 ">
                          <label for="" class="text-sm text-sky-900 font-bold">Deadline</label>
                          <input type="datetime-local" id="customDate" class="w-full border-sky-950 border rounded-lg cursor-pointer"\>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="md:w-1/2 gap-2 flex flex-col justify-center  md:pl-6">
                    <form action="" class="flex flex-col gap-2 lg:gap-8 relative w-full h-full">
                      <div class="flex flex-col gap-2 w-full">
                        <label for="myTextarea" class="text-sm text-sky-900 font-bold">Deskripsi</label>
                        <textarea id="myTextarea" name="myTextarea" class="rounded-xl px-2 py-1 w-full md:h-40 lg:h-40"></textarea>
                      </div>
                      <div class="flex gap-2">
                        <label for="myTextarea" class="text-sm text-sky-900 font-bold">Notifikasi</label>
                          <div class="flex items-center">
                            <input type="checkbox" id="toggle" class="hidden">
                            <label for="toggle" class="cursor-pointer flex items-center">
                                <div class="w-12 h-6 rounded-full p-1 bg-sky-300 flex items-center">
                                    <div id="indicator" class="w-6 h-6 bg-white  rounded-full transition-transform"></div>
                                </div>
                            </label>
                        </div>
                      </div>
                      
                    </form>
                    <button id="buttonSubmitTask" class="bg-green-700 py-2 lg:w-full  text-white rounded-lg flex items-center justify-center  px-4" type="button">Simpan Tugas</button>
                  </div>
                  
                </div>
                <div class="modal-body" id="selectedDate"></div>
              </div>
            </div>
          </div>

          <div id="PutTodo" class="modal-content px-6 absolute hidden bg-sky-50 shadow-xl rounded-lg pb-6">
            <span id="closeTodo" class="material-symbols-outlined absolute right-[-5px] bg-red-500 rounded-full text-white cursor-pointer top-[-10px]">close</span>
            <div class="modal-header flex text-center justify-center pt-4">
              <h5 class="modal-title text-sky-900 text-lg font-bold border-black border-b-2 px-4" id="dateModalPutTodo">Edit Tugas</h5>
            </div>
            <div class="mt-6 md:flex lg:flex">
              <div class="md:w-1/2 md:pr-6">
                <form class="gap-2 w-full flex flex-col lg:gap-8">
                  <div class="flex gap-2 flex-col lg:gap-2">
                    <label for="" class="text-sm text-sky-900 font-bold">Judul Aktivitas</label>
                    <input id="judulPutTodo" type="text" class="w-full rounded-lg" placeholder="Meeting Project">
                  </div>
                  <div class="flex flex-col gap-3">
                    <p class="font-bold text-sky-900">Kategori : </p>
                    <span class="px-3 py-1 rounded-lg bg-sky-500 text-sky-50 font-bold flex justify-center items-center">Todo Activity</span>
                  </div>
                  <div class="flex flex-col gap-6">
                    <div class="flex flex-col gap-2 order-1 lg:order-2 ">
                      <label for="" class="text-sm text-sky-900 font-bold">Deadline</label>
                      <input type="datetime-local" id="customDatePutTodo" class="w-full border-sky-950 border rounded-lg cursor-pointer"\>
                    </div>
                  </div>
                </form>
              </div>
              <div class="md:w-1/2 gap-2 flex flex-col justify-center  md:pl-6">
                <form action="" class="flex flex-col gap-2 lg:gap-8 relative w-full h-full">
                  <div class="flex flex-col gap-2 w-full">
                    <label for="myTextarea" class="text-sm text-sky-900 font-bold">Deskripsi</label>
                    <textarea id="myTextareaPutTodo" name="myTextarea" class="rounded-xl px-2 py-1 w-full md:h-40 lg:h-36"></textarea>
                  </div>
                  <div class="flex gap-2">
                    <label for="" class="text-sm text-sky-900 font-bold">Notifikasi</label>
                      <div class="flex items-center">
                        <input type="checkbox" id="toggle" class="hidden">
                        <label for="toggle" class="cursor-pointer flex items-center">
                            <div class="w-10 h-4 rounded-full p-1 bg-sky-300 flex items-center">
                                <div id="indicator" class="w-4 h-4 bg-white  rounded-full transition-transform"></div>
                            </div>
                        </label>
                    </div>
                  </div>
                  
                </form>
                <button id="buttonSubmitPutTodo" class="bg-green-700 py-2 lg:w-full  text-white rounded-lg flex items-center justify-center  px-4" type="button">Simpan Tugas</button>
              </div>
              
            </div>
            <div class="modal-body" id="selectedDate"></div>
          </div>



          <div id="PutActivity" class="modal-content px-6 absolute hidden bg-sky-50 shadow-xl rounded-xl pb-6">
            <span id="closeActivity" class="material-symbols-outlined absolute right-[-5px] bg-red-500 rounded-full text-white cursor-pointer top-[-10px]">close</span>
            <div class="modal-header flex text-center justify-center pt-4">
              <h5 class="modal-title text-sky-900 text-lg font-bold border-black border-b-2 px-4" id="dateModalPutActivity">Edit Event</h5>
            </div>
            <div class="mt-6 md:flex lg:flex">
              <div class="md:w-1/2 md:pr-6">
                <form class="gap-2 w-full flex flex-col lg:gap-8">
                  <div class="flex gap-2 flex-col lg:gap-2">
                    <label for="" class="text-sm text-sky-900 font-bold">Judul Aktivitas</label>
                    <input id="judulPutActivity" type="text" class="w-full rounded-lg" placeholder="Meeting Project">
                  </div>
                  <div class="flex flex-col gap-3">
                    <p class="font-bold text-sky-900">Kategori : </p>
                    <span class="px-3 py-1 rounded-lg bg-sky-500 text-sky-50 font-bold flex justify-center items-center">Event Activity</span>
                  </div>
                  <div class="flex flex-col gap-6">
                    <div class="flex flex-col gap-2 order-1 lg:order-2 ">
                      <label for="" class="text-sm text-sky-900 font-bold">Deadline</label>
                      <input type="datetime-local" id="customDatePutActivity" class="w-full border-sky-950 border rounded-lg cursor-pointer"\>
                    </div>
                  </div>
                </form>
              </div>
              <div class="md:w-1/2 gap-2 flex flex-col justify-center  md:pl-6">
                <form action="" class="flex flex-col gap-2 lg:gap-8 relative w-full h-full">
                  <div class="flex flex-col gap-2 w-full">
                    <label for="myTextareaActivity" class="text-sm text-sky-900 font-bold">Deskripsi</label>
                    <textarea id="myTextareaPutActivity" name="myTextarea" class="rounded-xl px-2 py-1 w-full md:h-40 lg:h-40"></textarea>
                  </div>
                  <div class="flex gap-2">
                    <label for="" class="text-sm text-sky-900 font-bold">Notifikasi</label>
                      <div class="flex items-center">
                        <input type="checkbox" id="toggleActivity" class="hidden">
                        <label for="toggle" class="cursor-pointer flex items-center">
                            <div class="w-12 h-6 rounded-full p-1 bg-sky-300 flex items-center">
                                <div id="indicator" class="w-6 h-6 bg-white  rounded-full transition-transform"></div>
                            </div>
                        </label>
                    </div>
                  </div>
                  
                </form>
                <button id="buttonSubmitPutActivity" class="bg-green-700 py-2 lg:w-full  text-white font-bold rounded-lg flex items-center justify-center  px-4" type="button">Simpan Tugas</button>
              </div>
              
            </div>
            <div class="modal-body" id="selectedDate"></div>
          </div>




          <div class="modal w-[70%] z-20 fade bg-sky-50 shadow-lg md:w-[70%] lg:w-[40%] pb-12 rounded-2xl absolute hidden" id="modalEvent" tabindex="-1" role="dialog" aria-labelledby="dateModalLabel" aria-hidden="true">
            <span id="closeEvent" class="material-symbols-outlined absolute right-[-5px] bg-red-500 rounded-full text-white cursor-pointer top-[-10px]">close</span>
            <div class="modal-dialog relative border-black" role="document">
              <div class="modal-content px-6 w-full ">
                <div class="modal-header flex flex-col justify-center pt-4">
                  <h5 id='detailKegiatan' class="modal-title text-center text-sky-900 text-xl font-bold border-black border-b-2 px-4" id="dateModalLabel">Detail Tugas</h5>
                  <div class="flex justify-between py-2 items-center">
                    <div>
                      <button id="editEvent"><span class="material-symbols-outlined">edit_square</span></button>
                      <button id="deleteEvent"><span class="material-symbols-outlined">delete</span></button>
                    </div>
                    <h5 id="titleEvent" class="text-sky-900 text-2xl font-bold"></h5>
                    <div>
                      <button><span class="material-symbols-outlined">notifications</span></button>
                    </div>
                  </div>
                  <div class="flex flex-col border-black border-b gap-4">
                    <div id="bagianStatus" class="w-full flex items-center gap-2">
                      <h5 id="status" class="flex items-center font-bold text-sky-900 text-lg">Setatus :</h5>
                      <button id="btnstatus" class="px-3 py-1 rounded-lg font-bold"></button>
                    </div>  
                    <p id="todate" class="text-center"></p>
                  </div>
                  <div class="w-full">
                      <p id="deskripsiEvent" class="max-h-64 overflow-y-scroll">
                      </p>
                    </div>
                </div>
              </div>
              <div id="verifikasiDelete" class="px-2 py-2 w-[70%] left-[15%] hidden border my-auto absolute top-[40%]  rounded-xl border-sky-900 bg-sky-100">
                <div class="flex flex-col gap-2 justify-center items-center">
                  <h5 class="font-bold text-sky-900">Menghapus Tugas !!</h5>
                  <p class="text-sm">Apakah anda yakin ingin menghapus Tugas ini ?</p>
                  <div class="flex gap-2">
                    <button id="batalDelete" class="font-bold p-1 rounded-lg border border-sky-950">Batal</button>
                    <button id="deleteEventTodoList" class="bg-red-500 text-white font-bold p-1 rounded-lg">Hapus</button>
                  </div>
                </div>
              </div>
            </div>     
          </div>
          <div id="modalBackdrop" class="hidden fixed top-0 left-0 w-full h-full"></div>   




          <div class="modal w-[70%] z-20 fade bg-white md:w-[70%] lg:w-[40%] pb-12 rounded-2xl absolute hidden" id="modalEventAktivity" tabindex="-1" role="dialog" aria-labelledby="dateModalLabel" aria-hidden="true">
            <span id="closeEventAktivity" class="material-symbols-outlined absolute right-[-5px] bg-red-500 rounded-full text-white cursor-pointer top-[-10px]">close</span>
            <div class="modal-dialog relative border-black" role="document">
              <div class="modal-content px-6 w-full ">
                <div class="modal-header flex flex-col justify-center pt-4">
                  <h5 class="modal-title text-sky-900 text-lg font-bold border-black border-b-2 px-4" id="dateModalLabel">Detail Acara</h5>
                  <div class="flex justify-between py-2 items-center">
                    <h5 id="titleEventAktivity" class="text-sky-900 text-xl font-bold"></h5>
                  </div>
                  <div class="flex flex-col border-black border-b gap-4"> 
                    <p id="todateAktivity" class="text-center"></p>
                  </div>
                  <div class="w-full">
                      <p id="deskripsiEventAktivity" class="max-h-64 overflow-y-scroll">
                      </p>
                    </div>
                </div>
              </div>
              <div id="verifikasiDelete" class="px-2 py-2 w-[70%] left-[15%] hidden border my-auto absolute top-[40%]  rounded-xl border-sky-900 bg-sky-100">
                <div class="flex flex-col gap-2 justify-center items-center">
                  <h5 class="font-bold text-sky-900">Menghapus Tugas !!</h5>
                  <p class="text-sm">Apakah anda yakin ingin menghapus Tugas ini ?</p>
                  <div class="flex gap-2">
                    <button id="batalDelete" class="font-bold p-1 rounded-lg border border-sky-950">Batal</button>
                    <button id="deleteEventTodoList" class="bg-red-500 text-white font-bold p-1 rounded-lg">Hapus</button>
                  </div>
                </div>
              </div>
            </div>     
          </div>
          <div id="modalBackdropAktivity" class="hidden fixed top-0 left-0 w-full h-full"></div>   
        </div>
      </div>
    `;
  },

  async afterRender() {
    const calendarEl = document.getElementById('kalendar');
    const jwt = localStorage.getItem('token');
    if (jwt === null) {
      window.location.replace('./login.html#/masuk');
    }
    // End Custome Date

    // API Calendar

    function initializeCalendar(todo, activity) {
      const url = `https://be-2.gunz.my.id/${todo}`;
      const url2 = `https://be-2.gunz.my.id/${activity}`;

      axios
        .all([
          axios.get(url, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${jwt}`,
            },
          }),
          axios.get(url2, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${jwt}`,
            },
          }),
        ])
        .then(
          axios.spread((responseA, responseB) => {
            const Todos = responseA.data.todos;
            const formattedData = Todos.map((item) => ({
              title: item.title,
              start: item.deadline,
              end: item.deadline,
              extendedProps: {
                description: item.description,
                status: item.status,
                id: item.id,
              },
            }));
            const Todos2 = responseB.data.activities;
            const formattedData2 = Todos2.map((item) => ({
              title: item.title,
              start: item.deadline,
              end: item.deadline,
              extendedProps: {
                category: item.category,
                description: item.description,
                idEvent: item.id,
              },
            }));

            const calendar = new Calendar(calendarEl, {
              selectable: true,
              initialView: 'dayGridMonth',
              headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
              },

              events: [...formattedData, ...formattedData2],

              aspectRatio: 2,
              dateClick: handleDateClick,
              eventClick: handleEventClick,
            });

            calendar.render();
          }),
        );
    }

    // Menutup modal sebelumnya jika sudah ada yang aktif
    function closeActiveModal() {
      const activeModal = document.querySelector('.modal:not(.hidden)');
      const modal = document.getElementById('dateModal');
      const dahboard = document.getElementById('dashboard');
      const kalendar = document.getElementById('kalendar');
      if (activeModal && activeModal !== modal) {
        activeModal.classList.add('hidden');
        dahboard.classList.remove('blacked-out');
        kalendar.classList.add('bg-white');
        activeModal.classList.remove('bottom-3');
      }
    }

    function handleDateClick() {
      const modal = document.getElementById('dateModal');
      document.querySelector('.target').scrollIntoView({ behavior: 'smooth' });

      closeActiveModal();

      if (modal) {
        modal.classList.toggle('hidden');
        modal.classList.remove('bottom-3');
        const modalEvent = document.getElementById('modalEvent');
        const todomodal = document.getElementById('PutTodo');
        modalEvent.classList.add('hidden');
        todomodal.classList.add('hidden');
      }
    }

    const btnclose = document.getElementById('closeEvent');
    const btncloseevent = document.getElementById('close');

    btncloseevent.addEventListener('click', () => {
      const modal = document.getElementById('dateModal');
      const dahboard = document.getElementById('dashboard');
      const kalendar = document.getElementById('kalendar');
      modal.classList.add('hidden');
      dahboard.classList.remove('blacked-out');
      kalendar.classList.add('bg-white');
      modal.classList.add('bottom-3');
    });
    btnclose.addEventListener('click', () => {
      const modal = document.getElementById('dateModal');
      const dahboard = document.getElementById('dashboard');
      const kalendar = document.getElementById('kalendar');
      modal.classList.add('hidden');
      dahboard.classList.remove('blacked-out');
      kalendar.classList.add('bg-white');
      modal.classList.add('bottom-3');
    });

    // Menambahkan event listener untuk menutup modal jika klik di luar modal
    document.addEventListener('click', (event) => {
      const modal = document.getElementById('dateModal');
      const dahboard = document.getElementById('dashboard');
      const kalendar = document.getElementById('kalendar');
      const targetElement = event.target;

      if (modal && !modal.contains(targetElement)) {
        modal.classList.add('hidden');
        dahboard.classList.remove('blacked-out');
        kalendar.classList.add('bg-white');
        modal.classList.add('bottom-3');
      }
    });

    function handleEventClick(info) {
      const modalEvent = document.getElementById('modalEvent');
      const dahboard = document.getElementById('dashboard');
      const iconDelete = document.getElementById('deleteEvent');
      const editEventBtn = document.getElementById('editEvent');
      const todate = document.getElementById('todate');
      const verifikasiDelete = document.getElementById('verifikasiDelete');
      const titleEvent = document.getElementById('titleEvent');
      const detailKegiatan = document.getElementById('detailKegiatan');
      const bagianStatus = document.getElementById('bagianStatus');
      const setatus = document.getElementById('btnstatus');
      const deskripsiEvent = document.getElementById('deskripsiEvent');
      const modalBackdrop = document.getElementById('modalBackdrop');
      const batalDelete = document.getElementById('batalDelete');
      const PutTodo = document.getElementById('PutTodo');
      const PutActivity = document.getElementById('PutActivity');

      document.querySelector('.target').scrollIntoView({ behavior: 'smooth' });

      if (
        (info.event.extendedProps.status === 'menunggu')
        || (info.event.extendedProps.status === 'dikerjakan')
      ) {
        setatus.className = 'px-3 py-1 font-bold rounded-lg bg-sky-300 text-sky-900';
      }
      if (
        (info.event.extendedProps.status === 'telat')
        || (info.event.extendedProps.status === 'dikerjakan')
      ) {
        setatus.className = 'px-3 py-1 font-bold text-white bg-red-500 rounded-lg';
      }

      const ButtonDeleteEvent = document.getElementById('deleteEventTodoList');

      ButtonDeleteEvent.addEventListener('click', () => {
        deleteEvent(
          info.event.extendedProps.id,
          info.event.extendedProps.idEvent,
        );
        hapusDataEfek();
      });

      if (modalEvent) {
        modalEvent.classList.toggle('hidden');
        // dahboard.classList.add("blacked-out");
        // modalBackdrop.classList.remove("hidden");
        // kalendar.classList.remove("bg-white");
      }

      btnclose.addEventListener('click', () => {
        modalEvent.classList.add('hidden');
        dahboard.classList.remove('blacked-out');
        modalBackdrop.classList.add('hidden');
      });

      iconDelete.addEventListener('click', () => {
        verifikasiDelete.classList.toggle('hidden');
      });

      batalDelete.addEventListener('click', () => {
        verifikasiDelete.classList.add('hidden');
      });

      editEventBtn.addEventListener('click', () => {
        if (info.event.extendedProps.idEvent) {
          modalEvent.classList.add('hidden');
          // dahboard.classList.remove("blacked-out");
          modalBackdrop.classList.add('hidden');
          PutTodo.classList.add('hidden');
          PutActivity.classList.remove('hidden');
          // dahboard.classList.add("blacked-out");
          const closeActivity = document.getElementById('closeActivity');
          closeActivity.addEventListener('click', () => {
            PutActivity.classList.add('hidden');
            // dahboard.classList.remove("blacked-out");
          });
          handleEditActivity(info);
        } else {
          PutActivity.classList.add('hidden');
          modalEvent.classList.add('hidden');
          // dahboard.classList.remove("blacked-out");
          // modalBackdrop.classList.add("hidden");
          PutTodo.classList.remove('hidden');
          // dahboard.classList.add("blacked-out");
          const closeTodo = document.getElementById('closeTodo');
          closeTodo.addEventListener('click', () => {
            PutTodo.classList.add('hidden');
            // dahboard.classList.remove("blacked-out");
          });
          handleEditTodo(info);
        }
      });

      detailKegiatan.textContent = 'Detail Tugas';
      bagianStatus.classList.remove('hidden');
      titleEvent.innerHTML = info.event.title;
      setatus.innerHTML = info.event.extendedProps.status;
      deskripsiEvent.innerHTML = info.event.extendedProps.description;

      if (info.event.extendedProps.status === 'Penting') {
        setatus.style.backgroundColor = 'red';
        setatus.style.color = 'white';
      } else if (info.event.extendedProps.status === 'Dikerjakan') {
        setatus.style.backgroundColor = '#7DD3FC';
        setatus.style.color = '#0C4A6E';
      } else {
        setatus.style.backgroundColor = '';
      }

      todate.innerHTML = info.event.start.toLocaleString();

      if (info.event.extendedProps.idEvent) {
        detailKegiatan.textContent = 'Detail Acara';
        titleEvent.innerHTML = info.event.title;
        bagianStatus.classList.add('hidden');
        deskripsiEvent.innerHTML = info.event.extendedProps.description;
      }
    }

    function handleEditTodo(info) {
      const eventDateTime = new Date(info.event.start);
      const formattedDateTime = eventDateTime.toISOString().slice(0, 16);
      document.getElementById('judulPutTodo').value = info.event.title;
      document.getElementById('myTextareaPutTodo').value = info.event.extendedProps.description;
      document.getElementById('customDatePutTodo').value = formattedDateTime;

      const buttonSubmitPutTodo = document.getElementById(
        'buttonSubmitPutTodo',
      );

      buttonSubmitPutTodo.addEventListener('click', () => {
        TodoAPI(info);
        EfekPutTodo();
        // location.reload();
      });
    }

    function handleEditActivity(info) {
      const eventDateTime = new Date(info.event.start);
      const formattedDateTime = eventDateTime.toISOString().slice(0, 16);
      document.getElementById('judulPutActivity').value = info.event.title;
      document.getElementById('myTextareaPutActivity').value = info.event.extendedProps.description;
      document.getElementById('customDatePutActivity').value = formattedDateTime;

      const buttonSubmitPutActivity = document.getElementById(
        'buttonSubmitPutActivity',
      );

      buttonSubmitPutActivity.addEventListener('click', () => {
        APIactivity(info);
        EfekPutAcrivity();
      });
    }
    function APIactivity(info) {
      const newDataActivity = {
        title: document.getElementById('judulPutActivity').value,
        description: document.getElementById('myTextareaPutActivity').value,
        category: 'event',
        isNotificate: true,
        deadline: document.getElementById('customDatePutActivity').value,
      };
      const urlActivity = `https://be-2.gunz.my.id/activity/${info.event.extendedProps.idEvent}`;

      axios
        .put(urlActivity, newDataActivity, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
        });
    }

    function TodoAPI(info) {
      const newData = {
        title: document.getElementById('judulPutTodo').value,
        description: document.getElementById('myTextareaPutTodo').value,
        deadline: document.getElementById('customDatePutTodo').value,
        status: info.event.extendedProps.status,
      };
      const urlEvent = `https://be-2.gunz.my.id/todo/${info.event.extendedProps.id}`;

      axios
        .put(urlEvent, newData, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
        });
    }

    // Inisialisasi kalender
    initializeCalendar('todo', 'activity');
    // initializeCalendarActivity("activity");

    // End API Calendar

    // Event Toggle Notifikasi Btn
    const toggle = document.querySelectorAll('#toggle');
    const indicator = document.querySelectorAll('#indicator');
    toggle.forEach((toggles) => {
      toggles.addEventListener('change', () => {
        const isChecked = toggles.checked;
        indicator.forEach((e) => {
          e.style.transform = isChecked ? 'translateX(100%)' : 'translateX(0)';

          e.classList.toggle('on', isChecked);
        });
      });
    });
    // End Togle Notofikasi Btn

    // Event Btn Category

    const btnTask1 = document.getElementById('btnTaskPertama');
    const btnEvent2 = document.getElementById('btnEventKedua');
    const TodoTugas = document.getElementById('TodoTugas');
    const TodoEvent = document.getElementById('TodoEvent');

    btnTask1.addEventListener('click', () => {
      TodoTugas.classList.remove('hidden');
      TodoEvent.classList.add('hidden');
    });
    btnEvent2.addEventListener('click', () => {
      TodoTugas.classList.add('hidden');
      TodoEvent.classList.remove('hidden');
    });

    // End Btn Category

    const buttonSubmitAktivitas = document.getElementById(
      'buttonSubmitAktivitas',
    );
    buttonSubmitAktivitas.addEventListener('click', () => {
      addEvent();
      tambahDataEfekEvent();
    });
    const buttonSubmitTask = document.getElementById('buttonSubmitTask');

    buttonSubmitTask.addEventListener('click', () => {
      tambahDataEfekTask();
      addTask();
    });

    function addTask() {
      const judul = document.getElementById('judul').value;
      const deadline = document.getElementById('customDate').value;
      const deskripsi = document.getElementById('myTextarea').value;

      const newData = {
        title: judul,
        description: deskripsi,
        deadline,
        status: 'menunggu',
      };
      axios
        .post('https://be-2.gunz.my.id/todo', JSON.stringify(newData), {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
        });
    }

    function addEvent() {
      const judulEvent = document.getElementById('judulEvent').value;
      const deadlineEvent = document.getElementById('customDateEvent').value;
      const deskripsiEvent = document.getElementById('myTextareaEvent').value;

      const newData = {
        title: judulEvent,
        description: deskripsiEvent,
        category: 'event',
        isNotificate: 1,
        deadline: deadlineEvent,
      };
      axios
        .post('https://be-2.gunz.my.id/activity', JSON.stringify(newData), {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
        });
    }

    function deleteEvent(urlTodo, urlEvent) {
      const url = `https://be-2.gunz.my.id/todo/${urlTodo}`;
      const url2 = `https://be-2.gunz.my.id/activity/${urlEvent}`;

      axios
        .all([
          axios.delete(url, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${jwt}`,
            },
          }),
          axios.delete(url2, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${jwt}`,
            },
          }),
        ]);
    }

    function hapusDataEfek() {
      // Mengganti teks button menjadi "Loading..."
      document.getElementById('deleteEventTodoList').innerHTML = 'Loading...';

      // Menambahkan efek loading, bisa menggunakan spinner atau animasi lainnya
      // Di sini kita menggunakan setTimeout sebagai contoh efek loading selama 2 detik
      setTimeout(() => {
        // Setelah 2 detik, reload halaman
        window.location.reload();
      }, 2000);
    }
    function tambahDataEfekTask() {
      // Mengganti teks button menjadi "Loading..."
      document.getElementById('buttonSubmitTask').innerHTML = 'Loading...';

      // Menambahkan efek loading, bisa menggunakan spinner atau animasi lainnya
      // Di sini kita menggunakan setTimeout sebagai contoh efek loading selama 2 detik
      setTimeout(() => {
        // Setelah 2 detik, reload halaman
        window.location.reload();
      }, 2000);
    }
    function tambahDataEfekEvent() {
      // Mengganti teks button menjadi "Loading..."
      document.getElementById('buttonSubmitAktivitas').innerHTML = 'Loading...';

      // Menambahkan efek loading, bisa menggunakan spinner atau animasi lainnya
      // Di sini kita menggunakan setTimeout sebagai contoh efek loading selama 2 detik
      setTimeout(() => {
        // Setelah 2 detik, reload halaman
        window.location.reload();
      }, 2000);
    }
    function EfekPutAcrivity() {
      // Mengganti teks button menjadi "Loading..."
      document.getElementById('buttonSubmitPutActivity').innerHTML = 'Loading...';

      // Menambahkan efek loading, bisa menggunakan spinner atau animasi lainnya
      // Di sini kita menggunakan setTimeout sebagai contoh efek loading selama 2 detik
      setTimeout(() => {
        // Setelah 2 detik, reload halaman
        window.location.reload();
      }, 2000);
    }
    function EfekPutTodo() {
      // Mengganti teks button menjadi "Loading..."
      document.getElementById('buttonSubmitPutTodo').innerHTML = 'Loading...';

      // Menambahkan efek loading, bisa menggunakan spinner atau animasi lainnya
      // Di sini kita menggunakan setTimeout sebagai contoh efek loading selama 2 detik
      setTimeout(() => {
        // Setelah 2 detik, reload halaman
        window.location.reload();
      }, 2000);
    }
  },
};

export default Kalendar;
