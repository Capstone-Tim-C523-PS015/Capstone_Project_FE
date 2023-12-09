import config from './config';

const Api = {
  LoginUrl: `${config.BASE_URL}/login`,
  RegisUrl: `${config.BASE_URL}/register`,
  LogoutUrl: `${config.BASE_URL}/logout`,
  TodosUrl: `${config.BASE_TODOS}/todo`,
  DetailTodoUrl: (id) => `${config.BASE_TODOS}/todo/${id}`,
};

export default Api;
