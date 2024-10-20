console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const imageContainer = document.getElementById("dog-image-container");
    const breedList = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");

    if (!imageContainer) {
        console.error("Image container not found.");
        return;
    }
// Fetch all images from URL
    fetch(imgUrl)
        .then(res => res.json())
        .then(data => {
            data.message.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = "Dog CEO";
                imageContainer.appendChild(img);
            });
        })
        .catch(error => {
            console.error("Error fetching images:", error);
        });
// Fetch all dog breeds using URL
fetch (breedUrl)
    .then(res => res.json())
    .then(data => {
        const breeds = Object.keys(data.message);

        const allBreeds = breeds;

        breeds.forEach(breed => {
            const li = document.createElement("li");
            li.textContent = breed;
            // Font color change
            li.addEventListener("click", function() {
                this.style.color = "green";
            });

            breedList.appendChild(li);
    });
    // Event listener for the dropdown
    breedDropdown.addEventListener("change", function() {
        const selectedLetter = this.value;
        breedList.innerHTML = '';

        const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
        filteredBreeds.forEach(breed => {
            const li = document.createElement("li");
            li.textContent = breed;

            li.addEventListener("click", function() {
                this.style.color = "green";
            });

            breedList.appendChild(li);
        });
    });
})
    .catch(error => {
        console.error("Error fetching breeds:", error);
    });
});