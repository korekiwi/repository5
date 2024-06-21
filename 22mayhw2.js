const icons = [
    'html.png', 'js_icon.webp', 'python.png'
]

const arrows = document.querySelectorAll(".arrow");
const img = document.querySelector('img');

count = 0;
img.src = icons[count];

arrows[1].addEventListener("click", () => {
    if (count < icons.length - 1){
        count++
        img.src = icons[count];
    }
})

arrows[0].addEventListener("click", () => {
    if (count > 0){
        count--
        img.src = icons[count];
    }
})
