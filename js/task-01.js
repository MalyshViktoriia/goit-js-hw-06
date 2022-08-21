
const elementCat = document.querySelectorAll('.item');
console.log("Number of categories:", elementCat.length);

elementCat.forEach(function(categories) {
    console.log("Category:", categories.firstElementChild.textContent);
    console.log("Elements:", categories.lastElementChild.children.length);
})