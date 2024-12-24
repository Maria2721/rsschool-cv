const languageSelect = document.getElementById("language-select");

function updateContent(language) {
	fetch("./data/content.json")
		.then((response) => {
			if (!response.ok) {
				throw new Error(`Ошибка HTTP: ${response.status}`);
			}
			return response.json();
		})
		.then((data) => {
			console.log(data);
			const { header__title, header__subtitle, contacts__title } =
				data.languages[language];
			document.querySelector(".header__title").textContent =
				header__title;
			document.querySelector(".header__subtitle").textContent =
				header__subtitle;
			document.querySelector(".contacts__title").textContent =
				contacts__title;
		})
		.catch((error) => console.error("Ошибка загрузки JSON:", error));
}

languageSelect.addEventListener("change", (event) => {
	updateContent(event.target.value);
});

updateContent("en");
