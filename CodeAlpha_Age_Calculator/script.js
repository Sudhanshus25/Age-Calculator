function calculateAge() {
    var dobDate = new Date(document.getElementById('dob').value);
    var today = new Date();
    var age = today.getFullYear() - dobDate.getFullYear();
    var monthDiff = today.getMonth() - dobDate.getMonth();
    var dayDiff = today.getDate() - dobDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
        monthDiff += 12;
    }

    if (dayDiff < 0) {
        var lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        dayDiff = lastMonth.getDate() - dobDate.getDate() + today.getDate() + 1;
    }

    document.getElementById('years').textContent = age;
    document.getElementById('months').textContent = monthDiff;
    document.getElementById('days').textContent = dayDiff;
}

document.getElementById('calculate').addEventListener("click", calculateAge);


