function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function addDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
    const dayList = document.getElementById('days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const dayInnerText = dezDaysList[index];
        const dayNewLi = document.createElement('li');
        dayNewLi.classList.add('day');
        dayNewLi.innerHTML = dayInnerText;
        if (dayInnerText === 24 || dayInnerText === 25 || dayInnerText === 31) {
            dayNewLi.classList.add('holiday');
        }
        if (dayInnerText === 4 || dayInnerText === 11 || dayInnerText === 18 || dayInnerText === 25) {
            dayNewLi.classList.add('friday');
        }

        dayList.appendChild(dayNewLi);
    }
}

addDays();

function createHolidayButton(param) {
    const holidayDiv = document.querySelector('.buttons-container');
    const holidayButton = document.createElement('button');
    holidayButton.innerHTML = param;
    holidayButton.classList.add('holiday-button');
    holidayDiv.appendChild(holidayButton);
}

createHolidayButton('Feriados');

function addClickEventToHolidaysButton() {
    const holiButton = document.querySelector('.holiday-button');
    holiButton.addEventListener('click', toggleHighlightHolidays);
}

addClickEventToHolidaysButton();

function toggleHighlightHolidays() {
    const holidays = document.getElementsByClassName('holiday');
    for(index = 0; index < holidays.length; index += 1) {
        if(holidays[index].classList.contains('holiday-highlight')) {
            holidays[index].classList.remove('holiday-highlight');    
        }else {
            holidays[index].classList.add('holiday-highlight');
        }
    }
}