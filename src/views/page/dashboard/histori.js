import '../../../styles/index.css';

const Histori = {
  async render() {
    return `
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
            `;
  },

  async afterRender() {},
};

export default Histori;
