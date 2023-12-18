/* eslint-disable no-inner-declarations */
/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable no-use-before-define */
import '../../../styles/index.css';
import axios from 'axios';
import { Modal } from 'flowbite';

const Histori = {
  async render() {
    return `
        <div class=" mt-14 hidden" id="empty-container">
          <div class="flex flex-col items-center justify-center">
            <div class="w-full flex flex-col justify-center gap-4 items-center">
              <img src="./svg/kosong.svg" class=" w-[230px] md:w-[450px]"/>
              <div class="text-center">
                <h2 class="text-sky-900 md:text-3xl text-sm font-bold">Tidak Ada Tugas atau Task yang sudah dikerjakan!</h2>
                <p class="text-sky-900 font-semibold text-xs md:text-lg">Silakan Selesaikan Todo-List Anda Terlebih dahulu!</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-row border-sky-950 border-b-2 mb-10" id="revisi"> 
          <h1 class="flex flex-grow py-3 text-2xl font-bold" id="tanggal">Revisi</h1>
          
        </div>

        <div class="flex justify-center">
          <div class="hidden justify-start flex-wrap gap-16 w-full" id="revisi-container">
          </div>
          <img src="./svg/loading-nobg.svg" class=" w-12" id="loading"></img>
        </div>

        <div class="flex flex-row border-sky-950 border-b-2 mb-10" id="selesai"> 
          <h1 class="flex flex-grow py-3 text-2xl font-bold" id="tanggal">Selesai</h1>
        </div>

        <div class="flex w-full p-2 relative items-center justify-center">
          <div class="hidden justify-start flex-wrap gap-16 w-full" id="selesai-container">
          </div>
          <img src="./svg/loading-nobg.svg" class=" w-12" id="loading2"></img>
        </div>
      `;
  },

  async afterRender() {
    const token = localStorage.getItem('token');
    if (token === null) {
      window.location.replace('./login.html#/masuk');
    }
    const baseurl = 'https://be-2.gunz.my.id';
    getalltodohistory();

    const emptyContainer = document.getElementById('empty-container');
    const revisiContainer = document.getElementById('revisi-container');
    const selesaiContainer = document.getElementById('selesai-container');

    function getalltodohistory() {
      const urlgettodohistory = `${baseurl}/todo/history`;

      axios.get(urlgettodohistory, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        const revisi = document.getElementById('revisi');
        const selesai = document.getElementById('selesai');
        const datarevisi = response.data.todos.revisi.data;
        const dataselesai = response.data.todos.selesai.data;
        const loading = document.getElementById('loading');
        const loading2 = document.getElementById('loading2');

        if (response.data.message === 'data kosong') {
          emptyContainer.classList.remove('hidden');
          revisi.classList.add('hidden');
          selesai.classList.add('hidden');
          loading.classList.add('hidden');
          loading2.classList.add('hidden');
        }
        setTimeout(time, 1000);
        function time() {
          loading.classList.add('hidden');
          loading2.classList.add('hidden');
          revisiContainer.classList.remove('hidden');
          revisiContainer.classList.add('flex');
          selesaiContainer.classList.add('flex');
          selesaiContainer.classList.remove('hidden');

          if (datarevisi.length === 0 && response.data.message !== 'data kosong') {
            revisiContainer.innerHTML += 'Tidak ada Todo yang perlu direvisi';
            revisiContainer.classList.remove('hidden', 'justify-start');
            revisiContainer.classList.add('flex', 'justify-center');
          }
          if (dataselesai.length === 0 && response.data.message !== 'data kosong') {
            selesaiContainer.innerHTML += 'Tidak ada Todo yang sudah diSelesai';
            selesaiContainer.classList.remove('hidden', 'justify-start');
            selesaiContainer.classList.add('flex', 'justify-center');
          }

          datarevisi.forEach((todos) => {
            const dateString = todos.deadline;
            const dateObject = new Date(dateString);
            const hours = dateObject.getHours();
            const minutes = dateObject.getMinutes();
            const formattedHours = hours < 10 ? `0${hours}` : hours;
            const formatedminutes = minutes < 10 ? `0${minutes}` : minutes;
            const timedeadline = `${formattedHours}:${formatedminutes}`;
            const tanggaldeadline = dateObject.toLocaleDateString('en-CA');
            const options = {
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            };
            const dayName = dateObject.toLocaleDateString('id-ID', options);
            const deadline = dayName;
            revisiContainer.innerHTML
              += `
              <div class=" max-w-xs md:max-w-sm w-full p-6 border border-sky-900 rounded-lg shadow" id="kartu revisi">
                <div class="flex flex-col px-4 gap-2" >
                  <div class="flex gap-3 justify-between">
                    <button id="editopeneditrevisi${todos.id}" class="editEvent" data-todo-id="${todos.id}">
                      <svg class="w-5 h-5  text-sky-900" aria-hidden="true" id="edit "xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
                        <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
                      </svg>
                    </button>
                    <h2 class="col-span-3 row-start-3 px-6 text-sky-950 text-xl justify-center text-center items-center font-bold" id="judulTodo" data-title="${todos.title}">${todos.title}</h2>
                    <button id="btnopendelete${todos.id}">
                      <svg class="w-5 md:h-5  text-sky-900" aria-hidden="true" id="hapus "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                      </svg>
                    </button>
                  </div>
                  <div class="flex py-4 gap-3">
                    <h3 class="text-sky-950 text-md font-bold">Status:</h3>
                    <span  id="btn-dikerjakan" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-300 hover:bg-sky-200 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Dikerjakan</span>
                    <span  id="btn-selesai" data-todo-id="${todos.id}" class=" btn-selesai text-sky-900 bg-sky-100 hover:bg-sky-200 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Selesai</span>
                    <span id="btn-revisi" data-todo-id="${todos.id}" class=" btn-revisi text-white bg-rose-700 hover:bg-rose-800 border-2 border-sky-950/40 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-xs  px-2 py-1 text-center ">Revisi</span>
                  </div>
                  <div class="flex justify-between gap-2 py-2 border-sky-950 border-b-2"">
                    <h2 class="flex flex-grow text-sky-950 text font-semibold" id="deadline-tanggal" data-deadline="${deadline}">
                      ${deadline}
                    </h2>
                    <h2 id="countdown" class="text-sm text-sky-950 font-semibold">
                      ${timedeadline}
                    </h2> 
                  </div>
                  <div class="p-1">
                    <p id="deskripsi" data-description="${todos.description}"> ${todos.description} </p>
                  </div>
                </div>
              </div>

              <!-- modal delete -->
              <div id="targetmodaldelete${todos.id}" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <div class="relative bg-sky-100 rounded-lg shadow">
                        <button type="button" id="btnclose${todos.id}" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
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
                            <div class="flex my-2 justify-center text-center w-full">
                              <p class="max-w-xs text-sm font-semibold text-center error-message text-rose-700" id="messageinputdelete${todos.id}"></p>
                            </div>
                          <button id="iyadelete${todos.id}" data-modal-hide="popup-modal" id="deleteuser" type="button"
                            class=" text-sky-100 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs md:text-sm inline-flex items-center md:px-5 md:py-2.5 px-3 py-2 text-center justify-center w-28 md:w-36 ">
                            <P id="textdeleterevisi${todos.id}" class="text-center"">Iya, saya yakin</P>
                            <img id="loadingdelete${todos.id}" src="./svg/loading-nobg.svg" class=" hidden  w-[15px]"></img>
                          </button>
                          <button id="btnbatal${todos.id}" data-modal-hide="popup-modal" type="button"
                            class="text-sky-100 bg-sky-900 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-sky-200 text-xs md:text-sm font-medium md:px-5 md:py-2.5 px-3 py-2 focus:z-10">Tidak,
                            Batal</button>
                        </div>
                    </div>
                </div>
              </div>


              <!-- modal edit -->
              <div id="targeteditrevisi${todos.id}" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div class="relative w-full max-w-2xl max-h-full">
                  <!-- Modal content -->
                  <div class="relative bg-sky-100 rounded-lg shadow">
                      <!-- Modal header -->
                      <div class="flex items-center text-center justify-between p-4 border-b border-sky-900 rounded-t ">
                          <h3 class="text-xl font-semibold text-sky-900 text-center">
                              Edit Tugas
                          </h3>
                          <button type="button" id="editcloserevisi${todos.id}" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
                              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                              </svg>
                              <span class="sr-only">Close modal</span>
                          </button>
                      </div>
                      <!-- Modal body -->
                      <div class="p-6 space-y-6">
                        <form id="Formeditrevisi${todos.id}" class="gap-2 lg:gap-8">
                          <div class="gap-2 w-full flex flex-col md:flex-row flex-wrap md:flex-nowrap md:justify-around lg:gap-8">
                            <div class="flex flex-col gap-3">
                              <div class="flex gap-2 flex-col lg:gap-2">
                                <label for="" class="text-sm text-sky-900 font-bold">Judul Tugas</label>
                                <input required id="judultugasrevisi${todos.id}" type="text" class="text-sm font-semibold w-full rounded-lg" placeholder="Meeting Project" required>
                              </div>
                              <div class="flex py-4 flex-wrap gap-3">
                                <h3 class="text-sky-950 text-md font-bold">Status:</h3>
                                <button type="button" id="btn-selesai${todos.id}" class=" btn-edit-status-revisi text-sky-900 bg-sky-100 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Selesai</button>
                                <button type="button" id="btn-revisi${todos.id}"  class=" btn-edit-status-revisi text-sky-900 bg-sky-100 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Revisi</button>
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
                                    <input required type="date" id="inputtanggalrevisi${todos.id}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="Pilih Tanggal" required>
                                  </div>
                                </div>
                                <div class="flex flex-col gap-2 order-2 lg:order-1 lg:w-32">
                                  <label for="" class="text-sm text-sky-900 font-bold">Waktu</label>
                                  <input required type="time" id="timetodorevisi${todos.id}" class="border border-sky-950 rounded-lg cursor-pointer" placeholder="" required>
                                </div>
                              </div>
                            </div>
                            <div class="flex flex-col gap-2">
                              <div class="flex flex-col gap-2 w-full">
                                <label for="myTextarea" class="text-sm text-sky-900 font-bold">Deskripsi</label>
                                <textarea required id="deskripsitodorevisi${todos.id}" name="myTextarea" placeholder="Maks 500 Karakter" class="mt-2 font-semibold text-sm rounded-xl px-2 py-1 w-full h-44"></textarea>
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
                              <p class="max-w-xs text-sm font-semibold text-center error-message text-rose-700" id="messageinputedit${todos.id}"></p>
                            </div>
                            <button type="submit" id="kirimeditrevisi${todos.id}" class="text-white inline-flex justify-center   items-center bg-sky-800 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-48 h-10 " id="kirimtodo">
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
            setTimeout(modaldelete, 1000);
            function modaldelete() {
              const btndelete = document.getElementById(`btnopendelete${todos.id}`);
              const targetbtn = document.getElementById(`targetmodaldelete${todos.id}`);
              const closebtn = document.getElementById(`btnclose${todos.id}`);
              const iyadeletebtn = document.getElementById(`iyadelete${todos.id}`);
              const batalbtn = document.getElementById(`btnbatal${todos.id}`);
              const messageinputdelete = document.getElementById(`messageinputdelete${todos.id}`);
              const loadingdelete = document.getElementById(`loadingdelete${todos.id}`);
              const textdelete = document.getElementById(`textdeleterevisi${todos.id}`);

              const optionsdelete = {
                placement: 'center',
                backdrop: 'dynamic',
                backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
                closable: true,
              };

              const modaldelete = new Modal(targetbtn, optionsdelete);
              btndelete.addEventListener('click', () => {
                modaldelete.show();
              });
              closebtn.addEventListener('click', () => {
                modaldelete.hide();
              });
              batalbtn.addEventListener('click', () => {
                modaldelete.hide();
              });
              iyadeletebtn.addEventListener('click', () => {
                loadingdelete.classList.remove('hidden');

                textdelete.classList.add('hidden');
                setTimeout(() => {
                  deletetodo(todos.id, messageinputdelete, loadingdelete, textdelete, modaldelete);
                }, 2000);
              });
            }
            setTimeout(modaleditrevisi, 1000);
            function modaleditrevisi() {
              const Formtambahdataeditrevisi = document.getElementById(`Formeditrevisi${todos.id}`);
              const editopenrevisi = document.getElementById(`editopeneditrevisi${todos.id}`);
              const targeteditrevisi = document.getElementById(`targeteditrevisi${todos.id}`);
              const closeeditrevisi = document.getElementById(`editcloserevisi${todos.id}`);
              const messagedatarevisi = document.getElementById(`messageinputedit${todos.id}`);
              const loadingeditrevisi = document.getElementById(`loadingedit${todos.id}`);
              const btntexteditrevisi = document.getElementById(`btntextedit${todos.id}`);

              // button change status
              const btneditrevisi = document.getElementById(`btn-revisi${todos.id}`);
              const btneditselesai = document.getElementById(`btn-selesai${todos.id}`);

              const judultugasrevisi = document.getElementById(`judultugasrevisi${todos.id}`);
              judultugasrevisi.value = `${todos.title}`;
              const inputtanggalrevisi = document.getElementById(`inputtanggalrevisi${todos.id}`);
              inputtanggalrevisi.value = tanggaldeadline;
              const timetodorevisi = document.getElementById(`timetodorevisi${todos.id}`);
              timetodorevisi.value = timedeadline;
              const deskripsitodorevisi = document.getElementById(`deskripsitodorevisi${todos.id}`);
              deskripsitodorevisi.value = `${todos.description}`;
              let editstatusrevisi = '';
              const optionseditrevisi = {
                placement: 'center',
                backdrop: 'dynamic',
                backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
                closable: true,
              };

              const modaleditrevisi = new Modal(targeteditrevisi, optionseditrevisi);
              editopenrevisi.addEventListener('click', (e) => {
                e.preventDefault();
                modaleditrevisi.show();
              });
              closeeditrevisi.addEventListener('click', (e) => {
                e.preventDefault();
                modaleditrevisi.hide();
              });

              const allbuttonstatusrevisi = document.querySelectorAll('.btn-edit-status-revisi');

              allbuttonstatusrevisi.forEach((button) => {
                button.addEventListener('click', (e) => {
                  e.preventDefault();
                  editstatusrevisi = e.target.innerHTML;

                  allbuttonstatusrevisi.forEach((btn) => {
                    btn.classList.remove('bg-sky-300');
                    btn.classList.add('bg-sky-100');
                  });

                  // Mengubah warna tombol yang diklik
                  e.target.classList.remove('bg-sky-100');
                  e.target.classList.add('bg-sky-300');
                });
              });

              if (todos.status === 'revisi') {
                btneditrevisi.classList.add('bg-sky-300');
                btneditrevisi.classList.remove('bg-sky-100');
                editstatusrevisi = 'revisi';
              } else if (todos.status === 'selesai') {
                btneditselesai.classList.add('bg-sky-300');
                btneditselesai.classList.remove('bg-sky-100');
                editstatusrevisi = 'selesai';
              }

              Formtambahdataeditrevisi.addEventListener('submit', (e) => {
                e.preventDefault();
                loadingeditrevisi.classList.remove('hidden');
                btntexteditrevisi.classList.add('hidden');

                setTimeout(() => {
                  editdetaildatatodo(todos.id, judultugasrevisi, inputtanggalrevisi, timetodorevisi, deskripsitodorevisi, editstatusrevisi, messagedatarevisi, loadingeditrevisi, btntexteditrevisi, modaleditrevisi);
                }, 2000);
              });
            }
          });
          dataselesai.forEach((todos) => {
            const dateString = todos.deadline;
            const dateObject = new Date(dateString);
            const hours = dateObject.getHours();
            const minutes = dateObject.getMinutes();
            const formattedHours = hours < 10 ? `0${hours}` : hours;
            const formatedminutes = minutes < 10 ? `0${minutes}` : minutes;
            const timedeadline = `${formattedHours}:${formatedminutes}`;
            const tanggaldeadline = dateObject.toLocaleDateString('en-CA');
            const options = {
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            };
            const dayName = dateObject.toLocaleDateString('id-ID', options);
            const deadline = dayName;
            selesaiContainer.innerHTML
              += `
                <div class=" max-w-xs md:max-w-sm w-full p-6 border border-sky-900 rounded-lg shadow" id="kartu revisi">
                  <div class="flex flex-col px-4 gap-2" >
                    <div class="flex gap-3 justify-between">
                      <button id="editopeneditselesai${todos.id}" class="deleteEvent" data-todo-id="${todos.id}">
                        <svg class="w-5 h-5  text-sky-900" aria-hidden="true" id="edit "xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                          <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
                          <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
                        </svg>
                      </button> 
                      <h2 class="col-span-3 row-start-3 px-6 text-sky-950 text-xl justify-center items-center text-center font-bold" id="judulTodo" data-title="${todos.title}">${todos.title}</h2>
                      <button id="btnopendeleteselesai${todos.id}">
                        <svg class="w-5 md:h-5 text-sky-900" aria-hidden="true" id="hapus "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                        </svg>
                      </button>
                    </div>
                    <div class="flex py-4 gap-3">
                      <h3 class="text-sky-950 text-md font-bold">Status:</h3>
                      <span id="btn-selesai" data-todo-id="${todos.id}" data-status="selesai" class="btn-selesai  text-sky-100 bg-green-800 border-2 border-green-950/40 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-xs px-3 py-0.5 text-center ">Selesai</span>
                      <span id="btn-revisi" data-todo-id="${todos.id}" data-status="revisi" class="btn-revisi  text-sky-900 bg-sky-100  border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs px-3 py-0.5 text-center">Revisi</span>
                    </div>
                    <div class="flex justify-between gap-2 py-2 border-sky-950 border-b-2"">
                      <h2 class="flex flex-grow text-sky-950 text font-semibold" id="deadline-tanggal" data-deadline="${deadline}">
                        ${deadline}
                      </h2>
                      <h2 id="countdown" class="text-sm text-sky-950 font-semibold">
                        ${timedeadline}
                      </h2> 
                    </div>
                    <div class="p-1">
                      <p id="deskripsi" data-description="${todos.description}"> ${todos.description} </p>
                    </div>
                  </div>
                </div>

                <!-- modal delete -->
              <div id="targetmodaldeleteselesai${todos.id}" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <div class="relative bg-sky-100 rounded-lg shadow">
                        <button type="button" id="btncloseselesai${todos.id}" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
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
                            <div class="flex my-2 justify-center text-center w-full">
                              <p class="max-w-xs text-sm font-semibold text-center error-message text-rose-700" id="messageinputdeleteselesai${todos.id}"></p>
                            </div>
                          <button id="iyadeleteselesai${todos.id}" data-modal-hide="popup-modal" id="deleteuser" type="button"
                            class=" w-28 md:w-36 text-sky-100 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs md:text-sm inline-flex items-center md:px-5 md:py-2.5 px-3 py-2 justify-center">
                            <P id="textdeleteselesai${todos.id}" class="text-center">Iya, saya yakin</P>
                            <img id="loadingdeleteselesai${todos.id}" src="./svg/loading-nobg.svg" class=" hidden w-[15px]"></img>
                          </button>
                          <button id="btnbatalselesai${todos.id}"   data-modal-hide="popup-modal" type="button"
                            class="text-sky-100 bg-sky-900 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-sky-200 text-xs md:text-sm font-medium md:px-5 md:py-2.5 px-3 py-2 focus:z-10">Tidak,
                            Batal</button>
                        </div>
                    </div>
                </div>
              </div>


                <!-- modal edit -->
                <div id="targeteditselesai${todos.id}" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative w-full max-w-2xl max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-sky-100 rounded-lg shadow">
                        <!-- Modal header -->
                      <div class="flex items-center text-center justify-between p-4 border-b border-sky-900 rounded-t ">
                          <h3 class="text-xl font-semibold text-sky-900 text-center">
                              Edit Tugas
                          </h3>
                          <button type="button" id="editcloseselesai${todos.id}" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
                              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                              </svg>
                              <span class="sr-only">Close modal</span>
                          </button>
                      </div>
                      <!-- Modal body -->
                      <div class="p-6 space-y-6">
                        <form id="Formeditselesai${todos.id}" class="gap-2 lg:gap-8">
                          <div class="gap-2 w-full flex flex-col md:flex-row flex-wrap md:flex-nowrap md:justify-around lg:gap-8">
                            <div class="flex flex-col gap-3">
                              <div class="flex gap-2 flex-col lg:gap-2">
                                <label for="" class="text-sm text-sky-900 font-bold">Judul Tugas</label>
                                <input required id="judultugasselesai${todos.id}" type="text" class="text-sm font-semibold w-full rounded-lg" placeholder="Meeting Project" required>
                              </div>
                              <div class="flex py-4 flex-wrap gap-3">
                                <h3 class="text-sky-950 text-md font-bold">Status:</h3>
                                <button type="button" id="btn-edit-selesai${todos.id}" class=" btn-edit-status-selesai text-sky-900 bg-sky-100 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Selesai</button>
                                <button type="button" id="btn-edit-revisi${todos.id}"  class=" btn-edit-status-selesai text-sky-900 bg-sky-100 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-xs  px-2 py-1 text-center">Revisi</button>
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
                                    <input required type="date" id="inputtanggalselesai${todos.id}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="Pilih Tanggal" required>
                                  </div>
                                </div>
                                <div class="flex flex-col gap-2 order-2 lg:order-1 lg:w-32">
                                  <label for="" class="text-sm text-sky-900 font-bold">Waktu</label>
                                  <input required type="time" id="timetodoselesai${todos.id}" class="border border-sky-950 rounded-lg cursor-pointer" placeholder="" required>
                                </div>
                              </div>
                            </div>
                            <div class="flex flex-col gap-2">
                              <div class="flex flex-col gap-2 w-full">
                                <label for="myTextarea" class="text-sm text-sky-900 font-bold">Deskripsi</label>
                                <textarea required id="deskripsitodoselesai${todos.id}" name="myTextarea" placeholder="Maks 500 Karakter" class="mt-2 font-semibold text-sm rounded-xl px-2 py-1 w-full h-44"></textarea>
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
                              <p class="max-w-xs text-sm font-semibold text-center error-message text-rose-700" id="messageinputeditselesai${todos.id}"></p>
                            </div>
                            <button type="submit" id="kirimeditdikerjakan${todos.id}" class="text-white inline-flex justify-center   items-center bg-sky-800 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-48 h-10 " id="kirimtodo">
                              <img id="loadingeditselesai${todos.id}" src="./svg/loading-nobg.svg" class=" hidden w-5"></img>
                                <div class="flex gap-x-1 " id="btntexteditselesai${todos.id}">
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

            setTimeout(modaldeleteselesai, 1000);
            function modaldeleteselesai() {
              const btndeleteselesai = document.getElementById(`btnopendeleteselesai${todos.id}`);
              const targetbtnselesai = document.getElementById(`targetmodaldeleteselesai${todos.id}`);
              const closebtnselesai = document.getElementById(`btncloseselesai${todos.id}`);
              const iyadeletebtnselesai = document.getElementById(`iyadeleteselesai${todos.id}`);
              const batalbtnselesai = document.getElementById(`btnbatalselesai${todos.id}`);
              const messageinputdeleteselesai = document.getElementById(`messageinputdeleteselesai${todos.id}`);
              const loadingdeleteselesai = document.getElementById(`loadingdeleteselesai${todos.id}`);
              const textdeleteselesai = document.getElementById(`textdeleteselesai${todos.id}`);

              const optionsdeleteselesai = {
                placement: 'center',
                backdrop: 'dynamic',
                backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
                closable: true,
              };

              const modaldeleteselesai = new Modal(targetbtnselesai, optionsdeleteselesai);
              btndeleteselesai.addEventListener('click', () => {
                modaldeleteselesai.show();
              });
              closebtnselesai.addEventListener('click', () => {
                modaldeleteselesai.hide();
              });
              batalbtnselesai.addEventListener('click', () => {
                modaldeleteselesai.hide();
              });
              iyadeletebtnselesai.addEventListener('click', () => {
                loadingdeleteselesai.classList.remove('hidden');
                textdeleteselesai.classList.add('hidden');
                setTimeout(() => {
                  deletetodo(todos.id, messageinputdeleteselesai, loadingdeleteselesai, textdeleteselesai, modaldeleteselesai);
                }, 2000);
              });
            }
            setTimeout(modaleditselesai, 1000);
            function modaleditselesai() {
              const Formtambahdataeditselesai = document.getElementById(`Formeditselesai${todos.id}`);
              const editopenselesai = document.getElementById(`editopeneditselesai${todos.id}`);
              const targeteditselesai = document.getElementById(`targeteditselesai${todos.id}`);
              const closeeditselesai = document.getElementById(`editcloseselesai${todos.id}`);
              const messagedataselesai = document.getElementById(`messageinputeditselesai${todos.id}`);
              const loadingeditselesai = document.getElementById(`loadingeditselesai${todos.id}`);
              const btntexteditselesai = document.getElementById(`btntexteditselesai${todos.id}`);

              // button change status
              const btnrevisi = document.getElementById(`btn-edit-revisi${todos.id}`);
              const btnselesai = document.getElementById(`btn-edit-selesai${todos.id}`);

              const judultugasselesai = document.getElementById(`judultugasselesai${todos.id}`);
              judultugasselesai.value = `${todos.title}`;
              const inputtanggalselesai = document.getElementById(`inputtanggalselesai${todos.id}`);
              inputtanggalselesai.value = tanggaldeadline;
              const timetodoselesai = document.getElementById(`timetodoselesai${todos.id}`);
              timetodoselesai.value = timedeadline;
              const deskripsitodoselesai = document.getElementById(`deskripsitodoselesai${todos.id}`);
              deskripsitodoselesai.value = `${todos.description}`;
              let editstatusselesai = '';
              const optionseditselesai = {
                placement: 'center',
                backdrop: 'dynamic',
                backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
                closable: true,
              };

              const modaleditselesai = new Modal(targeteditselesai, optionseditselesai);
              editopenselesai.addEventListener('click', (e) => {
                e.preventDefault();
                modaleditselesai.show();
              });
              closeeditselesai.addEventListener('click', (e) => {
                e.preventDefault();
                modaleditselesai.hide();
              });

              const allbuttonstatusselesai = document.querySelectorAll('.btn-edit-status-selesai');

              allbuttonstatusselesai.forEach((button) => {
                button.addEventListener('click', (e) => {
                  e.preventDefault();
                  editstatusselesai = e.target.innerHTML;

                  allbuttonstatusselesai.forEach((btn) => {
                    btn.classList.remove('bg-sky-300');
                    btn.classList.add('bg-sky-100');
                  });

                  // Mengubah warna tombol yang diklik
                  e.target.classList.remove('bg-sky-100');
                  e.target.classList.add('bg-sky-300');
                });
              });

              if (todos.status === 'revisi') {
                btnrevisi.classList.add('bg-sky-300');
                btnrevisi.classList.remove('bg-sky-100');
                editstatusselesai = 'revisi';
              } else if (todos.status === 'selesai') {
                btnselesai.classList.add('bg-sky-300');
                btnselesai.classList.remove('bg-sky-100');
                editstatusselesai = 'selesai';
              }

              Formtambahdataeditselesai.addEventListener('submit', (e) => {
                e.preventDefault();
                loadingeditselesai.classList.remove('hidden');
                btntexteditselesai.classList.add('hidden');

                setTimeout(() => {
                  editdetaildatatodo(todos.id, judultugasselesai, inputtanggalselesai, timetodoselesai, deskripsitodoselesai, editstatusselesai, messagedataselesai, loadingeditselesai, btntexteditselesai, modaleditselesai);
                }, 2000);
              });
            }
          });
        }
      }).catch((error) => {
        console.log(error);
      });
    }
    async function deletetodo(id, messageinput, loadingdiv, textdelete, modaldelete) {
      const urldelete = `${baseurl}/todo/${id}`;
      const message = messageinput;
      const loading = loadingdiv;
      const text = textdelete;
      const modal = modaldelete;

      axios.delete(urldelete, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        message.innerHTML = response.data.message;
        message.classList.add('text-green-800');
        message.classList.remove('text-rose-700');
        loading.classList.add('hidden');
        text.classList.remove('hidden');
        setTimeout(time, 1000);
        function time() {
          modal.hide();
          window.location.reload();
        }
      }).catch((error) => {
        message.innerHTML = error.response.data.message;
        message.classList.remove('text-green-800');
        message.classList.add('text-rose-700');
        loading.classList.add('hidden');
        text.classList.remove('hidden');
        setTimeout(time, 1000);
        function time() {
          modal.hide();
          window.location.reload();
        }
      });
    }

    async function editdetaildatatodo(id, judul, tanggal, waktu, deskripsi, status, messagediv, loadingdiv, btntextdiv, modaledit) {
      const urlgetdetail = `${baseurl}/todo/${id}`;
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
  },
};

export default Histori;
