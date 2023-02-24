const characterResults = document.querySelector(".allcharacters");
const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", () => {
  const searchQuery = searchInput.value.trim().toLowerCase();
  filterCharacters(searchQuery);
});

const GOTurl = "https://thronesapi.com/api/v2/Characters";
let characterslist = [];

async function getCharacters() {
  try {
    const response = await fetch(GOTurl);
    const json = await response.json();

    characterResults.innerHTML = "";

    characterslist = json;

    characterslist.forEach(function (character) {
      characterResults.innerHTML += `
      <a href="../details.html?id=${character.id}" class="charactercard">
          <div class="image" style="background-image: url(${character.imageUrl});"></div>
          <div class="details">
          <h4 class="name">${character.fullName}</h4>
          <p class="title">${character.title}</p>
          <p class="family">${character.family}</p>                                                                                                                                                         
          </div>
      </a>
      `;
    });
  } catch (error) {
    characterResults.innerHTML = ("Something went wrong while fetching the API");
  }
}
getCharacters();

function filterCharacters(query) {
  const filteredCharacters = characterslist.filter(character =>
    character.fullName.toLowerCase().includes(query) ||
    character.title.toLowerCase().includes(query) ||
    character.family.toLowerCase().includes(query)
    );

  characterResults.innerHTML = "";

  filteredCharacters.forEach(function (character) {
    characterResults.innerHTML += `
    <a href="../details.html?id=${character.id}" class="charactercard">
        <div class="image" style="background-image: url(${character.imageUrl});"></div>
        <div class="details">
        <h4 class="name">${character.fullName}</h4>
        <p class="title">${character.title}</p>
        <p class="family">${character.family}</p>
        </div>
    </a>
    `;
  });
}
