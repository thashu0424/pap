const lear1 = document.querySelector('.learn1>button');
const lear2 = document.querySelector('.learn2>button');
const lear3 = document.querySelector('.learn3>button');
const first = document.querySelector('.first-li1');
const second = document.querySelector('.first-li2');
const third = document.querySelector('.first-li3');
var checkbox = document.querySelector('input');
console.log(checkbox);

checkbox.addEventListener('change', function() {
    if (checkbox.checked == true) {
        first.textContent = '$19.99';
        second.textContent = '$24.99';
        third.textContent = '$39.99';
        second.style.color = "white";


    } else {
        first.textContent = '$199.99';
        second.textContent = '$249.99';
        third.textContent = '$399.99';
        second.style.color = "white";
        lear1.style.backgroundColor = "hsl(237, 63%, 64%)";
        lear2.style.backgroundColor = "white";
        lear3.style.backgroundColor = "hsl(237, 63%, 64%)";
        lear1.style.color = "white";
        lear2.style.color = "hsl(237, 63%, 64%)";
        lear3.style.color = "white";
    }
});