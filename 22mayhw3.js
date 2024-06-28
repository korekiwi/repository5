const headers = document.querySelectorAll(".header");
const boxes = document.querySelectorAll(".box");

let closeFlag = true;
let lastI = -1;
let begin = true;

for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", () => {
        if (begin){
            lastI = i;
            begin = false;
        }
        boxes.forEach(element => {
            element.style.display = 'none';
        });
        if(lastI == i){
            if(closeFlag){
                boxes[i].style.display = 'block';
                closeFlag = false;
            }
            else{
        closeFlag = true;}
        }
        else {
            boxes[i].style.display = 'block';
        }
        lastI = i;
    })
}