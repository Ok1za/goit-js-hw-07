"use strict";

const categoriesList = document.getElementById("categories");

const categoryItems = Array.from(categoriesList.getElementsByClassName("item"));

const categoryCount = categoryItems.length;
console.log("Кількість категорій:", categoryCount);

categoryItems.forEach(function(categoryItem) {
    const categoryName = categoryItem.querySelector("h2").textContent;
    const categoryElementsCount = categoryItem.querySelectorAll("ul li").length;
    console.log("Категорія:", categoryName, ", Кількість елементів:", categoryElementsCount);
    });


