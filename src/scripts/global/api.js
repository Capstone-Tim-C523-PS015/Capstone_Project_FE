import config from './config';

const Api = {
  LoginUrl: `${config.BASE_URL}/login`,
  RegisUrl: `${config.BASE_URL}/register`,
  LogoutUrl: `${config.BASE_URL}/logout`,
};

export default Api;
