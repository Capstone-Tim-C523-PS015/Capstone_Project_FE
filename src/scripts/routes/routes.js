import About from '../../views/page/about';
import Home from '../../views/page/home';
import daftar from '../../views/login/daftar';
import masuk from '../../views/login/masuk';

const routes = {
  '/': Home,
  '/home': Home,
  '/about': About,
  '/daftar': daftar,
  '/masuk': masuk,
};

export default routes;
