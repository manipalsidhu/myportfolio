const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


//HTML bar Script
let number = document.getElementById("HTMLnumber");
let counter = 0;
setInterval(() => {
    if (counter == 95) {
        clearInterval();
    }
    else {
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 21);

//CSS bar Script
let cssnumber = document.getElementById("cssnumber");
let csscounter = 0;
setInterval(() => {
    if (csscounter == 90) {
        clearInterval();
    }
    else {
        csscounter += 1;
        cssnumber.innerHTML = csscounter + "%";
    }
}, 22);

//JS bar Script
let jsnumber = document.getElementById("jsnumber");
let jscounter = 0;
setInterval(() => {
    if (jscounter == 80) {
        clearInterval();
    }
    else {
        jscounter += 1;
        jsnumber.innerHTML = jscounter + "%";
    }
}, 25);

//num bar Script
let numnumber = document.getElementById("number");
let numcounter = 0;
setInterval(() => {
    if (numcounter == 80) {
        clearInterval();
    }
    else {
        numcounter += 1;
        numnumber.innerHTML = numcounter + "%";
    }
}, 25);
