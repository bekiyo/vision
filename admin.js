document.addEventListener('DOMContentLoaded', function() {
    const calendarBody = document.getElementById('calendar-body');

    function generateCalendar(month, year) {
        calendarBody.innerHTML = '';
        const firstDay = new Date(year, month, 1).getDay(); // First day of the month
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total days in the month

        let date = 1;
        for (let i = 0; i < 6; i++) {
            let row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                let cell = document.createElement('td');
                if (i === 0 && j < firstDay) {
                    cell.innerHTML = '';
                } else if (date > daysInMonth) {
                    break;
                } else {
                    cell.innerHTML = date;
                    date++;
                }
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
    }

    generateCalendar(8, 2024); // September 2024 (month is 0-indexed, so 8 = September)
});
