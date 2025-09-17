const updateContent = (language) => {
  fetch("./data/content.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      const {
        header__title,
        header__subtitle,
        contacts__title,
        skills__title,
        languages__title,
        about__title,
        education__title,
        experience__title,
        education__university,
        education__university_speciality,
        education__stepik,
        experience__exim,
        experience__5dhub,
        experience__petprojects,
        about__text,
      } = data.languages[language];
      document.querySelector(".header__title").textContent = header__title;
      document.querySelector(".header__subtitle").textContent =
        header__subtitle;
      document.querySelector(".contacts__title").textContent = contacts__title;
      document.querySelector(".skills__title").textContent = skills__title;
      document.querySelector(".languages__title").textContent =
        languages__title;
      document.querySelector(".about__title").textContent = about__title;
      document.querySelector(".education__title").textContent =
        education__title;
      document.querySelector(".experience__title").textContent =
        experience__title;
      document.querySelector(".education__university").textContent =
        education__university;
      document.querySelector(".education__university_speciality").textContent =
        education__university_speciality;
      document.querySelector(".education__itgirls").textContent =
        header__subtitle;
      document.querySelector(".education__stepik").textContent =
        education__stepik;
      document.querySelector(".experience__exim").textContent =
        experience__exim;
      document.querySelector(".experience__5dhub").textContent =
        experience__5dhub;
      document.querySelector(".experience__petprojects").textContent =
        experience__petprojects;
      document.querySelector(".about__text").textContent = about__text;
    })
    .catch((error) => console.error("Ошибка загрузки JSON:", error));
};

updateContent("en");

document.getElementById("dropdown-icon").addEventListener("click", () => {
  const dropdown = document.getElementById("language-list");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});

document.getElementById("language-list").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    const language = event.target.dataset.lang;
    updateContent(language);
    document.getElementById("language-list").style.display = "none";
  }
});

document.addEventListener("click", (event) => {
  const dropdown = document.getElementById("language-list");
  const icon = document.querySelector(".icon");

  if (!icon.contains(event.target) && dropdown.style.display === "block") {
    dropdown.style.display = "none";
  }
});
