class ContentNav extends HTMLElement {
  constructor() {
    super();
  }

  set buttonEvents(events) {
    this._buttonEvents = events;
    this.render();
  }

  render() {
    this.className = "w-full px-4 md:px-0";
    this.innerHTML = `
            <div class="container flex flex-row justify-start items-center">
              <button
                class="btn px-8 py-1 text-slate-800/70 bg-primary/70 rounded-lg shadow-md hover:bg-yellow-500/70 active:bg-yellow-600/70 hover:ring-yellow-500/50 active:ring-yellow-600/50 hover:ring-4 active:ring-4 transition duration-150 ease-in-out flex items-center"
              >
                Back
              </button>
            </div>
          `;

    const button = this.querySelector("button");
    button.addEventListener("click", () => {
      this._buttonEvents();
    });
  }
}

customElements.define("content-nav", ContentNav);
