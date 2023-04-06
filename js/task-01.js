const listOfCategoriesEl = document.querySelectorAll('.item');
console.log(listOfCategoriesEl);


const numberOfCategories = listOfCategoriesEl.length;
console.log(`Number of categories: ${numberOfCategories}`);


listOfCategoriesEl.forEach((ell) => {

    const textEl = ell.querySelector("h2").textContent;
    console.log(`Category: ${textEl}`);

    const numberOfEl = ell.querySelectorAll("li").length;
    console.log(`Elements: ${numberOfEl}`);

});