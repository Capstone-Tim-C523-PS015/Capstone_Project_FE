import About from '../../views/page/about';
import Home from '../../views/page/home';
import About2 from '../../views/page/dashboard/about2';
import dashboard from '../../views/page/dashboard/dashboard';
import Kalender from '../../views/page/dashboard/calendar';
import TodoList from '../../views/page/dashboard/todoList';
import Histori from '../../views/page/dashboard/histori';
import daftar from '../../views/login/daftar';
import masuk from '../../views/login/masuk';
import sendemail from '../../views/login/sendemail';

const routes = {
  '/': Home,
  '/beranda': Home,
  '/tentangkami': About,
  '/tentangkita': About2,
  '/dashboard': dashboard,
  '/kalender': Kalender,
  '/todolist': TodoList,
  '/histori': Histori,
  '/masuk': masuk,
  '/daftar': daftar,
  '/recovery': sendemail,
};

export default routes;
