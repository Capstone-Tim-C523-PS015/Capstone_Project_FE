import About from '../../views/page/about';
import Home from '../../views/page/home';
import dashboard from '../../views/page/dashboard/dashboard';
import Kalendar from '../../views/page/dashboard/calendar';
import TodoList from '../../views/page/todo/todoList';
import Histori from '../../views/page/dashboard/histori';

const routes = {
  '/': Home,
  '/beranda': Home,
  '/tentangkami': About,
  '/dashboard': dashboard,
  '/kalender': Kalendar,
  '/todolist': TodoList,
  '/histori': Histori,
};

export default routes;
