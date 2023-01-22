const url = "https://striveschool-api.herokuapp.com/api/movies";

const headers = new Headers({
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzM4ZWU3MzczODAwMTUzNzQzNzciLCJpYXQiOjE2NzQyMDU0OTcsImV4cCI6MTY3NTQxNTA5N30.46ZlnsSty_g9npWTXjIqWXh52mpZtcMP9R3BRtZARWw",
  "Content-Type": "application/json",
});

const postMovies = async () => {
  try {
    const movie = {
      name: document.querySelector("#Name").value,
      description: document.querySelector("#Description").value,
      category: document.querySelector("#Category").value,
      imageUrl: document.querySelector("#Image").value,
    };
    console.log(movie);
    let res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(movie),
    });
    if (res.ok) {
    } else {
      console.log(res);
      throw res.status + " " + res.statusText;
    }
  } catch (error) {
    console.log(error);
  }
};

const editMovies = () => {
  const genre = document.getElementById("inputState").value;
  console.log(genre);
  fetch(url + "/" + genre, { headers })
    .then((dataRaw) => dataRaw.json())
    .then((data) => {
      renderGenre(data);
      console.log(data);
    })
    .catch((error) => console.log(error));
};
{
}
const renderGenre = (movies) => {
  let container = document.getElementById("list-movies");
  movies.forEach((singleMovie) => {
    container.innerHTML += `
    <div class="d-flex justify-content-between flex-row">
      <div class="d-flex justify-content-between flex-row align-items-center w-50">
        <li id="${singleMovie._id}" class="d-flex justify-content-between edit-list">${singleMovie.name}</li>
        <img class="img-small-cover" src="${singleMovie.imageUrl}">
      </div>
      <div class="d-flex justify-content-around w-50">
        <button class="btn-success" onclick='editEvent("${singleMovie._id}")'>Edit id:${singleMovie._id}</button> 
       <button class="btn-danger" onclick='deleteEvent("${singleMovie._id}")'>remove id:${singleMovie._id}</button></li>
       </div>
      </div>`;
  });
};

const deleteEvent = async (id) => {
  try {
    let res = await fetch(url + "/" + id, {
      method: "DELETE",
      headers,
    });
    if (res.ok) {
      location.reload();
    }
  } catch (error) {
    console.log(error);
  }
};

const editEvent = async (id) => {
  event.preventDefault();
  try {
    let res = await fetch(url + "/" + id, {
      method: "PUT",
      headers,
    });
    let data = await res.json();

    await console.log(data);
    await getMovieToEdit(data);
    let buttonContainer = document.getElementById("buttons");
    buttonContainer.innerHTML += `<button type="submit" class="btn btn-primary" onclick='editFinal("${data._id}")' >EDIT</button>`;
  } catch (error) {
    console.log(error);
  }
};

const getMovieToEdit = async (data) => {
  try {
    let { name, description, imageUrl, category } = await data;
    document.querySelector("#Name").value = name;
    document.querySelector("#Description").value = description;
    document.querySelector("#Category").value = category;
    document.querySelector("#Image").value = imageUrl;
  } catch (error) {
    console.log(erorr);
  }
};

const editFinal = async (id) => {
  console.log(id);
  try {
    console.log("runing");
    console.log(id);
    const editedEvent = {
      name: document.querySelector("#Name").value,
      description: document.querySelector("#Description").value,
      category: document.querySelector("#Category").value,
      imageUrl: document.querySelector("#Image").value,
    };
    console.log(id);
    let res = await fetch(url + "/" + id, {
      method: "PUT",
      headers,
      body: JSON.stringify(editedEvent),
    });
    if (res.ok) {
      console.log(res);
    } else {
      throw res.status + " " + res.statusText;
    }
  } catch (error) {
    console.log(error);
  }
};
