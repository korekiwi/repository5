const pointer = document.querySelector(".pointer");
const line = document.querySelector(".line");

const origLineLeft = line.offsetLeft;
const lineWidth = line.offsetWidth + line.offsetLeft;

pointer.addEventListener("mousemove", (e) => {
    if(
        (pointer.offsetLeft > origLineLeft && pointer.offsetLeft < lineWidth - 10) ||
        (pointer.offsetLeft <= origLineLeft && e.pageX >= origLineLeft) ||
        (pointer.offsetLeft >= lineWidth - 10 && e.pageX <= lineWidth)
    )
    {
        pointer.style.left = e.pageX - pointer.offsetWidth / 2 + 'px';
    }
})
