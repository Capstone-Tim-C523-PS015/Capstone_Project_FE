import About from "../../views/page/about";
import Home from "../../views/page/home";
import Kalendar from "../../views/page/dashboard/calendar";
import TodoList from "../../views/page/dashboard/todoList";
const routes = {
  "/": Home,
  "/home": Home,
  "/about": About,
  "/calendar": Kalendar,
  "/todolist": TodoList,
};

export default routes;
