var marketDB = TAFFY([{ name: "Onion" }, { name: "Apple" }, { name: "Garlic" }]);

function getSortedList() {
    let j = number;
    for (i = 0; i < j; i++) {
        safeRemoveCard();
    }
    let marketArr = marketDB().order("name").select("name");
    for (i = 0; i < marketArr.length; i++) {
        let card = document.createElement("div");
        number++;
        card.id = number;
        card.className = "card_body";
        card.setAttribute("data-market", marketArr[i]);
        card.innerText = marketArr[i];
        container.appendChild(card);   
    }
}