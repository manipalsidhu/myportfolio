const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function calculateAge() {
    let inputDateTime = new Date(document.getElementById("datetime-input").value);

    let birthDetails = {
        date: inputDateTime.getDate(),
        month: inputDateTime.getMonth() + 1,
        year: inputDateTime.getFullYear()
    };

    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if (
        birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
    ) {
        alert("Not Born Yet");
        displayResult("-", "-", "-");
        return;
    }

    let birthYear = currentYear - birthDetails.year;

    if (currentMonth >= birthDetails.month) {
        var birthMonth = currentMonth - birthDetails.month;
    } else {
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if (currentDate >= birthDetails.date) {
        var birthDate = currentDate - birthDetails.date;
    } else {
        birthMonth--;
        let daysInPrevMonth = months[(currentMonth + 10) % 12];
        birthDate = daysInPrevMonth + currentDate - birthDetails.date;
        if (birthMonth < 0) {
            birthMonth = 11;
            birthYear--;
        }
    }
    displayResult(birthDate, birthMonth, birthYear);

    // Set the date we're counting from
    let inputTime = inputDateTime.getTime();

    // Update the age every 1 second
    var x = setInterval(function () {
        let now = new Date().getTime();
        let distance = now - inputTime;

        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }, 1000);
}

function displayResult(bDate, bMonth, bYear) {
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}

function leapChecker(year) {
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        months[1] = 29;
    } else {
        months[1] = 28;
    }
}
