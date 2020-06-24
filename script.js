var checkbox = document.querySelector('input');
const bod = document.querySelector('body');
const sqbox = document.querySelectorAll('header,.box1,.box2,.box3,.box4,.sub1,.sub2,.sub3,.sub4,.sub5,.sub6,.sub7,.sub8');
const tex = document.querySelectorAll('h1,.number,.vi');
const textt = document.querySelectorAll('.heade>h1,.mele>p');

checkbox.addEventListener('change', function() {
        if (checkbox.checked == true) {
            bod.style.backgroundColor = 'white';
            sqbox.forEach(function(jai) {
                jai.style.backgroundColor = "hsl(227, 47%, 96%)";
            });
            tex.forEach(function(kai) {
                kai.style.color = "hsl(230, 17%, 14%)";
            });
            textt.forEach(function(mai) {
                mai.style.color = "hsl(228, 12%, 44%)";
            });

        } else {
            bod.style.backgroundColor = '#1e202a';

            sqbox.forEach(function(jai) {
                jai.style.backgroundColor = "hsl(228, 28%, 20%)";
            });
            tex.forEach(function(kai) {
                kai.style.color = "hsl(0, 0%, 100%)";
            });
        }

    }

)