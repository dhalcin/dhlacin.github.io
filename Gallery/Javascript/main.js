
const image = document.querySelectorAll('img');
const divGallery = document.getElementById('gallery');
const div = document.getElementById('show');
let button = document.getElementById('btn');

function addButton() {
    if (button) {
        button.style.display = 'block';
    }
}

function addDiv() {
    div.style.display = 'block';
}

image.forEach((img, index) => {
    img.addEventListener('click', ()=> {
        div.style.backgroundImage = `url(/images/${index+1}.jpg)`;
        addDiv();
        addButton();
    });
});

button.addEventListener('click', (e)=> {
    div.style.display = 'none';
    button.style.display = 'none';
});
