const mainElement = document.querySelector("main");
const giftCard = document.createElement("div");
giftCard.classList.add("gift-card");
const giftTitle = document.createElement("h2");
giftTitle.textContent = "Birthday Gift";

const giftDesc = document.createElement("p");
giftDesc.textContent = "A fun surprise box!";

giftCard.append(giftTitle, giftDesc);

mainElement.append(giftCard);