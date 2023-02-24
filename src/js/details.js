const detailsResults = document.querySelector(".character-details");

const queryString = document.location.search;

const parameters = new URLSearchParams(queryString);

const id = parameters.get("id");

const GOTurl = "https://thronesapi.com/api/v2/Characters/" + id ;

async function getCharacterDetails() {
  try {
    const response = await fetch(GOTurl);
    const characterdetails = await response.json();

    document.title = `${characterdetails.fullName} info`;
      detailsResults.innerHTML = `
        <h2>${characterdetails.fullName}</h2>
        <div class="details-image" style="background-image: url('${characterdetails.imageUrl}')"></div>
        <div class="details-firstname">First name: ${characterdetails.firstName}</div>
        <div class="details-lastname">Last name: ${characterdetails.lastName}</div>
        <div class="details-title">Title: ${characterdetails.title}</div>
        <div class="details-family">Family: ${characterdetails.family}</div>`;

  } catch (error) {
    detailsResults.innerHTML = ("Something went wrong while fetching the API");
  }
}

getCharacterDetails();
