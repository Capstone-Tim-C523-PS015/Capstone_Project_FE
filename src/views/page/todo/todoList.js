import '../../../styles/index.css';
import 'flowbite';
import axios from 'axios';
import Api from '../../../scripts/global/api';
import TodoSource from '../../../scripts/data/todo-source';

const TodoList = {
  async render() {
    return `
  <div class="pb-10 lg:mx-6 hidden" id="empty-container">
    <div class="flex flex-col items-center justify-center">
      <div class=" border-black border-b-2 md:w-96 w-72 text-center">
        <h1 class="text-3xl font-bold text-sky-900">TODO LIST</h1>
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

  <div class="flex flex-row-reverse"> 
  <button id="add-button" type="button" class="flex flex-row items- justify-end text-white bg-sky-900 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-0.5 me-1 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800">
    <svg class="w-6 h-6 mr-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
    </svg>
    <p class="text-xl">Tambah</p
  </button>
</div>

  <div class="flex flex-row border-sky-950 border-b-2"> 
    <h1 class="flex flex-grow py-3 text-2xl font-bold" id="tanggal">Kemarin</h1>
  </div>

  <div class="flex w-[90%] gap-2 p-2 relative items-center justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-content-center" id="kemarin-container">


    </div>
  </div>

  <div class="flex flex-row border-sky-950 border-b-2"> 
    <h1 class="flex flex-grow py-3 text-2xl font-bold" id="tanggal">Hari Ini</h1>
  </div>

  <div class="flex w-[90%] gap-2 p-2 relative items-center justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-content-center" id="hari-ini-container">


    </div>
  </div>

  <div class="flex flex-row border-sky-950 border-b-2"> 
    <h1 class="flex flex-grow py-3 text-2xl font-bold" id="tanggal">Besok</h1>
  </div>

  <div class="flex w-[90%] gap-2 p-2 relative items-center justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-content-center" id="besok-container">


    </div>
  </div>
 
  <div class="modal px-2 py-2 px-2 py-2 w-[80%] left-[15%] border my-auto absolute hidden top-[20%] rounded-xl border-sky-900 bg-white" id="dateModal" tabindex="-1" role="dialog" aria-labelledby="dateModalLabel" aria-hidden="true">
  <span id="close" class="material-symbols-outlined absolute right-[-5px] bg-red-500 rounded-full text-white cursor-pointer top-[-10px]">close</span>
    <div class="modal-dialog m-8" role="document">
      <div class="modal-content px-6">
        <div class="modal-header flex text-center justify-center pt-4">
          <h5 class="modal-title text-sky-900 text-lg font-bold border-black border-b-2 px-4" id="dateModalLabel">Edit Aktivitas</h5>
        </div>
        <div class="mt-6 md:flex lg:flex">
          <div class="md:w-1/2 md:pr-6">
            <form action="" class="gap-2 w-full flex flex-col lg:gap-8">
              <div class="flex gap-2 flex-col lg:gap-2">
                <label for="" class="text-sm text-sky-900 font-bold">Judul Aktivitas</label>
                <input id="judul" type="text" class="w-full rounded-lg" placeholder="Meeting Project">
              </div>
              <div class="flex flex-col gap-2">
                <label for="" class="text-sm text-sky-900 font-bold">Kategori</label>
                <div class="flex gap-4">
                  <button id="btnSelesai" class="w-20 h-8 border rounded-lg ">Selesai</button>
                  <button id="btnRevisi" class="w-20 h-8 border rounded-lg ">Revisi</button>
                </div>
              </div>
              <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-2 order-1 lg:order-2 ">
                  <label for="" class="text-sm text-sky-900 font-bold">Tanggal</label>
                  <button class="flex items-center justify-center border border-sky-950 rounded-lg"><span id="formattedDate" class="w-full"></span><input type="date" id="customDate" class="w-11 border-none rounded-lg cursor-pointer"></button>
                </div>
                <div class="flex flex-col gap-2 order-2 lg:order-1 lg:w-32">
                  <label for="" class="text-sm text-sky-900 font-bold">Waktu</label>
                  <input type="time" id="customTime" class="border border-sky-950 rounded-lg cursor-pointer" placeholder="Meeting Project">
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
            <button class="bg-green-700 py-2 lg:w-full  text-white rounded-lg flex items-center justify-center  px-4" id="saveBtn">Simpan Aktivitas</button>
          </div>
        </div>
        <div class="modal-body" id="selectedDate"></div>
      </div>
    </div>
  </div>
  <div id="verifikasiDelete" class="px-2 py-2 w-[70%] left-[15%] border my-auto absolute hidden top-[40%] rounded-xl border-sky-900 bg-sky-100">
    <div class="flex flex-col gap-2 justify-center items-center">
      <h5 class="font-bold text-sky-900">Menghapus Tugas !!</h5>
      <p class="text-sm">Apakah anda yakin ingin menghapus Tugas ini ?</p>
      <div class="flex gap-2">
        <button id="batalDelete" class="font-bold p-1 rounded-lg border border-sky-950">Batal</button>
        <button id="btnHapus" class="bg-red-500 text-white font-bold p-1 rounded-lg">Hapus</button>
      </div>
    </div>
  </div>
  <div id="modalBackdrop" class="hidden fixed top-0 left-0 w-full h-full"></div>    

            `;
  },

  async afterRender() {
    const todos = await TodoSource.getAllTodos();
    console.log('Todos:', todos);

    const emptyContainer = document.querySelector('#empty-containter');

    const kemarinContainer = document.querySelector('#kemarin-container');
    const todayContainer = document.querySelector('#hari-ini-container');

    todos.forEach((todo) => {
      if (!todo) {
        emptyContainer.classList.remove('hidden');
      } else {
        if (todo.status === 'revisi') {
          kemarinContainer.innerHTML
          += `
          <div class="flex flex-col border-2 border-r-2 border-sky-900 p-4 m-4 rounded-2xl" id="kartu revisi">
            <div class="flex flex-col px-4 gap-2" >
              <div class="grid grid-cols-3 md:flex md:flex-row gap-3 justify-center">
                <button id="editEvent" class="editEvent" data-todo-id="${todo.id}">
                  <svg class="w-8 h-8 md:w-6 md:h-6 text-sky-900" aria-hidden="true" id="edit "xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
                    <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
                  </svg>
                </button>
                <button id="deleteEvent" class="deleteEvent" data-todo-id="${todo.id}">
                  <svg class="w-8 h-8 md:w-6 md:h-6  text-sky-900" aria-hidden="true" id="hapus "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                  </svg>
                </button>
                <h2 class="col-span-3 row-start-3 px-6 text-sky-950 text-2xl justify-center items-center text-center font-semibold" id="judulTodo" data-title="${todo.title}">${todo.title}</h2>
                <svg class="w-8 h-8 md:w-6 md:h-6  text-sky-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM1.866 8.832a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z"/>
                </svg>
              </div>
              <div class="flex flex-col md:flex-row py-4 gap-3" id="statusCategory" data-status="${todo.status}">
                <h3 class="text-sky-950 text-md font-bold">Status:</h3>
                <button type="button" id="btn-selesai" data-todo-id="${todo.id}" class="h-12 md:h-6 btn-selesai text-sky-900 bg-sky-100 hover:bg-sky-200 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-md md:text-sm px-3 py-0.5 text-center me-2 mb-2">Selesai</button>
                <button type="button" id="btn-revisi" data-todo-id="${todo.id}" class="h-12 md:h-6 btn-revisi text-white bg-rose-700 hover:bg-rose-800 border-2 border-sky-950/40 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-md md:text-sm px-3 py-0.5 text-center me-2 mb-2">Revisi</button>
              </div>
              <div class="flex flex-row gap-2 py-2 border-sky-950 border-b-2"">
                <h2 class="flex flex-grow text-sky-950 text font-semibold" id="deadline-tanggal" data-deadline="${todo.deadline}">
                  ${todo.deadline}
                </h2>
                <h2>
                  -1 Hari
                </h2> 
              </div>
              <div class="p-1">
                <p id="deskripsi" data-description="${todo.description}"> ${todo.description} </p>
              </div>
            </div>
          </div>
          `;
        } if (todo.status === 'selesai') {
          // console.log('selesai todo', todo);
          todayContainer.innerHTML
            += `
            <div class="flex flex-col border-2 border-r-2 border-sky-900 p-4 m-4 rounded-2xl" id="kartu revisi">
              <div class="flex flex-col px-4 gap-2" >
                <div class="grid grid-cols-3 md:flex md:flex-row gap-3 justify-center">
                  <button id="editEvent" class="editEvent" data-todo-id="${todo.id}">
                    <svg class="w-8 h-8 md:w-6 md:h-6  text-sky-900" aria-hidden="true" id="edit "xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                      <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
                      <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
                    </svg>
                  </button>
                  <button id="deleteEvent" class="deleteEvent" data-todo-id="${todo.id}">
                  <svg class="w-8 h-8 md:w-6 md:h-6  text-sky-900" aria-hidden="true" id="hapus "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                  </svg>
                </button> 
                  <h2 class="col-span-3 row-start-3 px-6 text-sky-950 text-2xl justify-center items-center font-semibold" id="judulTodo" data-title="${todo.title}">${todo.title}<h2>
                  <svg class="w-8 h-8 md:w-6 md:h-6  text-sky-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM1.866 8.832a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z"/>
                  </svg>
                </div>
                <div class="flex flex-col md:flex-row py-4 gap-3" id="statusCategory" data-status="${todo.status}">
                <h3 class="text-sky-950 text-md font-bold">Status:</h3>
                <button type="button" id="btn-selesai" data-todo-id="${todo.id}" data-status="selesai" class="btn-selesai h-12 md:h-6 text-sky-900 bg-sky-300 hover:bg-sky-400 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-md md:text-sm px-3 py-0.5 text-center me-2 mb-2">Selesai</button>
                <button type="button" id="btn-revisi" data-todo-id="${todo.id}" data-status="revisi" class="btn-revisi h-12 md:h-6 text-sky-900 bg-sky-100 hover:bg-sky-200 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-md md:text-sm px-3 py-0.5 text-center me-2 mb-2">Revisi</button>
              </div>  
                <div class="flex flex-row gap-2 py-2 border-sky-950 border-b-2"">
                  <h2 class="flex flex-grow text-sky-950 text font-semibold" id="deadline-tanggal" data-deadline="${todo.deadline}">
                    ${todo.deadline}
                  </h2>
                  <h2>
                    -1 Hari
                  </h2> 
                </div>
                <div class="p-1">
                  <p id="deskripsi" data-description="${todo.description}"> ${todo.description} </p>
                </div>
              </div>
            </div>
            `;
        }
      }
    });
  },
};

export default TodoList;
