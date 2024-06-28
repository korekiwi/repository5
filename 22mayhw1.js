const pointer = document.querySelector(".pointer");
const line = document.querySelector(".line");

const origLineLeft = line.offsetLeft;
const lineWidth = line.offsetWidth + line.offsetLeft;

let flag = false;

pointer.addEventListener('mousedown', () => {
    flag = true;
})

window.addEventListener('mouseup', () => {
    flag = false;
})

pointer.addEventListener("mousemove", (e) => {
    if(
        (pointer.offsetLeft > origLineLeft && pointer.offsetLeft < lineWidth - 10 && flag) ||
        (pointer.offsetLeft <= origLineLeft && e.pageX >= origLineLeft && flag) ||
        (pointer.offsetLeft >= lineWidth - 10 && e.pageX <= lineWidth && flag)
    )
    {
        pointer.style.left = e.pageX - pointer.offsetWidth / 2 + 'px';
    }
})
