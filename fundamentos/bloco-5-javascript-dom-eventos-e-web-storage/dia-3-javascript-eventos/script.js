let arrayOfFridayDays = [4, 11, 18, 25];

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
    const buttonsContainer = document.querySelector('.buttons-container');
    const holidayButton = document.createElement('button');
    holidayButton.innerHTML = param;
    holidayButton.classList.add('btn-holiday');
    buttonsContainer.appendChild(holidayButton);
}

createHolidayButton('Feriados');

function addClickToHolidaysBtn() {
    const holiBtn = document.querySelector('.btn-holiday');
    holiBtn.addEventListener('click', toggleHighlightHolidays);
}

addClickToHolidaysBtn();

function toggleHighlightHolidays() {
    const holidays = document.getElementsByClassName('holiday');
    for (let index = 0; index < holidays.length; index += 1) {
        if (holidays[index].classList.contains('holiday-highlight')) {
            holidays[index].classList.remove('holiday-highlight');
        } else {
            holidays[index].classList.add('holiday-highlight');
        }
    }
}

function createFridayBtn(param) {
    const buttonsContainer = document.querySelector('.buttons-container');
    const fridayBtn = document.createElement('button');
    fridayBtn.innerHTML = param;
    fridayBtn.classList.add('btn-friday');
    buttonsContainer.appendChild(fridayBtn);
}

createFridayBtn('Sexta-Feira');

function addClickToFridayBtn() {
    const fridayBtn = document.querySelector('.btn-friday');
    fridayBtn.addEventListener('click', toggleModifyTextOnFridays);
}

function toggleModifyTextOnFridays() {
    const fridays = document.getElementsByClassName('friday');
    for(let index = 0; index < fridays.length; index += 1) {
        if(fridays[index].innerHTML !== "SEXTOU!!") {
            fridays[index].innerHTML = "SEXTOU!!";
        }else {
            fridays[index].innerHTML = arrayOfFridayDays[index];
        }
    }
}

addClickToFridayBtn();

const dayList = document.getElementsByClassName('day');

function createMouseOverEffect() {
    const dayList = document.getElementsByClassName('day');
    for(let index = 0; index < dayList.length; index += 1) {
        dayList[index].addEventListener('mouseover', function(event) {
            event.target.style.fontSize = '35px';
            event.target.style.fontWeight = '750';
        });
    }
}

function createMouseOutEffect() {
    const dayList = document.getElementsByClassName('day');
    for(let index = 0; index < dayList.length; index += 1) {
        dayList[index].addEventListener('mouseout', function(event) {
            event.target.style.fontWeight = '200';
            event.target.style.fontSize = '20px';
        });
    }
}

createMouseOverEffect();
createMouseOutEffect();

const myTasks = document.querySelector('.my-tasks');

function addTaskToCalendar(task) {
    const newSpan = document.createElement('span');
    newSpan.innerHTML = task;
    const myTasks = document.querySelector('.my-tasks');
    myTasks.appendChild(newSpan);
}

addTaskToCalendar('Malhar');

function addCheckTaskElement(color) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('task');
    newDiv.style.backgroundColor = color;
    myTasks.appendChild(newDiv);
}

addCheckTaskElement('red');

function addTaskSelectedEvent() {
    const allTaskmarkers = document.getElementsByClassName('task');
    for(let index = 0; index < allTaskmarkers.length; index += 1) {
        allTaskmarkers[index].addEventListener('click', function(event) {
            if(event.target.classList.contains('selected')) {
                event.target.classList.remove('selected');
            }else {
               event.target.classList.add('selected');
            }
        });
    }
}

addTaskSelectedEvent();