


let ingredient = ["Pâtes", "Oeuf", "Sel", "Poivre", "Lardon", "Oignon", "Parmesan"];

let sorted = ingredient.sort();

console.log(ingredient);


for (let i = 0; i < ingredient.length; i++) {
    console.log([i + 1] + '.' + ingredient[i]);
    document.body.innerHTML += '<li>' + ingredient[i] + '</li>'
}

