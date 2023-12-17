/* eslint-disable no-shadow */
/* eslint-disable no-multi-assign */
/* eslint-disable max-len */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-alert */
/* eslint-disable no-new */
/* eslint-disable no-use-before-define */
import '../../../styles/index.css';
import axios from 'axios';
import { Modal } from 'flowbite';

const TodoList = {
  async render() {
    return `
        <div class="hidden w-full" id="empty-container">
          <div class="flex justify-end w-full">
            <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="gap-x-2 flex justify-center items-center text-center text-sky-100 bg-sky-900 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-base py-1 px-4 h-9 w-24" id="buttontambahempty"  type="button">
              <img src="./svg/plus.svg" class="w-5"/>
              Tugas
            </button>
          </div>
          <div class="flex flex-col items-center justify-center">
            <div class="w-full flex flex-col justify-center gap-4 items-center">
              <img src="./svg/kosong.svg" class=" w-[230px] md:w-[450px]"/>
              <div class="text-center ">
                <h2 class="text-sky-900 md:text-3xl text-sm font-bold">Tidak Ada Tugas atau Task yang perlu dikerjakan!</h2>
                <p class="text-sky-900 font-semibold text-xs md:text-lg">Silakan tambahkan Tugas atau Task Terlebih dahulu!</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class"" id="data-todo">
          <div class="flex justify-between border-sky-950 border-b-2 mb-10">
            <h1 class="flex flex-wrap py-3 text-2xl font-bold gap-x-4" >
              <p>Kemarin</p>
              <div class="flex flex-col text-xs font-semibold">
                <p>*Update status setiap pukul 00:00 WIB</p>
                <p>*Update status setiap penambahan Tugas selama 1 menit</p>
              </div>
            </h1>
            <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="gap-2 flex justify-center items-center text-center text-sky-100 bg-sky-900 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-base py-1 px-4 h-9 w-24" id="buttontambah"  type="button">
              <img src="./svg/plus.svg" class="w-5"/>
              Tugas
            </button>
          </div>

          <div class="flex justify-center" id="kemarin">
            <div class="hidden justify-start flex-wrap gap-16 w-full" id="containertodokemarin">
            </div>
            <img src="./svg/loading-nobg.svg" class=" w-12" id="loading4"></img>
          </div>

          <div class="flex border-sky-950 border-b-2 my-10">
            <h1 class="flex py-3 text-2xl font-bold" id="tanggal">Hari Ini</h1>
          </div>

          <div class="flex justify-center" id="hari-ini">
            <div class="hidden justify-start flex-wrap gap-16  w-full" id="containerhariini">
            </div>
            <img src="./svg/loading-nobg.svg" class=" w-12" id="loading"></img>
          </div>

          <div class="flex flex-row border-sky-950 border-b-2 my-10">
            <h1 class="flex flex-grow py-3 text-2xl font-bold" >Besok</h1>
          </div>
          <div class="flex gap-2 p-2 justify-center" id="besok">
            <div class="hidden justify-start flex-wrap gap-16 w-full " id="containerharibesok">
            </div>
            <img src="./svg/loading-nobg.svg" class=" w-12 text-center" id="loading2"></img>
          </div>

          <div class="flex justify-center text-center items-center border-sky-950 border-b-2 my-10">
            <h1 class="py-3 text-2xl font-bold" >Semua Todo List</h1>
          </div>
          <div class="flex gap-2 p-2 justify-center">
            <div class="hidden justify-start flex-wrap gap-16 w-full " id="containergetall">
            </div>
            <img src="./svg/loading-nobg.svg" class=" w-12 text-center" id="loading3"></img>
          </div>
        </div>
      
          <!-- Main modal -->
          <div id="default-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div class="relative w-full max-w-2xl max-h-full">
                  <!-- Modal content -->
                  <div class="relative bg-sky-100 rounded-lg shadow">
                      <!-- Modal header -->
                      <div class="flex items-center text-center justify-between p-4 border-b border-sky-900 rounded-t ">
                          <h3 class="text-xl font-semibold text-sky-900 text-center">
                              Menambahkan penjadwalan tugas
                          </h3>
                          <button type="button" id="close-btn-nambah" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
                              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                              </svg>
                              <span class="sr-only">Close modal</span>
                          </button>
                      </div>
                      <!-- Modal body -->
                      <div class="p-6 space-y-6">
                        <form id="Formtambahdata" class="gap-2 lg:gap-8">
                          <div class="gap-2 w-full flex flex-col md:flex-row flex-wrap md:flex-nowrap md:justify-around lg:gap-8">
                            <div class="flex flex-col gap-3">
                              <div class="flex gap-2 flex-col lg:gap-2">
                                <label for="" class="text-sm text-sky-900 font-bold">Judul Tugas</label>
                                <input id="judultugas" type="text" class="text-sm font-semibold w-full rounded-lg" placeholder="Meeting Project" required>
                              </div>
                              <div class="flex flex-col gap-6">
                                <div class="flex flex-col gap-2 order-1 lg:order-2 ">
                                  <label for="" class="text-sm text-sky-900 font-bold">Deadline</label>
                                  <div class="relative max-w-sm z-10" id="btn-deadline">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                      </svg>
                                    </div>
                                    <input required type="date" id="inputdeadline" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="Pilih Tanggal">
                                  </div>
                                </div>
                                <div class="flex flex-col gap-2 order-2 lg:order-1 lg:w-32">
                                  <label for="" class="text-sm text-sky-900 font-bold">Waktu</label>
                                  <input required type="time" id="timetodo" class="border border-sky-950 rounded-lg cursor-pointer" placeholder="">
                                </div>
                              </div>
                            </div>
                            <div class="flex flex-col gap-2">
                              <div class="flex flex-col gap-2 w-full">
                                <label for="myTextarea" class="text-sm text-sky-900 font-bold">Deskripsi</label>
                                <textarea required id="deskripsitodo" name="myTextarea" placeholder="Maks 500 Karakter" class="mt-2 font-semibold text-sm rounded-xl px-2 py-1 w-full h-44"></textarea>
                              </div>
                              <div>
                                <label for="myTextarea" class="text-sm text-sky-900 font-bold">Notifikasi</label>
                                <div class="flex items-center">
                                  <input type="checkbox" id="toggle" class="hidden">
                                  <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" >
                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- Modal footer -->
                          <div class="flex items-center justify-end p-3 space-x-2 border-t border-sky-900 rounded-b mt-10 ">
                            <div class="flex flex-col">
                            <div class="flex justify-center my-2 ">
                              <p class="max-w-xs text-sm font-semibold text-center error-message text-rose-700" id="messageinput"></p>
                            </div>
                            <button type="submit" class="text-white inline-flex justify-center   items-center bg-sky-800 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-48 h-10 " id="kirimtodo">
                              <img id="loadingtambah" src="./svg/loading-nobg.svg" class=" hidden w-5"></img>
                              <div class="flex gap-x-1 " id="btn-text-tambah">
                                <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                <p class="text-base font-semibold text-center">Tambah Tugas</p>
                              </div>
                            </button>
                            </div>
                          </div>
                        </form>
                      </div>
                  </div>
              </div>
          `;
  },

  async afterRender() {
    const baseUrl = 'https://be-2.gunz.my.id';
    const token = localStorage.getItem('token');
    if (token === null) {
      window.location.replace('./login.html#/masuk');
    }
    getalltodo();
    gettodotoday();
    gettodobesok();
    getallyesterday();

    const hariini = document.getElementById('hari-ini');
    const besok = document.getElementById('besok');
    const kemarin = document.getElementById('kemarin');
    const containertodokemarin = document.getElementById('containertodokemarin');
    const containerhariini = document.getElementById('containerhariini');
    const containerharibesok = document.getElementById('containerharibesok');

    const containergetall = document.getElementById('containergetall');

    const emptyContainer = document.getElementById('empty-container');
    const Containertodo = document.getElementById('data-todo');

    const closetambah = document.getElementById('close-btn-nambah');
    const closetambahempty = document.getElementById('close-btn-nambah');
    const buttontambah = document.getElementById('buttontambah');
    const buttontambahempty = document.getElementById('buttontambahempty');

    const loading = document.getElementById('loading');
    const loading2 = document.getElementById('loading2');
    const loading3 = document.getElementById('loading3');
    const loading4 = document.getElementById('loading4');

    const optionsempty = {
      placement: 'center',
      backdrop: 'dynamic',
      backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
      closable: true,
    };

    const targetempty = document.getElementById('default-modal');
    const modalempty = new Modal(targetempty, optionsempty);

    buttontambahempty.addEventListener('click', (e) => {
      e.preventDefault();
      modalempty.show();
    });
    closetambahempty.addEventListener('click', (e) => {
      e.preventDefault();
      modalempty.hide();
    });

    async function getalltodo() {
      const urlgettodo = `${baseUrl}/todo`;
      axios.get(urlgettodo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        const datatodolist = response.data.todos;
        if (response.data.message === 'data kosong') {
          emptyContainer.classList.remove('hidden');
          Containertodo.classList.add('hidden');
        }
        setTimeout(time, 2000);
        function time() {
          loading3.classList.add('hidden');
          containergetall.classList.remove('hidden');
          containergetall.classList.add('flex');
          datatodolist.forEach((todos) => {
            const dateString = todos.deadline;
            const dateObject = new Date(dateString);
            const hours = dateObject.getHours();
            const minutes = dateObject.getMinutes();
            const options = {
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            };
            const formattedHours = hours < 10 ? `0${hours}` : hours;
            const formatedminutes = minutes < 10 ? `0${minutes}` : minutes;
            const timedeadline = `${formattedHours}:${formatedminutes}`;
            const tanggaldeadline = dateObject.toLocaleDateString('en-CA');
            const dayName = dateObject.toLocaleDateString('id-ID', options);
            const deadline = dayName;
            containergetall.innerHTML += `
              <div class=" max-w-xs md:max-w-sm w-full p-6 border border-sky-900 rounded-lg shadow" id="kartu revisi">
                <div class="flex flex-col gap-2" >
                  <div class="flex gap-3 justify-between">
                    <button id="editopendikerjakan${todos.id}" class="editEvent">
                      <svg class="w-5 h-5  text-sky-900" aria-hidden="true" id="edit "xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
                        <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
                      </svg>
                    </button>
                    <h2 class="col-span-3 row-start-3 px-6 text-sky-950 text-xl justify-center items-center font-bold text-center" id="judulTodo" data-title="${todos.title}">${todos.title}</h2>
                    <button  id="deleteopenall${todos.id}" data-modal-target="popup-modal" data-modal-toggle="popup-modal" type="button">
                      <svg class="w-5 md:h-5  text-sky-900" aria-hidden="true" id="hapus "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                      </svg>
                    </button> 
                  </div>
                  <div class="flex py-4 flex-wrap gap-3">
                    <h3 class="text-sky-950 text-md font-bold">Status:</h3>
                    <span  id="span-dikerjakan${todos.id}" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100  border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Dikerjakan</span>
                    <span  id="span-menunggu${todos.id}" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100  border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Menunggu</span>
                    <span  id="span-selesai${todos.id}" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100  border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Selesai</span>
                    <span  id="span-revisi${todos.id}" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100  border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Revisi</span>
                    <span  id="span-telat${todos.id}" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100  border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Telat</span>
                  </div>
                  <div class="flex justify-between gap-2 py-2 border-sky-950 border-b-2">
                    <h2 class="flex text-sky-950 text-sm font-semibold" id="deadline-tanggal">
                    ${deadline}
                    </h2>
                    <h2 id="Time" class="text-sm text-sky-950 font-semibold">
                      ${timedeadline}
                    </h2> 
                  </div>
                  <div class="p-1">
                    <p id="deskripsi"> ${todos.description} </p>
                  </div>
                </div>
              </div>

              <div id="targetdeleteall${todos.id}" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <div class="relative bg-sky-100 rounded-lg shadow">
                        <button type="button" id="btnclosedeleteall${todos.id}" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="p-4 text-center md:p-5" id="">
                          <svg class="mx-auto mb-4 text-rose-800 md:w-12 md:h-12 w-9 h-9" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
                            <path
                              d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z" />
                            <path
                              d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                          </svg>
                          <h3 class="mb-5 text-base font-normal md:text-lg text-sky-900 ">Apakah kamu yakin ingin menghapus Todo ini?
                          </h3>
                            <div class="flex justify-center my-2 ">
                              <p class="max-w-xs text-sm font-semibold text-center error-message text-rose-700" id="messageinputdeleteall${todos.id}"></p>
                            </div>
                          <button id="iyadeleteall${todos.id}" data-modal-hide="popup-modal" id="deleteuser" type="button"
                            class="text-sky-100 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs md:text-sm inline-flex items-center md:px-5 md:py-2.5 px-3 py-2 text-center me-2 justify-center w-28 md:w-36">
                            <P id="textdeleteall${todos.id}">Iya, saya yakin</P>
                            <img id="loadingdeleteall${todos.id}" src="./svg/loading-nobg.svg" class=" hidden w-[15px]"></img>
                          </button>
                          <button id="btnbatalall${todos.id}"   data-modal-hide="popup-modal" type="button"
                            class="text-sky-100 bg-sky-900 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-sky-200 text-xs md:text-sm font-medium md:px-5 md:py-2.5 px-3 py-2 focus:z-10">Tidak,
                            Batal</button>
                        </div>
                    </div>
                </div>
              </div>


              <!-- popup edit -->
            <div id="targeteditdikerjakan${todos.id}" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div class="relative w-full max-w-2xl max-h-full">
                  <!-- Modal content -->
                  <div class="relative bg-sky-100 rounded-lg shadow">
                      <!-- Modal header -->
                      <div class="flex items-center text-center justify-between p-4 border-b border-sky-900 rounded-t ">
                          <h3 class="text-xl font-semibold text-sky-900 text-center">
                              Edit Tugas
                          </h3>
                          <button type="button" id="editclosedikerjakan${todos.id}" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
                              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                              </svg>
                              <span class="sr-only">Close modal</span>
                          </button>
                      </div>
                      <!-- Modal body -->
                      <div class="p-6 space-y-6">
                        <form id="Formtambahdataedit${todos.id}" class="gap-2 lg:gap-8">
                          <div class="gap-2 w-full flex flex-col md:flex-row flex-wrap md:flex-nowrap md:justify-around lg:gap-8">
                            <div class="flex flex-col gap-3">
                              <div class="flex gap-2 flex-col lg:gap-2">
                                <label for="" class="text-sm text-sky-900 font-bold">Judul Tugas</label>
                                <input required id="judultugasdikerjakan${todos.id}" type="text" class="text-sm font-semibold w-full rounded-lg" placeholder="Meeting Project" required>
                              </div>
                              <div class="flex py-4 flex-wrap gap-3">
                                <h3 class="text-sky-950 text-md font-bold">Status:</h3>
                                <button type="button" id="btn-dikerjakan${todos.id}"  class=" btn-edit-status text-sky-900 bg-sky-100 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Dikerjakan</button>
                                <button type="button" id="btn-menunggu${todos.id}" class=" btn-edit-status text-sky-900 bg-sky-100 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Menunggu</button>
                                <button type="button" id="btn-selesai${todos.id}" class=" btn-edit-status text-sky-900 bg-sky-100 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Selesai</button>
                                <button type="button" id="btn-revisi${todos.id}"  class=" btn-edit-status text-sky-900 bg-sky-100 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Revisi</button>
                                <button type="button" id="btn-telat${todos.id}"  class=" btn-edit-status text-sky-900 bg-sky-100 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Telat</button>
                              </div>
                              <div class="flex flex-col gap-6">
                                <div class="flex flex-col gap-2 order-1 lg:order-2 ">
                                  <label for="" class="text-sm text-sky-900 font-bold">Deadline</label>
                                  <div class="relative max-w-sm z-10" id="btn-deadline">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                      </svg>
                                    </div>
                                    <input required type="date" id="inputtanggaldikerjakan${todos.id}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="Pilih Tanggal" required>
                                  </div>
                                </div>
                                <div class="flex flex-col gap-2 order-2 lg:order-1 lg:w-32">
                                  <label for="" class="text-sm text-sky-900 font-bold">Waktu</label>
                                  <input required type="time" id="timetododikerjakan${todos.id}" class="border border-sky-950 rounded-lg cursor-pointer" placeholder="" required>
                                </div>
                              </div>
                            </div>
                            <div class="flex flex-col gap-2 ">
                              <div class="flex flex-col gap-2 w-full">
                                <label for="myTextarea" class="text-sm text-sky-900 font-bold">Deskripsi</label>
                                <textarea required id="deskripsitododikerjakan${todos.id}" name="myTextarea" placeholder="Maks 500 Karakter" class="mt-2 font-semibold text-sm rounded-xl px-2 py-1 w-full h-44"></textarea>
                              </div>
                              <div class="">
                                <label for="myTextarea" class="text-sm text-sky-900 font-bold">Notifikasi</label>
                                <div class="flex items-center">
                                  <input  type="checkbox" id="toggle" class="hidden">
                                  <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" >
                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- Modal footer -->
                          <div class="flex items-center justify-end p-3 space-x-2 border-t border-sky-900 rounded-b mt-10 ">
                            <div class="flex flex-col">
                            <div class="flex justify-center my-2 ">
                              <p class="max-w-xs text-sm font-semibold text-center error-message text-rose-700" id="messageinputedit${todos.id}"></p>
                            </div>
                            <button type="submit" id="kirimeditdikerjakan${todos.id}" class="text-white inline-flex justify-center   items-center bg-sky-800 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-48 h-10 " id="kirimtodo">
                              <img id="loadingedit${todos.id}" src="./svg/loading-nobg.svg" class=" hidden w-5"></img>
                                <div class="flex gap-x-1 " id="btntextedit${todos.id}">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="me-1 -ms-1 w-5 h-5" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
                                    <path d="M11 2H9v3h2z"/>
                                    <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
                                  </svg>
                                  <p class="text-base font-semibold text-center" >Edit Tugas</p>
                                </div>
                            </button>
                            </div>
                          </div>
                        </form>
                      </div>
                  </div>
              </div>
            `;
            const spanstatusdikerjakan = document.getElementById(`span-dikerjakan${todos.id}`);
            const spanstatusmenunggu = document.getElementById(`span-menunggu${todos.id}`);
            const spanstatusselesai = document.getElementById(`span-selesai${todos.id}`);
            const spanstatusrevisi = document.getElementById(`span-revisi${todos.id}`);
            const spanstatustelat = document.getElementById(`span-telat${todos.id}`);
            if (todos.status === 'dikerjakan') {
              spanstatusdikerjakan.classList.add('bg-sky-300');
              spanstatusdikerjakan.classList.remove('bg-sky-100');
              spanstatustelat.classList.add('hidden');
              spanstatusrevisi.classList.add('hidden');
            } else if (todos.status === 'menunggu') {
              spanstatusmenunggu.classList.add('bg-sky-300');
              spanstatusmenunggu.classList.remove('bg-sky-100');
              spanstatustelat.classList.add('hidden');
              spanstatusrevisi.classList.add('hidden');
            } else if (todos.status === 'revisi') {
              spanstatusdikerjakan.classList.add('bg-sky-300');
              spanstatusdikerjakan.classList.remove('bg-sky-100');
              spanstatusrevisi.classList.add('bg-rose-800');
              spanstatusrevisi.classList.remove('bg-sky-100');
              spanstatusrevisi.classList.add('text-sky-100');
              spanstatusrevisi.classList.remove('text-sky-900');
              spanstatusmenunggu.classList.add('hidden');
              spanstatustelat.classList.add('hidden');
            } else if (todos.status === 'selesai') {
              spanstatusdikerjakan.classList.add('hidden');
              spanstatusmenunggu.classList.add('hidden');
              spanstatusselesai.classList.add('bg-green-700');
              spanstatusselesai.classList.remove('bg-sky-100');
              spanstatusselesai.classList.add('text-sky-100');
              spanstatusselesai.classList.remove('text-sky-900');
              spanstatustelat.classList.add('hidden');
            } else if (todos.status === 'telat') {
              spanstatusdikerjakan.classList.add('bg-sky-300');
              spanstatusdikerjakan.classList.remove('bg-sky-100');
              spanstatustelat.classList.add('bg-rose-800');
              spanstatustelat.classList.remove('bg-sky-100');
              spanstatustelat.classList.add('text-sky-100');
              spanstatustelat.classList.remove('text-sky-900');
              spanstatusrevisi.classList.add('hidden');
              spanstatusmenunggu.classList.add('hidden');
            }
            setTimeout(modaldeleteall, 1000);
            function modaldeleteall() {
              const btndeleteall = document.getElementById(`deleteopenall${todos.id}`);
              const targetbtnall = document.getElementById(`targetdeleteall${todos.id}`);
              const closebtnall = document.getElementById(`btnclosedeleteall${todos.id}`);
              const iyadeletebtnall = document.getElementById(`iyadeleteall${todos.id}`);
              const batalbtnall = document.getElementById(`btnbatalall${todos.id}`);
              const messageinputdeleteall = document.getElementById(`messageinputdeleteall${todos.id}`);
              const loadingdeleteall = document.getElementById(`loadingdeleteall${todos.id}`);
              const textdeleteall = document.getElementById(`textdeleteall${todos.id}`);

              const optionsdeleteall = {
                placement: 'center',
                backdrop: 'dynamic',
                backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
                closable: true,
              };

              const modaldeleteall = new Modal(targetbtnall, optionsdeleteall);
              btndeleteall.addEventListener('click', () => {
                modaldeleteall.show();
              });
              closebtnall.addEventListener('click', () => {
                modaldeleteall.hide();
              });
              batalbtnall.addEventListener('click', () => {
                modaldeleteall.hide();
              });
              iyadeletebtnall.addEventListener('click', () => {
                loadingdeleteall.classList.remove('hidden');
                textdeleteall.classList.add('hidden');
                setTimeout(() => {
                  deletetodo(todos.id, messageinputdeleteall, loadingdeleteall, textdeleteall, modaldeleteall);
                }, 2000);
              });
            }
            setTimeout(modaleditdikerjakan, 1000);
            function modaleditdikerjakan() {
              const Formtambahdataedit = document.getElementById(`Formtambahdataedit${todos.id}`);
              const editopendikerjakan = document.getElementById(`editopendikerjakan${todos.id}`);
              const targeteditdikerjakan = document.getElementById(`targeteditdikerjakan${todos.id}`);
              const closeeditdikerjakan = document.getElementById(`editclosedikerjakan${todos.id}`);
              const messagedata = document.getElementById(`messageinputedit${todos.id}`);
              const loadingedit = document.getElementById(`loadingedit${todos.id}`);
              const btntextedit = document.getElementById(`btntextedit${todos.id}`);

              // button change status
              const btnstatusdikerjakan = document.getElementById(`btn-dikerjakan${todos.id}`);
              const btnstatusmenunggu = document.getElementById(`btn-menunggu${todos.id}`);
              const btnstatusrevisi = document.getElementById(`btn-revisi${todos.id}`);
              const btnstatusselesai = document.getElementById(`btn-selesai${todos.id}`);
              const btnstatustelat = document.getElementById(`btn-telat${todos.id}`);

              const judultugasdikerjakan = document.getElementById(`judultugasdikerjakan${todos.id}`);
              judultugasdikerjakan.value = `${todos.title}`;
              const inputtanggaldikerjakan = document.getElementById(`inputtanggaldikerjakan${todos.id}`);
              inputtanggaldikerjakan.value = tanggaldeadline;
              const timetododikerjakan = document.getElementById(`timetododikerjakan${todos.id}`);
              timetododikerjakan.value = timedeadline;
              const deskripsitododikerjakan = document.getElementById(`deskripsitododikerjakan${todos.id}`);
              deskripsitododikerjakan.value = `${todos.description}`;
              let editstatus = '';
              const optionsedit = {
                placement: 'center',
                backdrop: 'dynamic',
                backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
                closable: true,
              };

              const modaledit = new Modal(targeteditdikerjakan, optionsedit);
              editopendikerjakan.addEventListener('click', (e) => {
                e.preventDefault();
                modaledit.show();
              });
              closeeditdikerjakan.addEventListener('click', (e) => {
                e.preventDefault();
                modaledit.hide();
              });

              const allbuttonstatus = document.querySelectorAll('.btn-edit-status');

              allbuttonstatus.forEach((button) => {
                button.addEventListener('click', (e) => {
                  e.preventDefault();
                  editstatus = e.target.innerHTML;

                  allbuttonstatus.forEach((btn) => {
                    btn.classList.remove('bg-sky-300');
                    btn.classList.add('bg-sky-100');
                  });

                  e.target.classList.remove('bg-sky-100');
                  e.target.classList.add('bg-sky-300');
                });
              });

              if (todos.status === 'dikerjakan') {
                btnstatusdikerjakan.classList.add('bg-sky-300');
                btnstatusdikerjakan.classList.remove('bg-sky-100');
                btnstatustelat.classList.add('hidden');
                btnstatusrevisi.classList.add('hidden');
                editstatus = 'dikerjakan';
              } else if (todos.status === 'menunggu') {
                btnstatusmenunggu.classList.add('bg-sky-300');
                btnstatusmenunggu.classList.remove('bg-sky-100');
                btnstatustelat.classList.add('hidden');
                btnstatusrevisi.classList.add('hidden');
                editstatus = 'menunggu';
              } else if (todos.status === 'revisi') {
                btnstatusrevisi.classList.add('bg-sky-300');
                btnstatusrevisi.classList.remove('bg-sky-100');
                btnstatustelat.classList.add('hidden');
                btnstatusdikerjakan.classList.add('hidden');
                btnstatusmenunggu.classList.add('hidden');
                editstatus = 'revisi';
              } else if (todos.status === 'selesai') {
                btnstatusselesai.classList.add('bg-sky-300');
                btnstatusselesai.classList.remove('bg-sky-100');
                btnstatustelat.classList.add('hidden');
                btnstatusmenunggu.classList.add('hidden');
                btnstatusdikerjakan.classList.add('hidden');
                editstatus = 'selesai';
              } else if (todos.status === 'telat') {
                btnstatustelat.classList.add('bg-sky-300');
                btnstatustelat.classList.remove('bg-sky-100');
                btnstatusdikerjakan.classList.add('hidden');
                btnstatusmenunggu.classList.add('hidden');
                btnstatusrevisi.classList.add('hidden');
                btnstatustelat.setAttribute('disabled', true);
                editstatus = 'telat';
              }

              Formtambahdataedit.addEventListener('submit', (e) => {
                e.preventDefault();
                loadingedit.classList.remove('hidden');
                btntextedit.classList.add('hidden');

                setTimeout(() => {
                  editdetaildatatodo(todos.id, judultugasdikerjakan, inputtanggaldikerjakan, timetododikerjakan, deskripsitododikerjakan, editstatus, messagedata, loadingedit, btntextedit, modaledit);
                }, 2000);
              });
            }
          });
        }
      }).catch(() => { });
    }

    async function gettodotoday() {
      const urlgettoday = `${baseUrl}/todo/now`;
      axios.get(urlgettoday, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        setTimeout(time, 2000);
        function time() {
          containerhariini.classList.remove('hidden');
          containerhariini.classList.add('flex');
          if (response.data.message === 'data kosong') {
            hariini.innerHTML = 'Tidak ada tugas yang deadlinenya hari ini';
            hariini.classList.add('text-base');
            hariini.classList.add('font-semibold');
            hariini.classList.add('text-rose-800');
            hariini.classList.add('pt-10');
          }
          loading.classList.add('hidden');
          const todotoday = response.data.todos;
          todotoday.forEach((todos) => {
            const dateString = todos.deadline;
            const dateObject = new Date(dateString);
            const options = {
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            };
            const hours = dateObject.getHours();
            const minutes = dateObject.getMinutes();
            const formattedHours = hours < 10 ? `0${hours}` : hours;
            const formatedminutes = minutes < 10 ? `0${minutes}` : minutes;
            const timedeadline = `${formattedHours}:${formatedminutes}`;
            const tanggaldeadline = dateObject.toLocaleDateString('en-CA');
            const dayName = dateObject.toLocaleDateString('id-ID', options);
            const deadline = dayName;
            containerhariini.innerHTML += `
            <div class=" max-w-xs md:max-w-sm w-full p-6 border border-sky-900 rounded-lg shadow" id="kartu revisi">
              <div class="flex flex-col px-4 gap-2" >
                <div class="flex gap-3 justify-between">
                  <button id="editbtn${todos.id}" class="editEvent" data-todo-id="${todos.id}">
                    <svg class="w-5 h-5  text-sky-900" aria-hidden="true" id="edit "xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                      <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
                      <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
                    </svg>
                  </button>
                  <h2 class="col-span-3 row-start-3 px-6 text-sky-950 text-xl justify-center items-center font-bold text-center" id="judulTodo" data-title="${todos.title}">${todos.title}</h2>
                  <button id="deletebtnhariini${todos.id}" class="deleteEvent" data-todo-id="${todos.id}">
                    <svg class="w-5 md:h-5  text-sky-900" aria-hidden="true" id="hapus "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                    </svg>
                  </button> 
                </div>
                <div class="flex py-4 flex-wrap gap-3">
                  <h3 class="text-sky-950 text-md font-bold">Status:</h3>
                    <span id="btn-dikerjakanspan${todos.id}" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100  border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Dikerjakan</span>
                    <span id="btn-menungguspan${todos.id}" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100  border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Menunggu</span>
                    <span id="btn-selesaispan${todos.id}" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100  border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Selesai</span>
                    <span id="btn-revisispan${todos.id}" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100  border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Revisi</span>
                    <span id="btn-telatspan${todos.id}" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100  border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Telat</span>
                </div>
                <div class="flex flex-row gap-2 py-2 border-sky-950 border-b-2">
                  <h2 class="flex flex-grow text-sky-950 text font-semibold" id="deadline-tanggal" data-deadline="${deadline}">
                    ${deadline}
                  </h2>
                  <h2 id="Time" class="text-sm text-sky-950 font-semibold">
                      ${timedeadline}
                  </h2> 
                </div>
                <div class="p-1">
                  <p class=" flex flex-wrap text-base" > ${todos.description} </p>
                </div>
              </div>
            </div>

            <div id="targetdeletehariini${todos.id}" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <div class="relative bg-white rounded-lg shadow ">
                        <button type="button" id="btnclosedeletehariini${todos.id}" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="p-4 text-center md:p-5" id="">
                          <svg class="mx-auto mb-4 text-rose-800 md:w-12 md:h-12 w-9 h-9" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
                            <path
                              d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z" />
                            <path
                              d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                          </svg>
                            <h3 class="mb-5 text-base font-normal md:text-lg text-sky-900 ">Apakah kamu yakin ingin menghapus Todo ini?
                          </h3>
                          <div class="flex justify-center my-2 ">
                            <p class="max-w-xs text-sm font-semibold text-center error-message text-rose-700" id="messageinputdeletehariini${todos.id}"></p>
                          </div>
                          <button id="iyadeletehariini${todos.id}" data-modal-hide="popup-modal" id="deleteuser" type="button"
                            class="text-sky-100 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs md:text-sm inline-flex items-center md:px-5 md:py-2.5 px-3 py-2 text-center me-2 justify-center w-28 md:w-36">
                            <P id="textdeletehariini${todos.id}">Iya, saya yakin</P>
                            <img id="loadingdeletehariini${todos.id}" src="./svg/loading-nobg.svg" class=" hidden  w-[15px]"></img>
                          </button>
                          <button id="btnbatalhariini${todos.id}" data-modal-hide="popup-modal" type="button"
                            class="text-sky-100 bg-sky-900 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-sky-200 text-xs md:text-sm font-medium md:px-5 md:py-2.5 px-3 py-2 focus:z-10">Tidak,
                            Batal</button>
                        </div>
                    </div>
                </div>
              </div>

              <!-- popup edit -->
            <div id="targetedithariini${todos.id}" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div class="relative w-full max-w-2xl max-h-full">
                  <!-- Modal content -->
                  <div class="relative bg-sky-100 rounded-lg shadow">
                      <!-- Modal header -->
                      <div class="flex items-center text-center justify-between p-4 border-b border-sky-900 rounded-t ">
                          <h3 class="text-xl font-semibold text-sky-900 text-center">
                              Edit Tugas
                          </h3>
                          <button type="button" id="editclosehariini${todos.id}" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
                              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                              </svg>
                              <span class="sr-only">Close modal</span>
                          </button>
                      </div>
                      <!-- Modal body -->
                      <div class="p-6 space-y-6">
                        <form id="Formtambahdataedithariini${todos.id}" class="gap-2 lg:gap-8">
                          <div class="gap-2 w-full flex flex-col md:flex-row flex-wrap md:flex-nowrap md:justify-around lg:gap-8">
                            <div class="flex flex-col gap-3">
                              <div class="flex gap-2 flex-col lg:gap-2">
                                <label for="" class="text-sm text-sky-900 font-bold">Judul Tugas</label>
                                <input required id="judultugashariini${todos.id}" type="text" class="text-sm font-semibold w-full rounded-lg" placeholder="Meeting Project">
                              </div>
                              <div class="flex py-4 flex-wrap gap-3">
                                <h3 class="text-sky-950 text-md font-bold">Status:</h3>
                                <button type="button" id="btn-dikerjakan-today${todos.id}"  class=" btn-edit-status-today text-sky-900 bg-sky-100 hover:bg-sky-200 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Dikerjakan</button>
                                <button type="button" id="btn-menunggu-today${todos.id}" class=" btn-edit-status-today text-sky-900 bg-sky-100 hover:bg-sky-200 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Menunggu</button>
                                <button type="button" id="btn-selesai-today${todos.id}" class=" btn-edit-status-today text-sky-900 bg-sky-100 hover:bg-sky-200 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Selesai</button>
                                <button type="button" id="btn-revisi-today${todos.id}"  class=" btn-edit-status-today text-sky-900 bg-sky-100 hover:bg-sky-200 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Revisi</button>
                                <button type="button" id="btn-telat-today${todos.id}"  class=" btn-edit-status-today text-sky-900 bg-sky-100 hover:bg-sky-200 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">telat</button>
                              </div>
                              <div class="flex flex-col gap-6">
                                <div class="flex flex-col gap-2 order-1 lg:order-2 ">
                                  <label for="" class="text-sm text-sky-900 font-bold">Deadline</label>
                                  <div class="relative max-w-sm z-10" id="btn-deadline">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                      </svg>
                                    </div>
                                    <input required type="date" id="inputtanggalhariini${todos.id}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="Pilih Tanggal">
                                  </div>
                                </div>
                                <div class="flex flex-col gap-2 order-2 lg:order-1 lg:w-32">
                                  <label for="" class="text-sm text-sky-900 font-bold">Waktu</label>
                                  <input required type="time" id="timetodohariini${todos.id}" class="border border-sky-950 rounded-lg cursor-pointer" placeholder="">
                                </div>
                              </div>
                            </div>
                            <div class="flex flex-col gap-2">
                              <div class="flex flex-col gap-2 w-full">
                                <label for="myTextarea" class="text-sm text-sky-900 font-bold">Deskripsi</label>
                                <textarea required id="deskripsitodohariini${todos.id}" name="myTextarea" placeholder="Maks 500 Karakter" class="mt-2 font-semibold text-sm rounded-xl px-2 py-1 w-full h-44 "></textarea>
                              </div>
                              <div>
                                <label for="myTextarea" class="text-sm text-sky-900 font-bold">Notifikasi</label>
                                <div class="flex items-center">
                                  <input type="checkbox" id="toggle" class="hidden">
                                  <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" >
                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- Modal footer -->
                          <div class="flex items-center justify-end p-3 space-x-2 border-t border-sky-900 rounded-b mt-10 ">
                            <div class="flex flex-col">
                            <div class="flex justify-center my-2 ">
                              <p class="max-w-xs text-sm font-semibold text-center error-message text-rose-700" id="messageinputhariini${todos.id}"></p>
                            </div>
                            <button type="submit" id="kirimedithariini${todos.id}" class="text-white inline-flex justify-center   items-center bg-sky-800 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-48 h-10 " id="kirimtodo">
                              <img id="loadingedithariini${todos.id}" src="./svg/loading-nobg.svg" class=" hidden w-5"></img>
                                <div class="flex gap-x-1 " id="btntextedithariini${todos.id}">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="me-1 -ms-1 w-5 h-5" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
                                    <path d="M11 2H9v3h2z"/>
                                    <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
                                  </svg>
                                  <p class="text-base font-semibold text-center" >Edit Tugas</p>
                                </div>
                            </button>
                            </div>
                          </div>
                        </form>
                      </div>
                  </div>
              </div>
          `;
            const spanstatusdikerjakan = document.getElementById(`btn-dikerjakanspan${todos.id}`);
            const spanstatusmenunggu = document.getElementById(`btn-menungguspan${todos.id}`);
            const spanstatusselesai = document.getElementById(`btn-selesaispan${todos.id}`);
            const spanstatusrevisi = document.getElementById(`btn-revisispan${todos.id}`);
            const spanstatustelat = document.getElementById(`btn-telatspan${todos.id}`);
            if (todos.status === 'dikerjakan') {
              spanstatusdikerjakan.classList.add('bg-sky-300');
              spanstatusdikerjakan.classList.remove('bg-sky-100');
              spanstatusrevisi.classList.add('hidden');
              spanstatustelat.classList.add('hidden');
            } else if (todos.status === 'menunggu') {
              spanstatusmenunggu.classList.add('bg-sky-300');
              spanstatusmenunggu.classList.remove('bg-sky-100');
              spanstatusrevisi.classList.add('hidden');
              spanstatustelat.classList.add('hidden');
            } else if (todos.status === 'revisi') {
              spanstatusdikerjakan.classList.add('bg-sky-300');
              spanstatusdikerjakan.classList.remove('bg-sky-100');
              spanstatusrevisi.classList.add('bg-rose-800', 'text-sky-100');
              spanstatusrevisi.classList.remove('bg-sky-100', 'text-sky-900');
              spanstatusmenunggu.classList.add('hidden');
              spanstatustelat.classList.add('hidden');
            } else if (todos.status === 'selesai') {
              spanstatusselesai.classList.add('bg-green-700', 'text-sky-100');
              spanstatusselesai.classList.remove('bg-sky-100', 'text-sky-900');
              spanstatustelat.classList.add('hidden');
              spanstatusmenunggu.classList.add('hidden');
              spanstatusdikerjakan.classList.add('hidden');
            } else if (todos.status === 'telat') {
              spanstatusdikerjakan.classList.add('bg-sky-300');
              spanstatusdikerjakan.classList.remove('bg-sky-100');
              spanstatustelat.classList.add('bg-rose-800', 'text-sky-100');
              spanstatustelat.classList.remove('bg-sky-100', 'text-sky-900');
              spanstatusmenunggu.classList.add('hidden');
              spanstatusrevisi.classList.add('hidden');
            }

            setTimeout(times, 1000);
            function times() {
              const btndeletetoday = document.getElementById(`deletebtnhariini${todos.id}`);
              const targetbtntoday = document.getElementById(`targetdeletehariini${todos.id}`);
              const closebtntoday = document.getElementById(`btnclosedeletehariini${todos.id}`);
              const iyadeletebtntoday = document.getElementById(`iyadeletehariini${todos.id}`);
              const batalbtntoday = document.getElementById(`btnbatalhariini${todos.id}`);
              const messageinputdeletetoday = document.getElementById(`messageinputdeletehariini${todos.id}`);
              const loadingtoday = document.getElementById(`loadingdeletehariini${todos.id}`);
              const textdeletetoday = document.getElementById(`textdeletehariini${todos.id}`);
              const optionsdeletetoday = {
                placement: 'center',
                backdrop: 'dynamic',
                backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
                closable: true,
              };

              const modaldeletetoday = new Modal(targetbtntoday, optionsdeletetoday);
              btndeletetoday.addEventListener('click', () => {
                modaldeletetoday.show();
              });
              closebtntoday.addEventListener('click', () => {
                modaldeletetoday.hide();
              });
              batalbtntoday.addEventListener('click', () => {
                modaldeletetoday.hide();
              });
              iyadeletebtntoday.addEventListener('click', () => {
                loadingtoday.classList.remove('hidden');
                textdeletetoday.classList.add('hidden');
                deletetodo(todos.id, messageinputdeletetoday, loadingtoday, textdeletetoday, modaldeletetoday);
              });
            }
            setTimeout(modalehariini, 1000);
            function modalehariini() {
              const Formtambahdataedit = document.getElementById(`Formtambahdataedithariini${todos.id}`);
              const editopendikerjakan = document.getElementById(`editbtn${todos.id}`);
              const targeteditdikerjakan = document.getElementById(`targetedithariini${todos.id}`);
              const closeeditdikerjakan = document.getElementById(`editclosehariini${todos.id}`);
              const messagedata = document.getElementById(`messageinputhariini${todos.id}`);
              const loadingedit = document.getElementById(`loadingedithariini${todos.id}`);
              const btntextedit = document.getElementById(`btntextedithariini${todos.id}`);

              // button change status
              const btnstatusdikerjakantoday = document.getElementById(`btn-dikerjakan-today${todos.id}`);
              const btnstatusmenunggutoday = document.getElementById(`btn-menunggu-today${todos.id}`);
              const btnstatusrevisitoday = document.getElementById(`btn-revisi-today${todos.id}`);
              const btnstatusselesaitoday = document.getElementById(`btn-selesai-today${todos.id}`);
              const btnstatustelattoday = document.getElementById(`btn-telat-today${todos.id}`);
              let editstatus = '';

              const judultugasdikerjakan = document.getElementById(`judultugashariini${todos.id}`);
              judultugasdikerjakan.value = `${todos.title}`;
              const inputtanggaldikerjakan = document.getElementById(`inputtanggalhariini${todos.id}`);
              inputtanggaldikerjakan.value = tanggaldeadline;
              const timetododikerjakan = document.getElementById(`timetodohariini${todos.id}`);
              timetododikerjakan.value = timedeadline;
              const deskripsitododikerjakan = document.getElementById(`deskripsitodohariini${todos.id}`);
              deskripsitododikerjakan.value = `${todos.description}`;

              if (todos.status === 'dikerjakan') {
                btnstatusdikerjakantoday.classList.add('bg-sky-300');
                btnstatusdikerjakantoday.classList.remove('bg-sky-100');
                btnstatustelattoday.classList.add('hidden');
                btnstatusrevisitoday.classList.add('hidden');
                editstatus = 'dikerjakan';
              } else if (todos.status === 'menunggu') {
                btnstatusmenunggutoday.classList.add('bg-sky-300');
                btnstatusmenunggutoday.classList.remove('bg-sky-100');
                btnstatustelattoday.classList.add('hidden');
                btnstatusrevisitoday.classList.add('hidden');
                editstatus = 'menunggu';
              } else if (todos.status === 'revisi') {
                btnstatusrevisitoday.classList.add('bg-sky-300');
                btnstatusrevisitoday.classList.remove('bg-sky-100');
                btnstatusdikerjakantoday.classList.add('hidden');
                btnstatusmenunggutoday.classList.add('hidden');
                btnstatustelattoday.classList.add('hidden');
                editstatus = 'revisi';
              } else if (todos.status === 'selesai') {
                btnstatusselesaitoday.classList.add('bg-sky-300');
                btnstatusselesaitoday.classList.remove('bg-sky-100');
                btnstatusdikerjakantoday.classList.add('hidden');
                btnstatusmenunggutoday.classList.add('hidden');
                btnstatustelattoday.classList.add('hidden');
                editstatus = 'selesai';
              } else if (todos.status === 'telat') {
                btnstatustelattoday.classList.add('bg-sky-300');
                btnstatustelattoday.classList.remove('bg-sky-100');
                btnstatusdikerjakantoday.classList.add('hidden');
                btnstatusmenunggutoday.classList.add('hidden');
                btnstatusrevisitoday.classList.add('hidden');
                btnstatustelattoday.setAttribute('disabled', true);
                editstatus = 'telat';
              }
              const optionsedit = {
                placement: 'center',
                backdrop: 'dynamic',
                backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
                closable: true,
              };

              const modaledittoday = new Modal(targeteditdikerjakan, optionsedit);
              editopendikerjakan.addEventListener('click', (e) => {
                e.preventDefault();
                modaledittoday.show();
              });
              closeeditdikerjakan.addEventListener('click', (e) => {
                e.preventDefault();
                modaledittoday.hide();
              });

              const allbuttonstatus = document.querySelectorAll('.btn-edit-status-today');

              allbuttonstatus.forEach((button) => {
                button.addEventListener('click', (e) => {
                  e.preventDefault();
                  editstatus = e.target.innerHTML;
                  // Mengubah warna semua tombol menjadi warna default
                  allbuttonstatus.forEach((btn) => {
                    btn.classList.remove('bg-sky-300'); // Hapus kelas warna yang ingin diubah
                    btn.classList.add('bg-sky-100'); // Tambahkan kelas warna default
                  });

                  // Mengubah warna tombol yang diklik
                  e.target.classList.remove('bg-sky-100'); // Hapus kelas warna default
                  e.target.classList.add('bg-sky-300'); // Tambahkan kelas warna yang diinginkan
                });
              });

              Formtambahdataedit.addEventListener('submit', (e) => {
                e.preventDefault();
                loadingedit.classList.remove('hidden');
                btntextedit.classList.add('hidden');

                setTimeout(() => {
                  editdetaildatatodo(todos.id, judultugasdikerjakan, inputtanggaldikerjakan, timetododikerjakan, deskripsitododikerjakan, editstatus, messagedata, loadingedit, btntextedit, modaledittoday);
                }, 2000);
              });
            }
          });
        }
      }).catch(() => {});
    }

    async function gettodobesok() {
      const urlgetbesok = `${baseUrl}/todo/tomorrow`;
      axios.get(urlgetbesok, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        const databesok = response.data.todos;
        setTimeout(time, 2000);
        function time() {
          if (response.data.message === 'data kosong') {
            besok.innerHTML = 'Tidak ada tugas yang deadlinenya besok';
            besok.classList.add('text-base');
            besok.classList.add('font-semibold');
            besok.classList.add('text-rose-800');
            besok.classList.add('pt-10');
          }
          containerharibesok.classList.remove('hidden');
          containerharibesok.classList.add('flex');
          loading2.classList.add('hidden');
          databesok.forEach((todos) => {
            const dateString = todos.deadline;
            const dateObject = new Date(dateString);
            const options = {
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            };
            const hours = dateObject.getHours();
            const minutes = dateObject.getMinutes();
            const formattedHours = hours < 10 ? `0${hours}` : hours;
            const formatedminutes = minutes < 10 ? `0${minutes}` : minutes;
            const timedeadline = `${formattedHours}:${formatedminutes}`;
            const tanggaldeadline = dateObject.toLocaleDateString('en-CA');
            const dayName = dateObject.toLocaleDateString('id-ID', options);
            const deadline = dayName;
            containerharibesok.innerHTML += `
            <div class=" max-w-xs md:max-w-sm w-full p-6 border border-sky-900 rounded-lg shadow" id="kartu revisi">
              <div class="flex flex-col px-4 gap-2" >
                <div class="flex gap-3 justify-between">
                  <button id="editbtnopenbesok${todos.id}" class="editEvent" data-todo-id="${todos.id}">
                    <svg class="w-5 h-5  text-sky-900" aria-hidden="true" id="edit "xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                      <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
                      <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
                    </svg>
                  </button>
                  <h2 class="col-span-3 row-start-3 px-6 text-sky-950 text-xl justify-center items-center font-bold text-center" id="judulTodo" data-title="${todos.title}">${todos.title}</h2>
                  <button id="btndeletebesok${todos.id}" class="deleteEvent" data-todo-id="${todos.id}">
                    <svg class="w-5 md:h-5  text-sky-900" aria-hidden="true" id="hapus "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                    </svg>
                  </button> 
                </div>
                <div class="flex py-4 flex-wrap gap-3">
                  <h3 class="text-sky-950 text-md font-bold">Status:</h3>
                  <span id="span-dikerjakan-besok${todos.id}" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Dikerjakan</span>
                  <span id="span-menunggu-besok${todos.id}" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Menunggu</span>
                  <span id="span-selesai-besok${todos.id}" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Selesai</span>
                  <span id="span-revisi-besok${todos.id}" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Revisi</span>
                </div>
                <div class="flex flex-row gap-2 py-2 border-sky-950 border-b-2">
                  <h2 class="flex flex-grow text-sky-950 text font-semibold" id="deadline-tanggal" data-deadline="${deadline}">
                    ${deadline}
                  </h2>
                  <h2 id="Time" class="text-sm text-sky-950 font-semibold">
                      ${timedeadline}
                  </h2>  
                </div>
                <div class="p-1">
                  <p id="deskripsi" data-description="${todos.description}"> ${todos.description} </p>
                </div>
              </div>
            </div>  
            <div id="targetdeletebesok${todos.id}" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <div class="relative bg-white rounded-lg shadow ">
                        <button type="button" id="btnclosebesok${todos.id}" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="popup-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="p-4 text-center md:p-5" id="">
                          <svg class="mx-auto mb-4 text-rose-800 md:w-12 md:h-12 w-9 h-9" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
                            <path
                              d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z" />
                            <path
                              d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                          </svg>
                          <h3 class="mb-5 text-base font-normal md:text-lg text-sky-900 ">Apakah kamu yakin ingin menghapus Todo ini?
                          </h3>
                          <div class="flex justify-center my-2 ">
                              <p class="max-w-xs text-sm font-semibold text-center error-message text-rose-700" id="messageinputdeletebesok${todos.id}"></p>
                            </div>
                          <button id="iyadeletebesok${todos.id}" data-modal-hide="popup-modal" id="deleteuser" type="button"
                            class="text-sky-100 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs md:text-sm inline-flex items-center md:px-5 md:py-2.5 px-3 py-2 text-center me-2 justify-center w-28 md:w-36">
                            <P id="textdeletebesok${todos.id}">Iya, saya yakin</P>
                            <img id="loadingdeletebesok${todos.id}" src="./svg/loading-nobg.svg" class=" hidden  w-[15px]"></img>
                          </button>
                          <button id="btnbatalbesok${todos.id}" data-modal-hide="popup-modal" type="button"
                            class="text-sky-100 bg-sky-900 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-sky-200 text-xs md:text-sm font-medium md:px-5 md:py-2.5 px-3 py-2 focus:z-10">Tidak,
                            Batal</button>
                        </div>
                    </div>
                </div>
              </div>
              <!-- popup edit -->
            <div id="targeteditbesok${todos.id}" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div class="relative w-full max-w-2xl max-h-full">
                  <!-- Modal content -->
                  <div class="relative bg-sky-100 rounded-lg shadow">
                      <!-- Modal header -->
                      <div class="flex items-center text-center justify-between p-4 border-b border-sky-900 rounded-t ">
                          <h3 class="text-xl font-semibold text-sky-900 text-center">
                              Edit Tugas
                          </h3>
                          <button type="button" id="editclosebesok${todos.id}" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
                              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                              </svg>
                              <span class="sr-only">Close modal</span>
                          </button>
                      </div>
                      <!-- Modal body -->
                      <div class="p-6 space-y-6">
                        <form id="Formtambahdataeditbesok${todos.id}" class="gap-2 lg:gap-8">
                          <div class="gap-2 w-full flex flex-col md:flex-row flex-wrap md:flex-nowrap md:justify-around lg:gap-8">
                            <div class="flex flex-col gap-3">
                              <div class="flex gap-2 flex-col lg:gap-2">
                                <label for="" class="text-sm text-sky-900 font-bold">Judul Tugas</label>
                                <input required id="judultugasbesok${todos.id}" type="text" class="text-sm font-semibold w-full rounded-lg" placeholder="Meeting Project">
                              </div>
                              <div class="flex py-4 flex-wrap gap-3">
                                <h3 class="text-sky-950 text-md font-bold">Status:</h3>
                                <button type="button" id="btn-dikerjakan-besok${todos.id}"  class=" btn-edit-besok text-sky-900 bg-sky-100 hover:bg-sky-200 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Dikerjakan</button>
                                <button type="button" id="btn-menunggu-besok${todos.id}" class=" btn-edit-besok text-sky-900 bg-sky-100 hover:bg-sky-200 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Menunggu</button>
                                <button type="button" id="btn-selesai-besok${todos.id}" class=" btn-edit-besok text-sky-900 bg-sky-100 hover:bg-sky-200 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Selesai</button>
                                <button type="button" id="btn-revisi-besok${todos.id}"  class=" btn-edit-besok text-sky-900 bg-sky-100 hover:bg-sky-200 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Revisi</button>
                              </div>
                              <div class="flex flex-col gap-6">
                                <div class="flex flex-col gap-2 order-1 lg:order-2 ">
                                  <label for="" class="text-sm text-sky-900 font-bold">Deadline</label>
                                  <div class="relative max-w-sm z-10" id="btn-deadline">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                      </svg>
                                    </div>
                                    <input required type="date" id="inputtanggalbesok${todos.id}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="Pilih Tanggal">
                                  </div>
                                </div>
                                <div class="flex flex-col gap-2 order-2 lg:order-1 lg:w-32">
                                  <label for="" class="text-sm text-sky-900 font-bold">Waktu</label>
                                  <input required type="time" id="timetodobesok${todos.id}" class="border border-sky-950 rounded-lg cursor-pointer" placeholder="">
                                </div>
                              </div>
                            </div>
                            <div class="flex flex-col gap-2">
                              <div class="flex flex-col gap-2 w-full">
                                <label for="myTextarea" class="text-sm text-sky-900 font-bold">Deskripsi</label>
                                <textarea required id="deskripsitodobesok${todos.id}" name="myTextarea" placeholder="Maks 500 Karakter" class="mt-2 font-semibold text-sm rounded-xl px-2 py-1 w-full h-44"></textarea>
                              </div>
                              <div>
                                <label for="myTextarea" class="text-sm text-sky-900 font-bold">Notifikasi</label>
                                <div class="flex items-center">
                                  <input type="checkbox" id="toggle" class="hidden">
                                  <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" >
                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- Modal footer -->
                          <div class="flex items-center justify-end p-3 space-x-2 border-t border-sky-900 rounded-b mt-10 ">
                            <div class="flex flex-col">
                            <div class="flex justify-center my-2 ">
                              <p class="max-w-xs text-sm font-semibold text-center error-message text-rose-700" id="messageinputbesok${todos.id}"></p>
                            </div>
                            <button type="submit" id="kirimeditbesok${todos.id}" class="text-white inline-flex justify-center   items-center bg-sky-800 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-48 h-10 " id="kirimtodo">
                              <img id="loadingeditbesok${todos.id}" src="./svg/loading-nobg.svg" class=" hidden w-5"></img>
                                <div class="flex gap-x-1 " id="btntexteditbesok${todos.id}">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="me-1 -ms-1 w-5 h-5" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
                                    <path d="M11 2H9v3h2z"/>
                                    <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
                                  </svg>
                                  <p class="text-base font-semibold text-center" >Edit Tugas</p>
                                </div>
                            </button>
                            </div>
                          </div>
                        </form>
                      </div>
                  </div>
              </div>
            `;
            const spanstatusdikerjakanbesok = document.getElementById(`span-dikerjakan-besok${todos.id}`);
            const spanstatusmenunggubesok = document.getElementById(`span-menunggu-besok${todos.id}`);
            const spanstatusselesaibesok = document.getElementById(`span-selesai-besok${todos.id}`);
            const spanstatusrevisibesok = document.getElementById(`span-revisi-besok${todos.id}`);
            if (todos.status === 'dikerjakan') {
              spanstatusdikerjakanbesok.classList.add('bg-sky-300');
              spanstatusdikerjakanbesok.classList.remove('bg-sky-100');
              spanstatusrevisibesok.classList.add('hidden');
            } else if (todos.status === 'menunggu') {
              spanstatusmenunggubesok.classList.add('bg-sky-300');
              spanstatusmenunggubesok.classList.remove('bg-sky-100');
              spanstatusrevisibesok.classList.add('hidden');
            } else if (todos.status === 'revisi') {
              spanstatusdikerjakanbesok.classList.add('bg-sky-300');
              spanstatusdikerjakanbesok.classList.remove('bg-sky-100');
              spanstatusrevisibesok.classList.add('bg-rose-800');
              spanstatusrevisibesok.classList.remove('bg-sky-100');
              spanstatusrevisibesok.classList.add('text-sky-100');
              spanstatusrevisibesok.classList.remove('text-sky-900');
              spanstatusmenunggubesok.classList.add('hidden');
            } else if (todos.status === 'selesai') {
              spanstatusselesaibesok.classList.add('bg-green-700');
              spanstatusselesaibesok.classList.remove('bg-sky-100');
              spanstatusselesaibesok.classList.add('text-sky-100');
              spanstatusselesaibesok.classList.remove('text-sky-900');
              spanstatusdikerjakanbesok.classList.add('hidden');
              spanstatusmenunggubesok.classList.add('hidden');
            }
            setTimeout(times, 1000);
            function times() {
              const btndeletebesok = document.getElementById(`btndeletebesok${todos.id}`);
              const targetbtnbesok = document.getElementById(`targetdeletebesok${todos.id}`);
              const closebtnbesok = document.getElementById(`btnclosebesok${todos.id}`);
              const batalbtnbesok = document.getElementById(`btnbatalbesok${todos.id}`);
              const iyadeletebtnbesok = document.getElementById(`iyadeletebesok${todos.id}`);
              const messageinputdeletebesok = document.getElementById(`messageinputdeletebesok${todos.id}`);
              const loadingbesok = document.getElementById(`loadingdeletebesok${todos.id}`);
              const textdeletebesok = document.getElementById(`textdeletebesok${todos.id}`);

              const optionsdeletebesok = {
                placement: 'center',
                backdrop: 'dynamic',
                backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
                closable: true,
              };

              const modaldeletebesok = new Modal(targetbtnbesok, optionsdeletebesok);
              btndeletebesok.addEventListener('click', () => {
                modaldeletebesok.show();
              });
              closebtnbesok.addEventListener('click', () => {
                modaldeletebesok.hide();
              });
              batalbtnbesok.addEventListener('click', () => {
                modaldeletebesok.hide();
              });
              iyadeletebtnbesok.addEventListener('click', () => {
                loadingbesok.classList.remove('hidden');
                textdeletebesok.classList.add('hidden');
                deletetodo(todos.id, messageinputdeletebesok, loadingbesok, textdeletebesok, modaldeletebesok);
              });
            }
            setTimeout(modeleditbesok, 1000);
            function modeleditbesok() {
              const Formtambahdataedit = document.getElementById(`Formtambahdataeditbesok${todos.id}`);
              const editopendikerjakan = document.getElementById(`editbtnopenbesok${todos.id}`);
              const targeteditdikerjakan = document.getElementById(`targeteditbesok${todos.id}`);
              const closeeditdikerjakan = document.getElementById(`editclosebesok${todos.id}`);
              const messagedatabesok = document.getElementById(`messageinputbesok${todos.id}`);
              const loadingeditbesok = document.getElementById(`loadingeditbesok${todos.id}`);
              const btntexteditbesok = document.getElementById(`btntexteditbesok${todos.id}`);

              // button change status
              const btnstatusdikerjakanbesok = document.getElementById(`btn-dikerjakan-besok${todos.id}`);
              const btnstatusmenunggubesok = document.getElementById(`btn-menunggu-besok${todos.id}`);
              const btnstatusrevisibesok = document.getElementById(`btn-revisi-besok${todos.id}`);
              const btnstatusselesaibesok = document.getElementById(`btn-selesai-besok${todos.id}`);
              let editstatus = '';

              const judultugasbesok = document.getElementById(`judultugasbesok${todos.id}`);
              judultugasbesok.value = `${todos.title}`;
              const inputtanggalbesok = document.getElementById(`inputtanggalbesok${todos.id}`);
              inputtanggalbesok.value = tanggaldeadline;
              const timetodobesok = document.getElementById(`timetodobesok${todos.id}`);
              timetodobesok.value = timedeadline;
              const deskripsitodobesok = document.getElementById(`deskripsitodobesok${todos.id}`);
              deskripsitodobesok.value = `${todos.description}`;

              if (todos.status === 'dikerjakan') {
                btnstatusdikerjakanbesok.classList.add('bg-sky-300');
                btnstatusdikerjakanbesok.classList.remove('bg-sky-100');
                btnstatusrevisibesok.classList.add('hidden');
                editstatus = 'dikerjakan';
              } else if (todos.status === 'menunggu') {
                btnstatusmenunggubesok.classList.add('bg-sky-300');
                btnstatusmenunggubesok.classList.remove('bg-sky-100');
                btnstatusrevisibesok.classList.add('hidden');
                editstatus = 'menunggu';
              } else if (todos.status === 'revisi') {
                btnstatusrevisibesok.classList.add('bg-sky-300');
                btnstatusrevisibesok.classList.remove('bg-sky-100');
                btnstatusdikerjakanbesok.classList.add('hidden');
                btnstatusmenunggubesok.classList.add('hidden');
                editstatus = 'revisi';
              } else if (todos.status === 'selesai') {
                btnstatusselesaibesok.classList.add('bg-sky-300');
                btnstatusselesaibesok.classList.remove('bg-sky-100');
                btnstatusdikerjakanbesok.classList.add('hidden');
                btnstatusmenunggubesok.classList.add('hidden');
                editstatus = 'selesai';
              }
              const optionsedit = {
                placement: 'center',
                backdrop: 'dynamic',
                backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
                closable: true,
              };

              const modaleditbesok = new Modal(targeteditdikerjakan, optionsedit);
              editopendikerjakan.addEventListener('click', (e) => {
                e.preventDefault();
                modaleditbesok.show();
              });
              closeeditdikerjakan.addEventListener('click', (e) => {
                e.preventDefault();
                modaleditbesok.hide();
              });

              const allbuttonstatus = document.querySelectorAll('.btn-edit-besok');

              allbuttonstatus.forEach((button) => {
                button.addEventListener('click', (e) => {
                  e.preventDefault();
                  editstatus = e.target.innerHTML;
                  // Mengubah warna semua tombol menjadi warna default
                  allbuttonstatus.forEach((btn) => {
                    btn.classList.remove('bg-sky-300'); // Hapus kelas warna yang ingin diubah
                    btn.classList.add('bg-sky-100'); // Tambahkan kelas warna default
                  });

                  // Mengubah warna tombol yang diklik
                  e.target.classList.remove('bg-sky-100'); // Hapus kelas warna default
                  e.target.classList.add('bg-sky-300'); // Tambahkan kelas warna yang diinginkan
                });
              });

              Formtambahdataedit.addEventListener('submit', (e) => {
                e.preventDefault();
                loadingeditbesok.classList.remove('hidden');
                btntexteditbesok.classList.add('hidden');

                setTimeout(() => {
                  editdetaildatatodo(todos.id, judultugasbesok, inputtanggalbesok, timetodobesok, deskripsitodobesok, editstatus, messagedatabesok, loadingeditbesok, btntexteditbesok, modaleditbesok);
                }, 2000);
              });
            }
          });
        }
      }).catch(() => { });
    }
    buttontambah.addEventListener('click', (e) => {
      e.preventDefault();
      modal.show();
    });
    closetambah.addEventListener('click', (e) => {
      e.preventDefault();
      modal.hide();
    });
    // options with default values
    const options = {
      placement: 'center',
      backdrop: 'dynamic',
      backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
      closable: true,
    };

    const $targetEl = document.getElementById('default-modal');
    const modal = new Modal($targetEl, options);

    const loadingtambah = document.getElementById('loadingtambah');
    const btntexttambah = document.getElementById('btn-text-tambah');
    const message = document.getElementById('messageinput');
    const formtambahdata = document.getElementById('Formtambahdata');

    formtambahdata.addEventListener('submit', (ea) => {
      ea.preventDefault();

      loadingtambah.classList.remove('hidden');
      btntexttambah.classList.add('hidden');
      setTimeout(tambahtodo, 2000);
    });
    async function getallyesterday() {
      const urlgetkemarin = `${baseUrl}/todo/yesterday`;
      axios.get(urlgetkemarin, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        const todokemarin = response.data.todos;
        setTimeout(time, 2000);
        function time() {
          loading4.classList.add('hidden');
          containertodokemarin.classList.remove('hidden');
          containertodokemarin.classList.add('flex');
          if (response.data.message === 'data kosong') {
            kemarin.innerHTML = 'Tidak ada tugas yang Terlewat';
            kemarin.classList.add('text-base');
            kemarin.classList.add('font-semibold');
            kemarin.classList.add('text-rose-800');
            kemarin.classList.add('pt-10');
          }
          todokemarin.forEach((todos) => {
            const dateString = todos.deadline;
            const dateObject = new Date(dateString);
            const options = {
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            };
            const hours = dateObject.getHours();
            const minutes = dateObject.getMinutes();
            const formattedHours = hours < 10 ? `0${hours}` : hours;
            const formatedminutes = minutes < 10 ? `0${minutes}` : minutes;
            const timedeadline = `${formattedHours}:${formatedminutes}`;
            const tanggaldeadline = dateObject.toLocaleDateString('en-CA');
            const dayName = dateObject.toLocaleDateString('id-ID', options);
            const deadline = dayName;
            containertodokemarin.innerHTML += `
              <div class=" max-w-xs md:max-w-sm w-full p-6 border border-sky-900 rounded-lg shadow" id="kartu revisi">
                <div class="flex flex-col gap-2" >
                  <div class="flex gap-3 justify-between">
                    <button id="editopen-kemarin${todos.id}" class="editEvent">
                      <svg class="w-5 h-5  text-sky-900" aria-hidden="true" id="edit "xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
                        <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
                      </svg>
                    </button>
                    <h2 class="col-span-3 row-start-3 px-6 text-sky-950 text-xl justify-center items-center font-bold text-center" id="judulTodo" data-title="${todos.title}">${todos.title}</h2>
                    <button  id="btndelete-kemarin${todos.id}" data-modal-target="popup-modal" data-modal-toggle="popup-modal" type="button">
                      <svg class="w-5 md:h-5  text-sky-900" aria-hidden="true" id="hapus "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                      </svg>
                    </button> 
                  </div>
                  <div class="flex py-4 flex-wrap gap-3">
                    <h3 class="text-sky-950 text-md font-bold">Status:</h3>
                    <span  id="span-dikerjakan-kemarin${todos.id}" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100  border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Dikerjakan</span>
                    <span  id="span-menunggu-kemarin${todos.id}" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100  border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Menunggu</span>
                    <span  id="span-selesai-kemarin${todos.id}" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100  border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Selesai</span>
                    <span  id="span-revisi-kemarin${todos.id}" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100  border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Revisi</span>
                    <span  id="span-telat-kemarin${todos.id}" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100  border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Telat</span>
                  </div>
                  <div class="flex justify-between gap-2 py-2 border-sky-950 border-b-2">
                    <h2 class="flex text-sky-950 text-sm font-semibold" id="deadline-tanggal">
                    ${deadline}
                    </h2>
                    <h2 id="Time" class="text-sm text-sky-950 font-semibold">
                      ${timedeadline}
                    </h2> 
                  </div>
                  <div class="p-1">
                    <p id="deskripsi"> ${todos.description} </p>
                  </div>
                </div>
              </div>

              <div id="targetdelete-kemarin${todos.id}" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <div class="relative bg-sky-100 rounded-lg shadow">
                        <button type="button" id="btnclosedelete-kemarin${todos.id}" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="p-4 text-center md:p-5" id="">
                          <svg class="mx-auto mb-4 text-rose-800 md:w-12 md:h-12 w-9 h-9" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
                            <path
                              d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z" />
                            <path
                              d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                          </svg>
                          <h3 class="mb-5 text-base font-normal md:text-lg text-sky-900 ">Apakah kamu yakin ingin menghapus Todo ini?
                          </h3>
                            <div class="flex justify-center my-2 ">
                              <p class="max-w-xs text-sm font-semibold text-center error-message text-rose-700" id="messageinputdelete-kemarin${todos.id}"></p>
                            </div>
                          <button id="iyadelete-kemarin${todos.id}" data-modal-hide="popup-modal" id="deleteuser" type="button"
                            class="text-sky-100 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs md:text-sm inline-flex items-center md:px-5 md:py-2.5 px-3 py-2 text-center me-2 justify-center w-28 md:w-36">
                            <P id="textdelete-kemarin${todos.id}">Iya, saya yakin</P>
                            <img id="loadingdeletekemarin${todos.id}" src="./svg/loading-nobg.svg" class=" hidden  w-[15px]"></img>
                          </button>
                          <button id="btnbataldelete-kemarin${todos.id}"   data-modal-hide="popup-modal" type="button"
                            class="text-sky-100 bg-sky-900 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-sky-200 text-xs md:text-sm font-medium md:px-5 md:py-2.5 px-3 py-2 focus:z-10">Tidak,
                            Batal</button>
                        </div>
                    </div>
                </div>
              </div>


              <!-- popup edit -->
            <div id="targetedit-kemarin${todos.id}" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div class="relative w-full max-w-2xl max-h-full">
                  <!-- Modal content -->
                  <div class="relative bg-sky-100 rounded-lg shadow">
                      <!-- Modal header -->
                      <div class="flex items-center text-center justify-between p-4 border-b border-sky-900 rounded-t ">
                          <h3 class="text-xl font-semibold text-sky-900 text-center">
                              Edit Tugas
                          </h3>
                          <button type="button" id="editclose-kemarin${todos.id}" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
                              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                              </svg>
                              <span class="sr-only">Close modal</span>
                          </button>
                      </div>
                      <!-- Modal body -->
                      <div class="p-6 space-y-6">
                        <form id="Formtambahdataedit-kemarin${todos.id}" class="gap-2 lg:gap-8">
                          <div class="gap-2 w-full flex flex-col md:flex-row flex-wrap md:flex-nowrap md:justify-around lg:gap-8">
                            <div class="flex flex-col gap-3">
                              <div class="flex gap-2 flex-col lg:gap-2">
                                <label for="" class="text-sm text-sky-900 font-bold">Judul Tugas</label>
                                <input required id="judultugas-kemarin${todos.id}" type="text" class="text-sm font-semibold w-full rounded-lg" placeholder="Meeting Project" required>
                              </div>
                              <div class="flex py-4 flex-wrap gap-3">
                                <h3 class="text-sky-950 text-md font-bold">Status:</h3>
                                <button type="button" id="btn-dikerjakan-kemarin${todos.id}"  class=" btn-edit-status-kemarin text-sky-900 bg-sky-100 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Dikerjakan</button>
                                <button type="button" id="btn-menunggu-kemarin${todos.id}" class=" btn-edit-status-kemarin text-sky-900 bg-sky-100 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Menunggu</button>
                                <button type="button" id="btn-selesai-kemarin${todos.id}" class=" btn-edit-status-kemarin text-sky-900 bg-sky-100 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Selesai</button>
                                <button type="button" id="btn-revisi-kemarin${todos.id}"  class=" btn-edit-status-kemarin text-sky-900 bg-sky-100 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Revisi</button>
                                <button type="button" id="btn-telat-kemarin${todos.id}"  class=" btn-edit-status-kemarin text-sky-900 bg-sky-100 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Telat</button>
                              </div>
                              <div class="flex flex-col gap-6">
                                <div class="flex flex-col gap-2 order-1 lg:order-2 ">
                                  <label for="" class="text-sm text-sky-900 font-bold">Deadline</label>
                                  <div class="relative max-w-sm z-10" id="btn-deadline">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                      </svg>
                                    </div>
                                    <input required type="date" id="inputtanggal-kemarin${todos.id}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="Pilih Tanggal" required>
                                  </div>
                                </div>
                                <div class="flex flex-col gap-2 order-2 lg:order-1 lg:w-32">
                                  <label for="" class="text-sm text-sky-900 font-bold">Waktu</label>
                                  <input required type="time" id="timetodo-kemarin${todos.id}" class="border border-sky-950 rounded-lg cursor-pointer" placeholder="" required>
                                </div>
                              </div>
                            </div>
                            <div class="flex flex-col gap-2">
                              <div class="flex flex-col gap-2 w-full">
                                <label for="myTextarea" class="text-sm text-sky-900 font-bold">Deskripsi</label>
                                <textarea required id="deskripsitodo-kemarin${todos.id}" name="myTextarea" placeholder="Maks 500 Karakter" class="mt-2 font-semibold text-sm rounded-xl px-2 py-1 w-full h-44"></textarea>
                              </div>
                              <div>
                                <label for="myTextarea" class="text-sm text-sky-900 font-bold">Notifikasi</label>
                                <div class="flex items-center">
                                  <input  type="checkbox" id="toggle" class="hidden">
                                  <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" >
                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- Modal footer -->
                          <div class="flex items-center justify-end p-3 space-x-2 border-t border-sky-900 rounded-b mt-10 ">
                            <div class="flex flex-col">
                            <div class="flex justify-center my-2 ">
                              <p class="max-w-xs text-sm font-semibold text-center error-message text-rose-700" id="messageinputedit-kemarin${todos.id}"></p>
                            </div>
                            <button type="submit" id="kirimedit-kemarin${todos.id}" class="text-white inline-flex justify-center   items-center bg-sky-800 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-48 h-10 " id="kirimtodo">
                              <img id="loadingedit-kemarin${todos.id}" src="./svg/loading-nobg.svg" class=" hidden w-5"></img>
                                <div class="flex gap-x-1 " id="btntextedit-kemarin${todos.id}">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="me-1 -ms-1 w-5 h-5" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
                                    <path d="M11 2H9v3h2z"/>
                                    <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
                                  </svg>
                                  <p class="text-base font-semibold text-center" >Edit Tugas</p>
                                </div>
                            </button>
                            </div>
                          </div>
                        </form>
                      </div>
                  </div>
              </div>
            `;
            const spanstatusdikerjakankemarin = document.getElementById(`span-dikerjakan-kemarin${todos.id}`);
            const spanstatusmenunggukemarin = document.getElementById(`span-menunggu-kemarin${todos.id}`);
            const spanstatusselesaikemarin = document.getElementById(`span-selesai-kemarin${todos.id}`);
            const spanstatusrevisikemarin = document.getElementById(`span-revisi-kemarin${todos.id}`);
            const spanstatustelatkemarin = document.getElementById(`span-telat-kemarin${todos.id}`);
            if (todos.status === 'telat') {
              spanstatusdikerjakankemarin.classList.add('bg-sky-300');
              spanstatusdikerjakankemarin.classList.remove('bg-sky-100');
              spanstatustelatkemarin.classList.add('bg-rose-800', 'text-sky-100');
              spanstatustelatkemarin.classList.remove('bg-sky-100', 'text-sky-900');
              spanstatusmenunggukemarin.classList.add('hidden');
              spanstatusrevisikemarin.classList.add('hidden');
            } else if (todos.status === 'selesai') {
              spanstatusselesaikemarin.classList.add('bg-green-700', 'text-sky-100');
              spanstatusselesaikemarin.classList.remove('bg-sky-100', 'text-sky-900');
              spanstatusdikerjakankemarin.classList.add('hidden');
              spanstatusmenunggukemarin.classList.add('hidden');
              spanstatustelatkemarin.classList.add('hidden');
            } else if (todos.status === 'revisi') {
              spanstatusdikerjakankemarin.classList.add('bg-sky-300');
              spanstatusdikerjakankemarin.classList.remove('bg-sky-100');
              spanstatusrevisikemarin.classList.add('bg-rose-800', 'text-sky-100');
              spanstatusrevisikemarin.classList.remove('bg-sky-100', 'text-sky-900');
              spanstatusdikerjakankemarin.classList.add('hidden');
              spanstatusmenunggukemarin.classList.add('hidden');
              spanstatustelatkemarin.classList.add('hidden');
            } else if (todos.status === 'menunggu') {
              spanstatusmenunggukemarin.classList.add('bg-sky-300');
              spanstatusmenunggukemarin.classList.remove('bg-sky-100');
              spanstatusrevisikemarin.classList.add('hidden');
              spanstatustelatkemarin.classList.add('hidden');
            }
            setTimeout(times, 1000);
            function times() {
              const btndeletekemarin = document.getElementById(`btndelete-kemarin${todos.id}`);
              const targetbtnkemarin = document.getElementById(`targetdelete-kemarin${todos.id}`);
              const closebtnkemarin = document.getElementById(`btnclosedelete-kemarin${todos.id}`);
              const iyadeletebtnkemarin = document.getElementById(`iyadelete-kemarin${todos.id}`);
              const batalbtnkemarin = document.getElementById(`btnbataldelete-kemarin${todos.id}`);
              const messageinputdeletekemarin = document.getElementById(`messageinputdelete-kemarin${todos.id}`);
              const loadingkemarin = document.getElementById(`loadingdeletekemarin${todos.id}`);
              const textdeletekemarin = document.getElementById(`textdelete-kemarin${todos.id}`);

              const optionsdeletekemarin = {
                placement: 'center',
                backdrop: 'dynamic',
                backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
                closable: true,
              };

              const modaldeletekemarin = new Modal(targetbtnkemarin, optionsdeletekemarin);
              btndeletekemarin.addEventListener('click', () => {
                modaldeletekemarin.show();
              });
              closebtnkemarin.addEventListener('click', () => {
                modaldeletekemarin.hide();
              });
              batalbtnkemarin.addEventListener('click', () => {
                modaldeletekemarin.hide();
              });
              iyadeletebtnkemarin.addEventListener('click', () => {
                loadingkemarin.classList.remove('hidden');
                textdeletekemarin.classList.add('hidden');
                deletetodo(todos.id, messageinputdeletekemarin, loadingkemarin, textdeletekemarin, modaldeletekemarin);
              });
            }
            setTimeout(modaleditkemarin, 1000);
            function modaleditkemarin() {
              const Formtambahdataeditkemarin = document.getElementById(`Formtambahdataedit-kemarin${todos.id}`);
              const editopenkemarin = document.getElementById(`editopen-kemarin${todos.id}`);
              const targeteditkemarin = document.getElementById(`targetedit-kemarin${todos.id}`);
              const closeeditkemarin = document.getElementById(`editclose-kemarin${todos.id}`);
              const messagedatakemarin = document.getElementById(`messageinputedit-kemarin${todos.id}`);
              const loadingeditkemarin = document.getElementById(`loadingedit-kemarin${todos.id}`);
              const btntexteditkemarin = document.getElementById(`btntextedit-kemarin${todos.id}`);

              // button change status
              const btnstatusdikerjakankemarin = document.getElementById(`btn-dikerjakan-kemarin${todos.id}`);
              const btnstatusmenunggukemarin = document.getElementById(`btn-menunggu-kemarin${todos.id}`);
              const btnstatusrevisikemarin = document.getElementById(`btn-revisi-kemarin${todos.id}`);
              const btnstatusselesaikemarin = document.getElementById(`btn-selesai-kemarin${todos.id}`);
              const btnstatustelatkemarin = document.getElementById(`btn-telat-kemarin${todos.id}`);
              let editstatuskemarin = '';

              const judultugaskemarin = document.getElementById(`judultugas-kemarin${todos.id}`);
              judultugaskemarin.value = `${todos.title}`;
              const inputtanggalkemarin = document.getElementById(`inputtanggal-kemarin${todos.id}`);
              inputtanggalkemarin.value = tanggaldeadline;
              const timetodokemarin = document.getElementById(`timetodo-kemarin${todos.id}`);
              timetodokemarin.value = timedeadline;
              const deskripsitodokemarin = document.getElementById(`deskripsitodo-kemarin${todos.id}`);
              deskripsitodokemarin.value = `${todos.description}`;

              if (todos.status === 'revisi') {
                btnstatusrevisikemarin.classList.add('bg-sky-300');
                btnstatusrevisikemarin.classList.remove('bg-sky-100');
                btnstatusdikerjakankemarin.classList.add('hidden');
                btnstatusmenunggukemarin.classList.add('hidden');
                btnstatustelatkemarin.classList.add('hidden');
                editstatuskemarin = 'revisi';
              } else if (todos.status === 'selesai') {
                btnstatusselesaikemarin.classList.add('bg-sky-300');
                btnstatusselesaikemarin.classList.remove('bg-sky-100');
                btnstatusdikerjakankemarin.classList.add('hidden');
                btnstatusmenunggukemarin.classList.add('hidden');
                btnstatustelatkemarin.classList.add('hidden');
                editstatuskemarin = 'selesai';
              } else if (todos.status === 'telat') {
                btnstatustelatkemarin.classList.add('bg-sky-300');
                btnstatustelatkemarin.classList.remove('bg-sky-100');
                btnstatusdikerjakankemarin.classList.add('hidden');
                btnstatusmenunggukemarin.classList.add('hidden');
                btnstatusrevisikemarin.classList.add('hidden');
                btnstatustelatkemarin.setAttribute('disabled', true);
                editstatuskemarin = 'telat';
              }
              const optionseditkemarin = {
                placement: 'center',
                backdrop: 'dynamic',
                backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
                closable: true,
              };

              const modaleditkemarin = new Modal(targeteditkemarin, optionseditkemarin);
              editopenkemarin.addEventListener('click', (e) => {
                e.preventDefault();
                modaleditkemarin.show();
              });
              closeeditkemarin.addEventListener('click', (e) => {
                e.preventDefault();
                modaleditkemarin.hide();
              });

              const allbuttonstatuskemarin = document.querySelectorAll('.btn-edit-status-kemarin');

              allbuttonstatuskemarin.forEach((button) => {
                button.addEventListener('click', (e) => {
                  e.preventDefault();
                  editstatuskemarin = e.target.innerHTML;
                  // Mengubah warna semua tombol menjadi warna default
                  allbuttonstatuskemarin.forEach((btn) => {
                    btn.classList.remove('bg-sky-300'); // Hapus kelas warna yang ingin diubah
                    btn.classList.add('bg-sky-100'); // Tambahkan kelas warna default
                  });

                  // Mengubah warna tombol yang diklik
                  e.target.classList.remove('bg-sky-100'); // Hapus kelas warna default
                  e.target.classList.add('bg-sky-300'); // Tambahkan kelas warna yang diinginkan
                });
              });

              Formtambahdataeditkemarin.addEventListener('submit', (e) => {
                e.preventDefault();
                loadingeditkemarin.classList.remove('hidden');
                btntexteditkemarin.classList.add('hidden');

                setTimeout(() => {
                  editdetaildatatodo(todos.id, judultugaskemarin, inputtanggalkemarin, timetodokemarin, deskripsitodokemarin, editstatuskemarin, messagedatakemarin, loadingeditkemarin, btntexteditkemarin, modaleditkemarin);
                }, 2000);
              });
            }
          });
        }
      });
    }
    async function tambahtodo() {
      const urltambahdata = `${baseUrl}/todo`;
      const titletodo = document.getElementById('judultugas').value;
      const descriptiontodo = document.getElementById('deskripsitodo').value;
      const deadlinetodo = document.getElementById('inputdeadline').value;
      const timetodo = document.getElementById('timetodo').value;
      const isoDateTimeString = `${deadlinetodo}T${timetodo}:00.000Z`;
      const dateObject = new Date(isoDateTimeString);
      const sqlDateTimeString = dateObject.toISOString().slice(0, 19).replace('T', ' ');

      const statustodo = 'menunggu';

      const bodydata = {
        title: titletodo,
        description: descriptiontodo,
        deadline: sqlDateTimeString,
        status: statustodo,
      };
      axios.post(urltambahdata, bodydata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          message.innerHTML = response.data.message;
          message.classList.remove('text-rose-700');
          message.classList.add('text-green-900');

          loadingtambah.classList.add('hidden');
          btntexttambah.classList.remove('hidden');
          setTimeout(time, 2000);
          function time() {
            modal.hide();
            window.location.reload();
          }
        })
        .catch((error) => {
          message.innerHTML = error.response.data.message;
          message.classList.add('text-rose-700');
          message.classList.remove('text-green-900');
          loadingtambah.classList.add('hidden');
          btntexttambah.classList.remove('hidden');
        });
    }

    async function editdetaildatatodo(id, judul, tanggal, waktu, deskripsi, status, messagediv, loadingdiv, btntextdiv, modaledit) {
      const urlgetdetail = `${baseUrl}/todo/${id}`;
      const judultugas = judul;
      const deskripsitugas = deskripsi;
      const deadlinetodo = tanggal;
      const timetodo = waktu;
      const statusedit = status;
      const judultugasfix = judultugas.value;
      const deskripsitugasfix = deskripsitugas.value;
      const deadlinetodofix = deadlinetodo.value;
      const timetodofix = timetodo.value;
      const messageedit = messagediv;
      const loadingedit = loadingdiv;
      const btntextedit = btntextdiv;
      const btnmodaledit = modaledit;
      const isoDateTimeString = `${deadlinetodofix}T${timetodofix}:00.000Z`;
      const dateObject = new Date(isoDateTimeString);
      const sqlDateTimeString = dateObject.toISOString().slice(0, 19).replace('T', ' ');

      const bodyeditdata = {
        title: judultugasfix,
        description: deskripsitugasfix,
        deadline: sqlDateTimeString,
        status: statusedit,
      };

      axios.put(urlgetdetail, bodyeditdata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        messageedit.innerHTML = response.data.message;
        messageedit.classList.remove('text-rose-700');
        messageedit.classList.add('text-green-900');

        loadingedit.classList.add('hidden');
        btntextedit.classList.remove('hidden');
        setTimeout(times, 1000);
        function times() {
          btnmodaledit.hide();
          window.location.reload();
        }
      }).catch((error) => {
        messageedit.innerHTML = error.response.data.message;
        loadingedit.classList.add('hidden');
        btntextedit.classList.remove('hidden');
        setTimeout(times, 2000);
        function times() {
          btnmodaledit.hide();
          window.location.reload();
        }
      });
    }
    async function deletetodo(id, messageinput, loadingdiv, textdelete, modaldiv) {
      const urldelete = `${baseUrl}/todo/${id}`;
      const messagedeletepop = messageinput;
      const loadingdeletepop = loadingdiv;
      const textdeletepop = textdelete;
      const modaldeletepop = modaldiv;

      axios.delete(urldelete, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        messagedeletepop.innerHTML = response.data.message;
        messagedeletepop.classList.add('text-green-800');
        messagedeletepop.classList.remove('text-rose-700');
        loadingdeletepop.classList.add('hidden');
        textdeletepop.classList.remove('hidden');
        setTimeout(time, 1000);
        function time() {
          modaldeletepop.hide();
          window.location.reload();
        }
      }).catch((error) => {
        messagedeletepop.innerHTML = error.response.data.message;
        messagedeletepop.classList.remove('text-green-800');
        messagedeletepop.classList.add('text-rose-700');
        loadingdeletepop.classList.add('hidden');
        textdeletepop.classList.remove('hidden');
        setTimeout(time, 1000);
        function time() {
          modaldeletepop.hide();
          window.location.reload();
        }
      });
    }
  },
};

export default TodoList;
