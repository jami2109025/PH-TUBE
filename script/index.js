function loadCategories() {
    // fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(response=>response.json())
        .then(data=>displayCategories(data.categories));
}

function displayCategories(categories){
    // get the container
    const categoryContainer = document.getElementById("category-container");

    // loop operation on Array of object
    for(let category of categories){
        console.log(category);
        // create element
        const categoryDiv = document.createElement('div');

        console.log(categoryDiv)
        categoryDiv.innerHTML = `
            <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${category.category}</button>
        `;

        // Append the element
        categoryContainer.append(categoryDiv);
    }
}

loadCategories();