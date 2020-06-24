var checkbox = document.querySelector('input');
const bod = document.querySelector('body');


checkbox.addEventListener('change', function() {
        if (checkbox.checked == true) {
            bod.style.backgroundColor = "white";
        } else {
            console.log(bod.style.backgroundColor = 'red');
        }


    }

)