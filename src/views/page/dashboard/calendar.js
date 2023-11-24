import { Calendar } from "fullcalendar";
import "../../../styles/index.css";

const Kalendar = {
  async render() {
    return `
    <div class=" pb-20 lg:mx-6">
      <div class="flex flex-col items-center justify-center">
        <div id='calendar' class="w-full border border-black mt-5 p-4 z-0"></div>
      </div>
    </div>
        `;
  },

  async afterRender() {
    // API Calendar
    const calendarEl = document.getElementById("calendar");
    const calendar = new Calendar(calendarEl, {
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },

      initialView: "dayGridMonth",
      events: [],
      aspectRatio: 2,
    });
    calendar.render();
  },
};

export default Kalendar;
