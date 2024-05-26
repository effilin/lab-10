function addCard(title, text, price) {
    const template = document.getElementById('card-template').content.cloneNode(true);
       template.querySelector('.card-title').innerText = title
       template.querySelector('.card-text').innerText = text
       template.querySelector('.card-price').innerText = price
       document.querySelector('#card-list').appendChild(template);
   }
try {
   fetch('https://fakestoreapi.com/products')
   .then((response) => response.json())
   .then((json)=> {
       json.forEach((element) => {
       let title = element.title;
       let price = element.price;
       let text = element.description;
       addCard(title, text, price)
   })});
} catch(error) {
   console.log (error);
};
const jCat = [];

function catFilter(newCat) {
    if (jCat.includes(newCat)) {
        console.log('included')
    }else{
        jCat.push(newCat)
}};

try {
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((json)=> {
      json.forEach((element) => {
        let newCat= element.category;
        catFilter(newCat)
    })})

} catch(error) {
    console.log (error);
 };
;
console.log(jCat);