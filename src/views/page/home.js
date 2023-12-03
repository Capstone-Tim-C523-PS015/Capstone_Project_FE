import { Calendar } from "fullcalendar";
import "../../styles/index.css";
import axios from 'axios';

const Home = {
  async render() {
    return `
    <div id="content" class="pb-32 animate-fade-in transition duration-1000 ease-in-out ">
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


      

      <div id="event-true" class="hidden w-full px-6  >
        <div class="flex justify-center w-full">
          <div class="lg:w-[70%] mx-auto h-screen flex flex-col justify-center">
          <div class=" border-black mx-auto border-b-2 md:w-96 w-72 text-center">
            <h1 class="text-3xl font-bold text-sky-900">PRIORITAS</h1>
          </div>
            <div class="flex w-full justify-center pt-8">
              <div class="w-1/2 flex flex-col text-center border-sky-950 border-r-2 border-b-2 h-96 bg-sky-200 ">
                <h1 class="py-4 bg-sky-900 text-white text-2xl font-semibold">Mendesak</h1>
                <div id="list-prioritas">
                  
                </div>
              </div>
              <div class="w-1/2 flex flex-col text-center border-sky-950 border-b-2 h-96 bg-sky-200 ">
                <h1 class="py-4 bg-sky-900 text-white text-2xl font-semibold">Penting</h1>
              </div>
            </div>
            <div class="flex w-full">
              <div class="w-1/2 flex flex-col text-center border-sky-950 border-r-2 h-96 bg-sky-200 ">
                <h1 class="py-4 bg-sky-900 text-white text-2xl font-semibold">Menunggu</h1>
              </div>
              <div class="w-1/2 flex flex-col text-center border-sky-950 h-96 bg-sky-200 ">
                <h1 class="py-4 bg-sky-900 text-white text-2xl font-semibold">Selesai</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class=" pb-32 lg:mx-6 pt-32">
        <div class="flex flex-col items-center justify-center">
          <div class=" border-black border-b-2 md:w-96 w-72 text-center">
            <h1 class="text-3xl font-bold text-sky-900">KALENDER</h1>
          </div>
          <div id='calendar' class="w-full border border-black mt-5 p-4 z-0"></div>
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
        <h1 class="text-black text-2xl border-sky-900 border-b-2 w-full font-bold pb-4">Hari Ini</h1>
        <div id="card" class="pt-4 flex flex-wrap gap-2 justify-center"></div>
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
        <div id="cardHistori" class="pt-4 flex flex-wrap gap-2 justify-center"></div>
      </div>
    </div>
      
      
      `;
  },

  async afterRender() {
    const url = "https://be.gunz.my.id/todo";
    const jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2JlLmd1bnoubXkuaWQvYXV0aC9sb2dpbiIsImlhdCI6MTcwMTU2OTg0MywiZXhwIjoxNzAxNTczNDQzLCJuYmYiOjE3MDE1Njk4NDMsImp0aSI6IjhRN1owT0VmdXNmbExXWVgiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.cJxBNveLWhi3QG6UIk8n2p8h1bOzrZvWkNxRgwNSPjs';
    axios.get(url, {headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    }})
    .then(response => console.log(response.data))
    .catch(error => console.log(error.response));

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
      });

    // API Calendar
    const calendarEl = document.getElementById("calendar");
    const calendar = new Calendar(calendarEl, {
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },

      initialView: "dayGridMonth",
      events: [
        {
          title: "19:00 [Zoom] Cap...",
          start: "2023-11-25",
          end: "2023-11-26",
          time: "23:59",
          status: "Penting",
          description: "",
        },
        {
          title: "Capstone Desain",
          start: "2023-11-01",
          end: "2023-11-02",
          status: "Dikerjakan",
          description: "",
        },
        {
          title: "Capstone Desain",
          start: "2023-12-01",
          end: "2023-12-02",
          status: "Dikerjakan",
          description: "",
        },
      ],
      aspectRatio: 2,
    });
    calendar.render();

    const events = [
      {
        title: "19:00 [Zoom] Cap...",
        start: "2023-11-25",
        end: "2023-11-26",
        time: "23:59",
        status: "Penting",
        description: "",
      },
      {
        title: "Capstone Item",
        start: "2023-11-01",
        end: "2023-11-02",
        time: "23:59",
        status: "selesai",
        description: "",
      },
      {
        title: "Capstone Feature",
        start: "2023-12-01",
        end: "2023-12-02",
        time: "23:59",
        status: "selesai",
        description: "",
      },
    ];
    console.log(events.length);
    // Todo Prioritas
    if (events.length === 0) {
      document.getElementById("event-kosong").classList.remove("hidden");
      document.getElementById("event-true").classList.add("hidden");
    } else {
      document.getElementById("event-true").classList.remove("hidden");
      document.getElementById("event-kosong").classList.add("hidden");
      const listPrioritas = document.getElementById("list-prioritas");

      events.forEach((item) => {
        const itemListPrioritas = document.createElement("p");
        itemListPrioritas.innerText = `${item.time} [${item.status}] ${item.title}`;
        listPrioritas.appendChild(itemListPrioritas);
      });
    }

    // Todo List
    if (events.length === 0) {
      document.getElementById("noEventList").classList.remove("hidden");
      document.getElementById("eventList").classList.add("hidden");
    } else {
      document.getElementById("eventList").classList.remove("hidden");
      document.getElementById("noEventList").classList.add("hidden");
    }

    // Todo Histori
    if (events.length === 0) {
      document.getElementById("event-No-histori").classList.remove("hidden");
      document.getElementById("eventHistori").classList.add("hidden");
    } else {
      document.getElementById("eventHistori").classList.remove("hidden");
      document.getElementById("event-No-histori").classList.add("hidden");
    }

    const cardContainer = document.getElementById("card");
    events.forEach((event) => {
      if (event.status !== "selesai") {
        const eventCard = document.createElement("div");
        eventCard.className =
          "w-80 border-sky-900 border py-3 px-2 bg-sky-100 rounded-lg";

        const titleElement = document.createElement("h1");
        titleElement.className =
          "text-lg font-bold border-sky-900 border-b-2 w-full text-sky-900";
        titleElement.textContent = event.title;
        eventCard.appendChild(titleElement);

        const detailsContainer = document.createElement("div");
        const statusElement = document.createElement("span");
        statusElement.textContent = "Status : ";
        const dateElement = document.createElement("p");
        dateElement.textContent = event.start;
        const descriptionElement = document.createElement("div");
        descriptionElement.innerHTML = `<p>${event.description}</p>`;

        detailsContainer.appendChild(statusElement);
        detailsContainer.appendChild(dateElement);
        detailsContainer.appendChild(descriptionElement);

        eventCard.appendChild(detailsContainer);

        cardContainer.appendChild(eventCard);
      }
    });

    const cardHistori = document.getElementById("cardHistori");

    events.forEach((event) => {
      if (event.status === "selesai") {
        const eventCard = document.createElement("div");
        eventCard.className =
          "w-80 border-sky-900 border py-3 px-2 bg-sky-100 rounded-lg";

        const titleElement = document.createElement("h1");
        titleElement.className =
          "text-lg font-bold border-sky-900 border-b-2 w-full text-sky-900";
        titleElement.textContent = event.title;
        eventCard.appendChild(titleElement);

        const detailsContainer = document.createElement("div");
        const statusElement = document.createElement("span");
        statusElement.textContent = `Status : ${event.status}`;
        const dateElement = document.createElement("p");
        dateElement.textContent = event.start;
        const descriptionElement = document.createElement("div");
        descriptionElement.innerHTML = `<p>${event.description}</p>`;

        detailsContainer.appendChild(statusElement);
        detailsContainer.appendChild(dateElement);
        detailsContainer.appendChild(descriptionElement);

        eventCard.appendChild(detailsContainer);
        cardHistori.appendChild(eventCard);
      }
    });
  },
};

export default Home;
