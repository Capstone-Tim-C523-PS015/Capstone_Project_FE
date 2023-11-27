import { Calendar } from "fullcalendar";
import "../../../styles/index.css";

const Kalendar = {
  async render() {
    return `
      <div id="contentUtama" class="h-screen lg:mx-6 relative">
        <div class="flex flex-col items-center relative justify-center">
          <div id='kalendar' class="w-full h-screen border border-black mt-5 p-4 z-0"></div>
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
                        <input type="text" class="w-full rounded-lg" placeholder="Meeting Project">
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




          <div class="modal w-[70%] z-20 fade bg-white md:w-[70%] lg:w-[40%] pb-12 rounded-2xl absolute hidden" id="modalEvent" tabindex="-1" role="dialog" aria-labelledby="dateModalLabel" aria-hidden="true">
            <span id="closeEvent" class="material-symbols-outlined absolute right-[-5px] bg-red-500 rounded-full text-white cursor-pointer top-[-10px]">close</span>
            <div class="modal-dialog relative border-black" role="document">
              <div class="modal-content px-6 w-full ">
                <div class="modal-header flex flex-col text-center justify-center pt-4">
                  <h5 class="modal-title text-sky-900 text-lg font-bold border-black border-b-2 px-4" id="dateModalLabel">Detail Acara</h5>
                  <div class="flex justify-between py-2 items-center">
                    <div>
                      <button><span class="material-symbols-outlined">edit_square</span></button>
                      <button id="deleteEvent"><span class="material-symbols-outlined">delete</span></button>
                    </div>
                    <h5 id="titleEvent" class="text-sky-900 text-xl font-bold"></h5>
                    <div>
                      <button><span class="material-symbols-outlined">notifications</span></button>
                    </div>
                  </div>
                  <div class="flex flex-col border-black border-b gap-4">
                    <div class="w-full flex items-center gap-2">
                      <h5 id="status" class="flex items-center font-bold text-sky-900 text-lg">Setatus :</h5>
                      <button id="btnstatus" class="px-3 py-1 rounded-lg font-bold"></button>
                    </div>  
                    <p id="todate" class="text-center"></p>
                  </div>
                </div>
                <div class="">
                  <div class="w-full overflow-hidden">
                    <p>Ilham Maulana is inviting you to a scheduled Zoom meeting. <br>
                      Topic: Meeting Rutin Capstone <br>
                      Time: Nov 19, 2023 08:00 PM Bangkok <br>
                              Every 5 weeks on Sun, until Nov 19, 2023, 1 occurrence(s) <br>
                              Nov 19, 2023 08:00 PM <br>
                      Please download and import the following iCalendar (.ics) files to your calendar system. <br>
                      Weekly: https://unnes-ac-id.zoom.us/meeting/tJAvdOihqTItG9xKzOFe9IJcpGvHVYkD7qHJ/ics?icsToken=98tyKuCsrDgrE9OctxiPRowIAIjCd_PwtlhajfpFtwXKJSUKSyn1JsVUGoRGG_yH

                      Join Zoom Meeting
                      https://unnes-ac-id.zoom.us/j/94231979718?pwd=dDhTZXBVbFdNNnhsWUV6SDJLSStKUT09

                      Meeting ID: 942 3197 9718
                      Passcode: 660101
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
                    <button class="bg-red-500 text-white font-bold p-1 rounded-lg">Hapus</button>
                  </div>
                </div>
              </div>
            </div>     
          </div>
          <div id="modalBackdrop" class="hidden fixed top-0 left-0 w-full h-full"></div>    
        </div>
      </div>
    `;
  },

  async afterRender() {
    const calendarEl = document.getElementById("kalendar");
    // Custome Date
    document
      .getElementById("customDate")
      .addEventListener("input", function () {
        const selectedDate = new Date(this.value);
        const options = { month: "long", year: "numeric", day: "numeric" };
        const formattedDate = selectedDate.toLocaleDateString("en-US", options);
        document.getElementById("formattedDate").textContent = formattedDate;
      });
    // End Custome Date

    // API Calendar
    const calendar = new Calendar(calendarEl, {
      selectable: true,
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      eventRender: function (event, element) {
        // Tambahkan ikon lonceng di sini
        element.find(".fc-content").prepend('<i class="fas fa-bell"></i>');
      },
      events: [
        {
          title: "19:00 [Zoom] Cap...",
          start: "2023-11-25",
          end: "2023-11-26",
          status: "Penting",
        },
        {
          title: "Capstone Desain",
          start: "2023-11-01",
          end: "2023-11-02",
          status: "Dikerjakan",
          description: "",
        },
      ],
      aspectRatio: 2,
      dateClick: function (info) {
        const modal = document.getElementById("dateModal");
        const dahboard = document.getElementById("dashboard");
        const btnclose = document.getElementById("close");
        if (modal) {
          modal.classList.toggle("hidden");
          dahboard.classList.toggle("blacked-out");
        }
        btnclose.addEventListener("click", () => {
          modal.classList.add("hidden");
          dahboard.classList.remove("blacked-out");
        });
      },

      eventClick: function (info) {
        const modal = document.getElementById("modalEvent");
        const dahboard = document.getElementById("dashboard");
        const btnclose = document.getElementById("closeEvent");
        const iconDelete = document.getElementById("deleteEvent");
        const todate = document.getElementById("todate");
        const verifikasiDelete = document.getElementById("verifikasiDelete");
        const titleEvent = document.getElementById("titleEvent");
        const setatus = document.getElementById("btnstatus");
        const modalBackdrop = document.getElementById("modalBackdrop");
        const batalDelete = document.getElementById("batalDelete");
        if (modal) {
          modal.classList.toggle("hidden");
          dahboard.classList.add("blacked-out");
          modalBackdrop.classList.remove("hidden");
        }

        btnclose.addEventListener("click", () => {
          modal.classList.add("hidden");
          dahboard.classList.remove("blacked-out");
          modalBackdrop.classList.add("hidden");
        });

        iconDelete.addEventListener("click", () => {
          verifikasiDelete.classList.toggle("hidden");
        });
        batalDelete.addEventListener("click", () => {
          verifikasiDelete.classList.add("hidden");
        });

        titleEvent.innerHTML = info.event.title;
        setatus.innerHTML = info.event.extendedProps.status;
        if (info.event.extendedProps.status === "Penting") {
          setatus.style.backgroundColor = "red";
          setatus.style.color = "white";
        } else if (info.event.extendedProps.status === "Dikerjakan") {
          setatus.style.backgroundColor = "#7DD3FC";
          setatus.style.color = "#0C4A6E";
        } else {
          setatus.style.backgroundColor = "";
        }
        todate.innerHTML = info.event.start.toLocaleString();
      },
    });
    calendar.render();
    // End API Calendar

    // Event Toggle Notifikasi Btn
    const toggle = document.getElementById("toggle");
    const indicator = document.getElementById("indicator");

    toggle.addEventListener("change", () => {
      const isChecked = toggle.checked;
      const label = isChecked ? "On" : "Off";

      indicator.style.transform = isChecked
        ? "translateX(100%)"
        : "translateX(0)";

      indicator.classList.toggle("on", isChecked);
    });
    // End Togle Notofikasi Btn

    // Event Btn Category
    const modal = document.getElementById("dateModal");

    const btnEvent = document.getElementById("btnEvent");
    const btnTask = document.getElementById("btnTask");

    btnEvent.addEventListener("click", function () {
      btnEvent.classList.add("bg-sky-300");
      btnTask.classList.remove("bg-sky-300");
    });

    btnTask.addEventListener("click", function () {
      btnTask.classList.add("bg-sky-300");
      btnEvent.classList.remove("bg-sky-300");
    });
    // End Btn Category
  },
};

export default Kalendar;
