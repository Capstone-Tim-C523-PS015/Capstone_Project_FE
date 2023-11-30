
class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    if (!this._content) {
      return;
    }

    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    if (!page) {
      return;
    }

    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
