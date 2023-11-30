import UrlParser from "../scripts/routes/url-parser";
import routes from "../scripts/routes/routes";

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    if (!this._content) {
      console.error("Content element not found.");
      return;
    }

    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    if (!page) {
      console.error("Page not found for URL:", url);
      return;
    }

    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}
