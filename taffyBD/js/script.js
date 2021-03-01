let container = document.getElementById("cards_container");
let number = container.childElementCount;

function addCard() {
    let card = document.createElement("div");
    card.className = "card_body";
    number++;
    card.id = number;
    container.appendChild(card);
}

function checkField() {
    if(number > 0) {
        safeRemoveCard();
    } else {
        alert("Поле пустое!");
    }
}

function safeRemoveCard() {
    container.removeChild(container.lastElementChild);
    number--;
}

function clearAll() {
    let j = number;
    if(number > 0) {
        for (i = 0; i < j; i++) {
            safeRemoveCard();
        }
    } else {
        alert("Поле пустое!");
    }
}