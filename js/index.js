// SELECTING DOM ELEMENTS

const body = document.querySelector('body');
const button = document.querySelector('.add-button');
const inputNthColors = document.querySelector('.nth-of-colors-input');
const deleteButton = document.querySelectorAll('.x-buttons');
const mainSection = document.querySelector('.main-section');

body.addEventListener('click', evt => {
    evt.preventDefault();
    const event = evt.target;

    // *  WEIRD BEHAVIOR clicking on any of the x button removes first the last one instead of the intended one.
    // ! WEIRD BEHAVIOR FOUND. THE PROBLEM WAS IN THE CSS SELECTOR NTH OF TYPE. THE LAST ELEMENT WASN'T ACTUALLY BEING REMOVED INSTEAD
    // ! THE COLOR OF THE DIV CHANGES BECAUSE OF THE NTH OF TYPE PSEUDO CLASS

    // USING FOR EACH
//    deleteButton.forEach(button => {
//     if(event === button) {
//         button.closest('div').remove();
//     }
//    })

// USING FOR OF
//    for(let button of deleteButton) {
    // if(event === button) {
        // button.closest('div').remove();
        // console.log(button)
    // }
//    }
// USING TRADITIONAL FOR LOOP.
//  * IN TERMS OF THE TIME COMPLEXITY THE TRADITIONAL FOR LOOP IS WAY FASTER THAN THE FOR EACH LOOP

for(let i = 0; i < deleteButton.length; i++) {
    if(event === deleteButton[i]) {
        deleteButton[i].parentElement.remove();
    }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

    const addDivBoxes = (inputValue) => {
        if(event === button) {
            for(let i = 0; i < inputValue.value; i++) {
                const div = document.createElement("div");
                const deleteDivButton = document.createElement('span');
                deleteDivButton.innerHTML = "&#x2715";
                deleteDivButton.classList.add("x-buttons");
                div.appendChild(deleteDivButton);
                div.style.backgroundColor = getRandomColor();

                const newContent = document.createTextNode(getRandomColor());
                // The inner text of the div is set to the getRandomColor function which generates a random color whenever called upon.
                div.appendChild(newContent);
                mainSection.appendChild(div);
                // if(event === deleteDivButton) {
                    // deleteDivButton.parentElement.remove();
                // }
            }
        }
      
    }
if(event.closest(".x-buttons")) {
    const generatedDivItem = event.closest("div");
    generatedDivItem.remove();
}
    addDivBoxes(inputNthColors);

})