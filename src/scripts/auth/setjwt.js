const setjwt = (response) => {
  localStorage.setItem('token', response.data.token);
};

export default setjwt;
