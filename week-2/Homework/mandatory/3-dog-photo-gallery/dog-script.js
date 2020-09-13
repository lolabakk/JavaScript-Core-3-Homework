let clickButton = document.querySelector(".clickButton");
clickButton.addEventListener("click", getNewDogImage)
let dogSelector = document.querySelector(".dogSelector");
let dogItems = document.createElement("ul");
let dogLists = document.createElement("li");
let dogImage = document.createElement("img");

function getNewDogImage() {


  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json())
    .then(data => {
      dogImage.src = data.message;
      dogSelector.appendChild(dogItems);
      dogItems.appendChild(dogLists);
      dogLists.appendChild(dogImage);

    })
    .catch(function (error) {
      console.log(error)
    })
}