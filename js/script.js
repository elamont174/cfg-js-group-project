const addToListInput = document.getElementById('user-input');
const addTask = document.getElementById('add-button');
const removeTask = document.getElementById('remove-button');
const division = document.getElementById('division');


addTask.addEventListener('click', function () {
    const text = addToListInput.value;

    if (text) {
        const divItem = document.createElement('p');
        divItem.textContent = text;

        divItem.addEventListener('mouseover', function () {
            divItem.style.backgroundColor = 'lightpink';
            divItem.style.fontWeight = 'bold';
            divItem.style.transition = '.5s'

        });

        divItem.addEventListener('mouseout', function () {
            divItem.style.backgroundColor = '';
            divItem.style.fontWeight = '';
        });

        division.appendChild(divItem);
        addToListInput.value = '';
    }
});

removeTask.addEventListener('click', function () {
    const divItems = division.getElementsByTagName('p');

    if (divItems.length > 0) {
        division.removeChild(divItems[divItems.length - 1]);
    }
});

// Credits:
// We looked at several different examples of code for To Do lists online, including from W3Schools and CodePen.
// We based our code on the example given to us in session 6.
// We went through every line of code on screen share as a team and manually rewrote it.
// We changed variable and ID names to make the code unique and improve our understanding. 
// We made sure that every team member understood the code and contributed. 