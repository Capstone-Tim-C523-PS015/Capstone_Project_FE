import config from './config';

const Api = {
  LoginUrl: `${config.BASE_URL}/login`,
  RegisUrl: `${config.BASE_URL}/register`,
  LogoutUrl: `${config.BASE_URL}/logout`,
  EmailUrl: `${config.BASE_RESET}/email`,
  cektokenUrl: `${config.BASE_RESET}/verifyToken?token=`,
  resetUrl: `${config.BASE_RESET}/updatePassword`,
};

export default Api;
