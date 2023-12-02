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
  <div class="flex flex-row gap-4 items-center justify-center">
    <div class="flex flex-col border-2 border-r-2 border-sky-900 p-4 m-4 rounded-2xl">
      <div class="flex flex-col px-4 gap-2" id="kartu">
        <div class="flex flex-row gap-3 justify-center">
          <svg class="w-6 h-6 text-sky-900" aria-hidden="true" id="edit "xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
            <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
          </svg>
          <svg class="w-6 h-6 text-sky-900" aria-hidden="true" id="hapus "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
          </svg>
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
        <div class="flex flex-row gap-2 py-2">
          <div class="">
          </div>
        </div>
      </div>
  </div>
</div>

  <div class="flex flex-row border-sky-950 border-b-2"> 
    <h1 class="flex flex-grow py-3 text-2xl font-bold" id="tanggal">Selesai</h1>
  </div>

  <div class="flex flex-col gap-2 p-2">
    <div class="flex flex-row gap-4 items-center justify-center">
      <div class="flex flex-col border-2 border-r-2 border-sky-900 p-4 m-4 rounded-2xl">
        <div class="flex flex-col px-4 gap-2" id="kartu">
          <div class="flex flex-row gap-3 justify-center">
            <svg class="w-6 h-6 text-sky-900" aria-hidden="true" id="edit "xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
              <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
            </svg>
            <svg class="w-6 h-6 text-sky-900" aria-hidden="true" id="hapus "xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
            </svg>
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
          <div class="flex flex-row gap-2 py-2">
            <div class="">
            </div>
          </div>
        </div>
    </div>
  </div>
            `;
  },

  async afterRender() {},
};

export default Histori;
