document.addEventListener("alpine:init", () => {
  Alpine.data("jsframeworks", () => ({
    frameworks: [
      { name: "Vue", url: "https://vuejs.org/" },
      { name: "React", url: "https://react.dev/" },
      { name: "Angular", url: "https://angular.dev/" },
      { name: "Svelte", url: "https://svelte.dev/" },
      { name: "Astro", url: "https://astro.build/" },
    ],
  }));

  Alpine.data("thisComponentData", (url, txt) => ({
    fetchedData: [],
    txt: txt,
    fetchURL() {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.fetchedData = data;
        })
        .catch((error) => console.log(error));
    },
    init() {
      this.fetchURL();
    },
  }));
});
