import { Calendar } from "fullcalendar";
import "../../styles/index.css";
import axios from "axios";

const Home = {
  async render() {
    return `
    <div id="content" class="pb-32 animate-fade-in transition duration-1000 ease-in-out relative">
      <div class=" lg:mx-6 pb-36 relative"> 
        <div class="lg:flex lg:flex-col lg:justify-around lg:items-center py-16 relative">
          <div class="right-0 top-0 lg:mt-3 absolute"><img src="../awan.png" alt="" /></div>
          <div class="py-12 flex flex-col gap-4 justify-center items-center">
            <div><img src="../Welcome.svg" alt="" class=""/></div>
            <p class=" text-sky-900 lg:my-4 text-center lg:max-w-xl">Selamat datang di PlanPlan! Tempat untuk merencanakan dan mengelola aktivitas atau tugas dalam hidup Anda. Mulai lah untuk melihat jadwal Anda dengan mengklik tombol dibawah ini!.</p>
            <button id="scrollButton" class="flex justify-center items-center p-2 gap-2 font-bold rounded-lg bg-sky-900 text-sky-50 "><span class="material-symbols-outlined">
            south
            </span>Lihat Jadwal Anda<span class="material-symbols-outlined">
            south
            </span></button>
          </div>
          <div class="absolute bottom-0 left-0"><img src="../awan.png" alt="" /></div>
        </div> 
      </div>

      <div id="event-kosong" class="target pb-32 lg:mx-6 hidden">
        <div class="flex flex-col items-center justify-center">
          <div class=" border-black border-b-2 md:w-96 w-72 text-center">
            <h1 class="text-3xl font-bold text-sky-900">PRIORITAS</h1>
          </div>
          <div class="py-12 w-full flex flex-col justify-center gap-4 items-center">
            <img src="../group.svg" class="w-96"/>
            <div class="text-center">
              <h2 class="text-sky-900 text-xl">Tidak Ada Tugas atau Task yang perlu dikerjakan!</h2>
              <p class="text-sky-900 font-bold">Silakan isi Todo-List Terlebih dahulu!</p>
            </div>
          </div>
        </div>
      </div>


      

      <div id="event-true" class="target2 hidden w-full px-6  >
        <div class="flex justify-center w-full ">
          <div class="lg:w-[70%] mx-auto flex flex-col justify-center relative ">
            <div class=" border-black mx-auto border-b-2 md:w-96 w-72 text-center">
              <h1 class="text-3xl font-bold text-sky-900">PRIORITAS</h1>
            </div>
            <div class="flex flex-col sm:flex-row w-full justify-center pt-8">
              <div class="w-full sm:w-1/2 flex flex-col text-center border-sky-950 sm:border-r-2 border-b-2 h-96 bg-sky-200 relative">
                <h1 class="py-4 bg-sky-900 text-white text-2xl font-semibold">Mendesak</h1>
                <div id="list-mendesak">
                  
                </div>
                

              </div>
              <div class="w-full sm:w-1/2 flex flex-col text-center border-sky-950 border-b-2 h-96 bg-sky-200 relative">
                <h1 class="py-4 bg-sky-900 text-white text-2xl font-semibold">Penting</h1>
                <div id="list-penting" class="">
                  
                </div>
                
              </div>
            </div>
            <div class="flex flex-col sm:flex-row w-full">
              <div class="w-full sm:w-1/2 flex flex-col text-center border-sky-950 sm:border-r-2 h-96 bg-sky-200 relative">
                <h1 class="py-4 bg-sky-900 text-white text-2xl font-semibold">Menunggu</h1>
                <div id="list-menunggu">
                  
                </div>
              </div>
              <div class="w-full sm:w-1/2 flex flex-col text-center border-sky-950 h-96 bg-sky-200 relative">
                <h1 class="py-4 bg-sky-900 text-white text-2xl font-semibold">Selesai</h1>
                <div id="list-slesai">
                  
                </div>
              </div>
            </div>
            <div id="popUpPrioritas" class="absolute targetModal rounded-2xl hidden w-[70%] px-3 py-3  left-[50%] transform translate-x-[-50%] translate-y-[50%] bg-sky-50">
              <div class="flex flex-col gap-3 relative">
              <span id="closeEvent" class="material-symbols-outlined absolute right-[-5px] bg-red-500 rounded-full text-white cursor-pointer top-[-10px]">close</span>
                <h1 class="text-xl text-center font-bold text-sky-900">Detail Tugas</h1>
                <h1 id="h1Prioritas" class="text-xl text-center font-semibold"></h1>
                <div class="flex gap-3 items-center">
                  <p id="statusPrioritas" class="font-bold text-sky-950">Status : </p>
                  <span id="spanStatus" class="px-3 py-1 rounded-lg flex items-center justify-center"></span>
                </div>
                <div class="border-black border-b">
                  <p id="timeTodoPrioritas" class="font-bold text-sky-950"></p>
                  <p id="deadlineprioritas" class="font-bold text-sky-950"></p>
                </div>
                <div>
                  <p id="deskripsiPrioritas"></p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      

      <div class=" pb-32 lg:mx-6">
        <div id="dashboard" class="flex flex-col items-center justify-center">
          <div class=" border-black border-b-2 md:w-96 w-72 text-center">
            <h1 class="text-3xl font-bold text-sky-900">KALENDER</h1>
          </div>
          <div id='calendar' class="w-full border border-black mt-5 p-4 z-0"></div>

          <div class="modal w-[70%] z-20 fade bg-white md:w-[70%] lg:w-[40%] pb-12 rounded-2xl absolute hidden" id="modalEvent" tabindex="-1" role="dialog" aria-labelledby="dateModalLabel" aria-hidden="true">
            <span id="closeEventCalendarModal" class="material-symbols-outlined absolute right-[-5px] bg-red-500 rounded-full text-white cursor-pointer top-[-10px]">close</span>
            <div class="modal-dialog relative border-black" role="document">
              <div class="modal-content px-6 w-full ">
                <div class="modal-header flex flex-col justify-center pt-4">
                  <h5 class="modal-title text-sky-900 text-lg font-bold border-black border-b-2 px-4" id="dateModalLabel">Detail Acara</h5>
                  <div class="flex justify-between py-2 items-center">
                    <div>
                      <button id="editEvent"><span class="material-symbols-outlined">edit_square</span></button>
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
                  <div class="w-full">
                      <p class="max-h-64 overflow-y-scroll">Ilham Maulana is inviting you to a scheduled Zoom meeting.
                        Topic: Meeting Rutin Capstone <br>
                        Time: Nov 19, 2023 08:00 PM Bangkok <br>
                                Every 5 weeks on Sun, until Nov 19, 2023, 1 occurrence(s)
                                Nov 19, 2023 08:00 PM <br>
                        Please download and import the following iCalendar (.ics) files to your calendar system.
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

      <div id="noEventList" class="pb-32 lg:mx-6 ">
        <div class="flex flex-col items-center justify-center">
          <div class=" border-black border-b-2 md:w-96 w-72 text-center">
            <h1 class="text-3xl font-bold text-sky-900">TODO-LIST</h1>
          </div>
          <div class="py-12 w-full flex flex-col justify-center gap-4 items-center">
            <img src="../group.svg" class="w-96"/>
            <div class="text-center">
              <h2 class="text-sky-900 text-xl">Tidak Ada Tugas atau Task yang perlu dikerjakan!</h2>
              <p class="text-sky-900 font-bold">Silakan isi Todo-List Terlebih dahulu!</p>
            </div>
          </div>
        </div>
      </div>

      <div id="eventList" class="hidden pb-32">
        <div class=" border-black border-b-2 md:w-96 w-72 text-center mx-auto">
          <h1 class="text-3xl font-bold text-sky-900">TODO-LIST</h1>
        </div>
       
        <div id="card" class="pt-4 flex flex-wrap gap-2 justify-center">
          
          <div id="ElementCard" class="flex flex-wrap gap-x-12 gap-y-4 justify-center"></div>
        </div>
      </div>

      <div id="event-No-histori" class="pb-10 lg:mx-6 ">
        <div class="flex flex-col items-center justify-center">
          <div class=" border-black border-b-2 md:w-96 w-72 text-center">
            <h1 class="text-3xl font-bold text-sky-900">HISTORI</h1>
          </div>
          <div class="py-12 w-full flex flex-col justify-center gap-4 items-center">
            <img src="../group.svg" class="w-96"/>
            <div class="text-center">
              <h2 class="text-sky-900 text-xl">Tidak Ada Tugas atau Task yang perlu dikerjakan!</h2>
              <p class="text-sky-900 font-bold">Silakan isi Todo-List Terlebih dahulu!</p>
            </div>
          </div>
        </div>
      </div>

      <div id="eventHistori" class="hidden pb-32">
        <div class=" border-black border-b-2 md:w-96 w-72 text-center mx-auto">
          <h1 class="text-3xl font-bold text-sky-900">HISTORI</h1>
        </div>
        <div id="cardHistori" class="pt-4 flex flex-wrap gap-2 justify-around"></div>
      </div>
    </div>
      
      
      `;
  },

  async afterRender() {
    const url = "https://be.gunz.my.id/todo";
    const jwt =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2JlLmd1bnoubXkuaWQvYXV0aC9sb2dpbiIsImlhdCI6MTcwMTU4MjI5OCwibmJmIjoxNzAxNTgyMjk4LCJqdGkiOiJkWnpVMjZYTHU2b1RDd2VSIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.iY7UV-2ftKlSAN9KuycnwU_42cLyoGqAzRPWAiR_y4s";
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data.todos);
        const Todos = response.data.todos;
        // Fungsi untuk konfigurasi dengan API Fullcalendar
        const formattedData = Todos.map((item) => ({
          title: item.title,
          start: item.deadline,
          end: item.deadline,
          extendedProps: {
            description: item.description,
            status: item.status,
            userId: item.userId,
          },
        }));
        console.log(formattedData);
        // API Calendar
        const calendarEl = document.getElementById("calendar");
        const calendar = new Calendar(calendarEl, {
          headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          },
          initialView: "dayGridMonth",
          events: formattedData,
          aspectRatio: 2,
          eventClick: handleEventClick,
        });
        calendar.render();
        // End Calendar

        // Todo Prioritas
        if (Todos.length === 0) {
          document.getElementById("event-kosong").classList.remove("hidden");
          document.getElementById("event-true").classList.add("hidden");
        } else {
          document.getElementById("event-true").classList.remove("hidden");
          document.getElementById("event-kosong").classList.add("hidden");

          Todos.forEach((item) => {
            eventListPrioritas(item);
          });
        }

        function eventListPrioritas(item) {
          const listMendesak = document.getElementById("list-mendesak");
          const listPrioritas = document.getElementById("list-penting");
          const listmenunggu = document.getElementById("list-menunggu");
          const listslesai = document.getElementById("list-slesai");
          const itemListPrioritas = document.createElement("p");
          itemListPrioritas.className = "font-bold text-sky-900 scrollButton";
          // Membuat objek Date dari string waktu API menampilkan waktu
          const deadlineApi = item.deadline;
          const deadlineDate = new Date(deadlineApi);
          let waktuDeadline = deadlineDate.toLocaleTimeString("en-US", {
            hour12: false,
          });
          waktuDeadline = waktuDeadline.replace(/:00$/, "");
          console.log("Waktu deadline:", waktuDeadline);
          itemListPrioritas.innerText = `${ConvertwaktuTime(item)} [${
            item.status
          }] ${item.title}`;

          itemListPrioritas.addEventListener("click", () => {
            ModalEventPrioritas(item);
          });
          const closeEvent = document.getElementById("closeEvent");
          closeEvent.addEventListener("click", () => {
            const popUpPrioritas = document.getElementById("popUpPrioritas");
            popUpPrioritas.classList.add("hidden");
          });

          if ((item.status === "terlambat") | (item.status === "revisi")) {
            listMendesak.appendChild(itemListPrioritas);
          } else if (item.status === "dikerjakan") {
            listPrioritas.appendChild(itemListPrioritas);
          } else if (item.status === "menunggu") {
            listmenunggu.appendChild(itemListPrioritas);
          } else if (item.status === "selesai") {
            listslesai.appendChild(itemListPrioritas);
          }
        }

        function ModalEventPrioritas(item) {
          const popUpPrioritas = document.getElementById("popUpPrioritas");
          popUpPrioritas.classList.toggle("hidden");
          const h1Prioritas = document.getElementById("h1Prioritas");
          h1Prioritas.innerText = item.title;
          const spanStatus = document.getElementById("spanStatus");
          spanStatus.innerText = item.status;
          const styleSpan = "px-2 py-1 rounded-lg text-sky-900 text-base";
          if (item.status === "selesai") {
            spanStatus.className = `bg-green-300 ${styleSpan}`;
          } else if (item.status === "revisi") {
            spanStatus.className = `bg-red-500 text-white ${styleSpan}`;
          } else if (item.status === "dikerjakan") {
            spanStatus.className = `bg-sky-300 ${styleSpan}`;
          }
          const timeTodoPrioritas =
            document.getElementById("timeTodoPrioritas");

          const deskripsiPrioritas =
            document.getElementById("deskripsiPrioritas");
          deskripsiPrioritas.innerText = `${item.description}`;
          timeTodoPrioritas.innerText = `${FormatDeadlineBaru(
            item
          )} - ${ConvertwaktuTime(item)}`;
        }

        // Fungsi Format Deadline
        function FormatDeadlineBaru(item) {
          const deadlineApi = item.deadline;
          const deadlineDate = new Date(deadlineApi);
          const hari = deadlineDate.getDate();
          const bulan = deadlineDate.toLocaleString("id-ID", { month: "long" });
          const tahun = deadlineDate.getFullYear();
          const tanggalFormatBaru = hari + " " + bulan + " " + tahun;
          return tanggalFormatBaru;
        }
        function ConvertwaktuTime(item) {
          const deadlineApi = item.deadline;
          const deadlineDate = new Date(deadlineApi);
          let waktuDeadline = deadlineDate.toLocaleTimeString("en-US", {
            hour12: false,
          });
          return (waktuDeadline = waktuDeadline.replace(/:00$/, ""));
        }

        const groupedTodos = {};

        // Mengelompokkan Todos berdasarkan tanggal
        Todos.forEach((event) => {
          const tanggal = new Date(event.deadline).toLocaleDateString("id-ID");
          if (!groupedTodos[tanggal]) {
            groupedTodos[tanggal] = [];
          }
          groupedTodos[tanggal].push(event);
          console.log(event.deadline);
          console.log("Tg: " + tanggal);
        });

        console.log("Tg: " + groupedTodos);
        // Todo List
        if (Todos.length === 0) {
          document.getElementById("noEventList").classList.remove("hidden");
          document.getElementById("eventList").classList.add("hidden");
        } else {
          document.getElementById("eventList").classList.remove("hidden");
          document.getElementById("noEventList").classList.add("hidden");
        }

        const cardContainer = document.getElementById("ElementCard");
        const cardHistori = document.getElementById("cardHistori");

        Object.keys(groupedTodos).forEach((tanggal) => {
          // Membuat elemen untuk setiap tanggal
          const tanggalContainer = document.createElement("div");
          tanggalContainer.className =
            "date-container w-full flex flex-wrap gap-3 justify-center";

          // Membuat elemen h1 untuk menampilkan tanggal
          const h1Tanggal = document.createElement("h1");
          h1Tanggal.className =
            " w-full text-2xl font-bold text-sky-900 border-black border-b-2";
          h1Tanggal.textContent = `Todo List - ${tanggal.split("T")[0]}`;
          tanggalContainer.appendChild(h1Tanggal);

          // Iterasi melalui Todos pada tanggal tertentu
          groupedTodos[tanggal.split("T")[0]].forEach((event) => {
            CreateCardTodo(event, tanggalContainer);
          });

          console.log("aneh", tanggal.split("T")[0]);

          cardContainer.appendChild(tanggalContainer);
        });

        // Fungsi untuk membuat card todo
        function CreateCardTodo(event, container) {
          const eventCard = document.createElement("div");
          eventCard.className =
            "w-80 border-sky-900 border py-3 px-2 bg-sky-100 h-[300px] rounded-lg flex flex-col gap-4";

          // ... (Kode untuk membuat elemen-elemen card)
          const titleElement = document.createElement("h1");
          titleElement.className =
            "text-lg font-bold w-full text-sky-900 text-center pb-3";
          titleElement.textContent = event.title;

          const detailsContainerStatus = document.createElement("div");
          const statusDiv = document.createElement("div");
          statusDiv.className = "flex items-center gap-2";
          const statusElement = document.createElement("p");
          const spanStatus = document.createElement("span");

          if (event.status === "telat" || event.status === "revisi") {
            spanStatus.className =
              "px-3 py-1 bg-red-500 rounded-lg text-white items-center font-bold";
          }
          if (event.status === "dikerjakan" || event.status === "menunggu") {
            spanStatus.className =
              "px-3 py-1 bg-sky-300 rounded-lg text-sky-900 items-center font-bold";
          }
          if (event.status === "selesai") {
            spanStatus.className =
              "px-3 py-1 bg-green-300 rounded-lg text-sky-900 items-center font-bold";
          }
          spanStatus.innerText = ` ${event.status}`;
          statusElement.textContent = `Status :  `;
          statusDiv.appendChild(statusElement);
          statusDiv.appendChild(spanStatus);

          const descriptionElement = document.createElement("div");
          descriptionElement.innerHTML = `<p>${event.description}</p>`;

          const divDetail = document.createElement("div");
          const Pdeadline = document.createElement("p");
          Pdeadline.className = "border-black border-b";
          Pdeadline.innerText = `${FormatDeadlineBaru(
            event
          )} - ${ConvertwaktuTime(event)}`;

          divDetail.appendChild(Pdeadline);
          divDetail.appendChild(descriptionElement);

          detailsContainerStatus.appendChild(titleElement);
          detailsContainerStatus.appendChild(statusDiv);
          detailsContainerStatus.appendChild(divDetail);

          eventCard.appendChild(detailsContainerStatus);
          // ... (Kode untuk membuat elemen-elemen card)

          if (event.status !== "selesai") {
            container.appendChild(eventCard);
          }
          if (event.status === "selesai") {
            cardHistori.appendChild(eventCard);
            if (event.length === 0 && event.status !== "selesai") {
              document
                .getElementById("event-No-histori")
                .classList.remove("hidden");
              document.getElementById("eventHistori").classList.add("hidden");
            } else {
              document
                .getElementById("eventHistori")
                .classList.remove("hidden");
              document
                .getElementById("event-No-histori")
                .classList.add("hidden");
            }
          }
        }

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
            document
              .querySelector(".target2")
              .scrollIntoView({ behavior: "smooth" });
          });

        const scrollButtonAll = document.querySelectorAll(".scrollButton");
        scrollButtonAll.forEach((elemet) => {
          elemet.addEventListener("click", function () {
            document
              .querySelector(".targetModal")
              .scrollIntoView({ behavior: "smooth" });
          });
        });
      });

    function handleEventClick(info) {
      const modalEvent = document.getElementById("modalEvent");
      const dahboard = document.getElementById("dashboard");
      const btnclose = document.getElementById("closeEventCalendarModal");
      console.log(btnclose);

      if (modalEvent) {
        modalEvent.classList.toggle("hidden");
        dahboard.classList.add("blacked-out");
      }

      btnclose.addEventListener("click", () => {
        modalEvent.classList.add("hidden");
        dahboard.classList.remove("blacked-out");
      });
    }
  },
};

export default Home;
