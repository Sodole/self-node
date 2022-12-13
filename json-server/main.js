const ul = document.getElementById("ul");
const Createli = document.createElement("li");

fetch("http://localhost:3000/useok")
  .then((response) => response.json())
  .then((json) => {
    ul.innerHTML = json.name;
    ul.Createli.innerHTML = json.name;
  });
