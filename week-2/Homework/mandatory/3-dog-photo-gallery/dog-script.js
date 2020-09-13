fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(function (response) {
        return response.data();
    })
    .then(function (data) {
        console.log(data);
   
             let getDogImages = document.createElement("img");
             getDogImages.src = episode.image.medium;
             let dogShow = document.createElement("ul");
             let dogLists = document.createElement("li");
      

 })

        // Write the code to display the greeting text here
  
    .catch(function (error) {
        console.log(error);
    });