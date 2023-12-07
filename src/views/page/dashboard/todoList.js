import '../../../styles/index.css';

const TodoList = {
  async render() {
    return `
          <di>
            <h1 class="border-black border-b-2">HARI INI</h1>
            <div>

            </div>
          </div>
          `;
  },

  async afterRender() {
    const jwttoken = localStorage.getItem('token');
    if (jwttoken === null) {
      window.location.replace('./login.html#/masuk');
    } else {
      window.location.replace('./dashboard.html#/todolist');
    }
  },
};

export default TodoList;
