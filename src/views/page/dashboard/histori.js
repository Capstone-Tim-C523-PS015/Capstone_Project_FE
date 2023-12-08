import '../../../styles/index.css';

const Histori = {
  async render() {
    return `
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

  <div class="flex flex-row border-sky-950 border-b-2"> 
    <h1 class="flex flex-grow py-3 text-2xl font-bold" id="tanggal">Revisi</h1>
  </div>

  <div class="flex flex-col gap-2 p-2">
    <div class="flex flex-row gap-4 items-center justify-center" id="revisi-container">

      <div class="flex flex-col border-2 border-r-2 border-sky-900 p-4 m-4 rounded-2xl" id="kartu revisi">
        <div class="flex flex-col px-4 gap-2" >
          <div class="flex flex-row gap-3 justify-center">
            <button>
              <svg class="w-6 h-6 text-sky-900" aria-hidden="true" id="edit "xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
                <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
              </svg>
            </button>
            <button id="deleteEvent">
            <svg class="w-6 h-6 text-sky-900" aria-hidden="true" id="hapus "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
            </svg>
          </button>
            <h2 class="px-6 text-sky-950 text-2xl justify-center items-center font-semibold" id="judulTodo">Membuat Desain<h2>
            <svg class="w-6 h-6 text-sky-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM1.866 8.832a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z"/>
            </svg>
          </div>
          <div class="flex flex-row py-4 gap-3">
            <h3 class="text-sky-950 text-md font-bold">Status:</h3>
            <button type="button" id="btn-selesai" class="text-sky-900 bg-sky-100 hover:bg-sky-200 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-sm px-3 py-0.5 text-center me-2 mb-2">Selesai</button>
            <button type="button" id="btn-revisi" class="text-white bg-rose-700 hover:bg-rose-800 border-2 border-sky-950/40 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-sm px-3 py-0.5 text-center me-2 mb-2">Revisi</button>
          </div>
          <div class="flex flex-row gap-2 py-2 border-sky-950 border-b-2"">
            <h2 class="flex flex-grow text-sky-950 text font-semibold" id="deadline-tanggal">
              Senin, 20 November 2023 - 23.59 WIB
            </h2>
            <h2>
              -1 Hari
            </h2>
          </div>
          <div class="p-1">
            <p> Deskripsi </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col border-2 border-r-2 border-sky-900 p-4 m-4 rounded-2xl" id="kartu revisi">
        <div class="flex flex-col px-4 gap-2" >
          <div class="flex flex-row gap-3 justify-center">
          <button>
          <svg class="w-6 h-6 text-sky-900" aria-hidden="true" id="edit "xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
            <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
          </svg>
        </button>
        <button id="deleteEvent">
        <svg class="w-6 h-6 text-sky-900" aria-hidden="true" id="hapus "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
        </svg>
      </button>
            <h2 class="px-6 text-sky-950 text-2xl justify-center items-center font-semibold" id="judulTodo">Membuat Desain<h2>
            <svg class="w-6 h-6 text-sky-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM1.866 8.832a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z"/>
            </svg>
          </div>
          <div class="flex flex-row py-4 gap-3">
            <h3 class="text-sky-950 text-md font-bold">Status:</h3>
            <button type="button" id="btn-selesai" class="text-sky-900 bg-sky-100 hover:bg-sky-200 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-sm px-3 py-0.5 text-center me-2 mb-2">Selesai</button>
            <button type="button" id="btn-revisi" class="text-white bg-rose-700 hover:bg-rose-800 border-2 border-sky-950/40 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-sm px-3 py-0.5 text-center me-2 mb-2">Revisi</button>
          </div>
          <div class="flex flex-row gap-2 py-2 border-sky-950 border-b-2"">
            <h2 class="flex flex-grow text-sky-950 text font-semibold" id="deadline-tanggal">
              Senin, 20 November 2023 - 23.59 WIB
            </h2>
            <h2>
              -1 Hari
            </h2>
          </div>
          <div class="p-1">
            <p> Deskripsi </p>
          </div>
        </div>
      </div>


      <div class="flex flex-col border-2 border-r-2 border-sky-900 p-4 m-4 rounded-2xl" id="kartu revisi">
        <div class="flex flex-col px-4 gap-2" >
          <div class="flex flex-row gap-3 justify-center">
          <button>
            <svg class="w-6 h-6 text-sky-900" aria-hidden="true" id="edit "xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
              <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
            </svg>
          </button>
          <button id="deleteEvent">
            <svg class="w-6 h-6 text-sky-900" aria-hidden="true" id="hapus "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
            </svg>
          </button>
            <h2 class="px-6 text-sky-950 text-2xl justify-center items-center font-semibold" id="judulTodo">Membuat Desain<h2>
            <svg class="w-6 h-6 text-sky-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM1.866 8.832a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z"/>
            </svg>
          </div>
          <div class="flex flex-row py-4 gap-3">
            <h3 class="text-sky-950 text-md font-bold">Status:</h3>
            <button type="button" id="btn-selesai" class="text-sky-900 bg-sky-100 hover:bg-sky-200 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-sm px-3 py-0.5 text-center me-2 mb-2">Selesai</button>
            <button type="button" id="btn-revisi" class="text-white bg-rose-700 hover:bg-rose-800 border-2 border-sky-950/40 focus:ring-4 focus:ring-red-300 font-bold rounded-lg text-sm px-3 py-0.5 text-center me-2 mb-2">Revisi</button>
          </div>
          <div class="flex flex-row gap-2 py-2 border-sky-950 border-b-2"">
            <h2 class="flex flex-grow text-sky-950 text font-semibold" id="deadline-tanggal">
              Senin, 20 November 2023 - 23.59 WIB
            </h2>
            <h2>
              -1 Hari
            </h2>
          </div>
          <div class="p-1">
            <p> Deskripsi </p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="flex flex-row border-sky-950 border-b-2"> 
    <h1 class="flex flex-grow py-3 text-2xl font-bold" id="tanggal">Selesai</h1>
  </div>

  <div class="flex flex-col gap-2 p-2">
    <div class="flex flex-row gap-4 items-center justify-center" id="selesai-container">
      <div class="flex flex-col border-2 border-r-2 border-sky-900 p-4 m-4 rounded-2xl" id="kartu selesai">
        <div class="flex flex-col px-4 gap-2" >
          <div class="flex flex-row gap-3 justify-center">
          <button id="editEvent" class="editEvent">
            <svg class="w-6 h-6 text-sky-900" aria-hidden="true" id="edit "xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
              <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
            </svg>
          </button>
          <button id="deleteEvent">
            <svg class="w-6 h-6 text-sky-900" aria-hidden="true" id="hapus "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
            </svg>
          </button>
            <h2 class="px-6 text-sky-950 text-2xl justify-center items-center font-semibold" id="judulTodo">Membuat Desain<h2>
            <svg class="w-6 h-6 text-sky-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM1.866 8.832a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z"/>
            </svg>
          </div>
          <div class="flex flex-row py-4 gap-3">
            <h3 class="text-sky-950 text-md font-bold">Status:</h3>
            <button type="button" id="btn-selesai" class="text-sky-900 bg-sky-300 hover:bg-sky-400 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-sm px-3 py-0.5 text-center me-2 mb-2">Selesai</button>
            <button type="button" id="btn-revisi" class="text-sky-900 bg-sky-100 hover:bg-sky-200 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-sm px-3 py-0.5 text-center me-2 mb-2">Revisi</button>
          </div>
          <div class="flex flex-row gap-2 py-2 border-sky-950 border-b-2"">
            <h2 class="flex flex-grow text-sky-950 text font-semibold" id="deadline-tanggal">
              Senin, 20 November 2023 - 23.59 WIB
            </h2>
            <h2>
              -1 Hari
            </h2>
          </div>
          <div class="p-1">
            <p> Deskripsi </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col border-2 border-r-2 border-sky-900 p-4 m-4 rounded-2xl" id="kartu selesai">
        <div class="flex flex-col px-4 gap-2" >
          <div class="flex flex-row gap-3 justify-center">
          <button id="editEvent" class="editEvent">
            <svg class="w-6 h-6 text-sky-900" aria-hidden="true" id="edit "xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
              <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
            </svg>
          </button>
          <button id="deleteEvent">
            <svg class="w-6 h-6 text-sky-900" aria-hidden="true" id="hapus "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
            </svg>
          </button>
            <h2 class="px-6 text-sky-950 text-2xl justify-center items-center font-semibold" id="judulTodo">Membuat Desain<h2>
            <svg class="w-6 h-6 text-sky-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM1.866 8.832a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z"/>
            </svg>
          </div>
          <div class="flex flex-row py-4 gap-3">
            <h3 class="text-sky-950 text-md font-bold">Status:</h3>
            <button type="button" id="btn-selesai" class="text-sky-900 bg-sky-300 hover:bg-sky-400 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-sm px-3 py-0.5 text-center me-2 mb-2">Selesai</button>
            <button type="button" id="btn-revisi" class="text-sky-900 bg-sky-100 hover:bg-sky-200 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-sm px-3 py-0.5 text-center me-2 mb-2">Revisi</button>
          </div>
          <div class="flex flex-row gap-2 py-2 border-sky-950 border-b-2"">
            <h2 class="flex flex-grow text-sky-950 text font-semibold" id="deadline-tanggal">
              Senin, 20 November 2023 - 23.59 WIB
            </h2>
            <h2>
              -1 Hari
            </h2>
          </div>
          <div class="p-1">
            <p> Deskripsi </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col border-2 border-r-2 border-sky-900 p-4 m-4 rounded-2xl" id="kartu selesai">
        <div class="flex flex-col px-4 gap-2" >
          <div class="flex flex-row gap-3 justify-center">
          <button id="editEvent" class="editEvent">
            <svg class="w-6 h-6 text-sky-900" aria-hidden="true" id="edit "xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
              <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
            </svg>
          </button>
          <button id="deleteEvent">
            <svg class="w-6 h-6 text-sky-900" aria-hidden="true" id="hapus "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
            </svg>
          </button>
            <h2 class="px-6 text-sky-950 text-2xl justify-center items-center font-semibold" id="judulTodo">Membuat Desain<h2>
            <svg class="w-6 h-6 text-sky-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM1.866 8.832a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z"/>
            </svg>
          </div>
          <div class="flex flex-row py-4 gap-3">
            <h3 class="text-sky-950 text-md font-bold">Status:</h3>
            <button type="button" id="btn-selesai" class="text-sky-900 bg-sky-300 hover:bg-sky-400 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-sm px-3 py-0.5 text-center me-2 mb-2">Selesai</button>
            <button type="button" id="btn-revisi" class="text-sky-900 bg-sky-100 hover:bg-sky-200 border-2 border-sky-950/40 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-sm px-3 py-0.5 text-center me-2 mb-2">Revisi</button>
          </div>
          <div class="flex flex-row gap-2 py-2 border-sky-950 border-b-2"">
            <h2 class="flex flex-grow text-sky-950 text font-semibold" id="deadline-tanggal">
              Senin, 20 November 2023 - 23.59 WIB
            </h2>
            <h2>
              -1 Hari
            </h2>
          </div>
          <div class="p-1">
            <p> Deskripsi </p>
          </div>
        </div>
      </div>
    </div>
  </div>


          <div class="modal w-[80%] fade bg-white md:w-[70%] lg:w-[40%] pb-12 rounded-2xl absolute hidden" id="dateModal" tabindex="-1" role="dialog" aria-labelledby="dateModalLabel" aria-hidden="true">
          <span id="close" class="material-symbols-outlined absolute right-[-5px] bg-red-500 rounded-full text-white cursor-pointer top-[-10px]">close</span>
            <div class="modal-dialog" role="document">
              <div class="modal-content px-6">
                <div class="modal-header flex text-center justify-center pt-4">
                  <h5 class="modal-title text-sky-900 text-lg font-bold border-black border-b-2 px-4" id="dateModalLabel">Aktivitas Baru</h5>
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
                          <button id="btnEvent" class="w-20 h-8 border rounded-lg ">Event</button>
                          <button id="btnTask" class="w-20 h-8 border rounded-lg ">Task</button>
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
                    <button class="bg-green-700 py-2 lg:w-full  text-white rounded-lg flex items-center justify-center  px-4">Simpan Aktivitas</button>
                  </div>
                  
                </div>
                <div class="modal-body" id="selectedDate"></div>
              </div>
            </div>
          </div>
          <div id="verifikasiDelete" class="px-2 py-2 w-[70%] left-[15%] border my-auto absolute top-[40%]  rounded-xl border-sky-900 bg-sky-100">
            <div class="flex flex-col gap-2 justify-center items-center">
              <h5 class="font-bold text-sky-900">Menghapus Tugas !!</h5>
              <p class="text-sm">Apakah anda yakin ingin menghapus Tugas ini ?</p>
              <div class="flex gap-2">
                <button id="batalDelete" class="font-bold p-1 rounded-lg border border-sky-950">Batal</button>
                <button class="bg-red-500 text-white font-bold p-1 rounded-lg">Hapus</button>
              </div>
            </div>
          </div>
          <div id="modalBackdrop" class="hidden fixed top-0 left-0 w-full h-full"></div>    

            `;
  },

  async afterRender() {
    // function handleDateClick(info) {
    //   const modal = document.getElementById('dateModal');
    //   const dahboard = document.getElementById('dashboard');
    //   const btnclose = document.getElementById('close');

    //   if (modal) {
    //     modal.classList.toggle('hidden');
    //     dahboard.classList.toggle('blacked-out');
    //   }

    //   btnclose.addEventListener('click', () => {
    //     modal.classList.add('hidden');
    //     dahboard.classList.remove('blacked-out');
    //   });
    // }

    function handleEventClick(info) {
      const modal = document.getElementById('dateModal');
      const dahboard = document.getElementById('dashboard');
      const btnclose = document.getElementById('close');
      const iconDelete = document.querySelector-('#deleteEvent');
      const editEventBtn = document.querySelector('.editEvent');
      const verifikasiDelete = document.getElementById('verifikasiDelete');
      const modalBackdrop = document.getElementById('modalBackdrop');
      const batalDelete = document.getElementById('batalDelete');
      btnclose.addEventListener('click', () => {
        modal.classList.add('hidden');
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
        handleEditEvent(info);
      });
    }

    function handleEditEvent(info) {
      function editEvent(event) {
        document.getElementById('judul').value = event.title;
      }

      editEvent(event);

      const modal = document.getElementById('dateModal');
      const modalBackdrop = document.getElementById('modalBackdrop');
      const dahboard = document.getElementById('dashboard');
      const btnclose = document.getElementById('close');

      modal.classList.remove('hidden');
      dahboard.classList.add('blacked-out');
      modalBackdrop.classList.add('hidden');

      btnclose.addEventListener('click', () => {
        modal.classList.add('hidden');
        dahboard.classList.remove('blacked-out');
      });
    }
    // handleDateClick();
    handleEventClick();
    handleEditEvent();
  },
};

export default Histori;
