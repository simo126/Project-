function AddElement(x, y) {
  let v = document.getElementById("insideburger");
  let counterElement = document.querySelector(".counter-" + x);
  let currentValue = parseInt(counterElement.textContent);
  if (currentValue < 3) {
    v.innerHTML += `<div id="${x}"></div>`;
    counterElement.textContent = currentValue + 1;
    updatePrixFinal(y);
  }
}
function updatePrixFinal(priceIncrement) {
  let finalePrice = document.querySelector(".Final-price");
  let currentPriceText = finalePrice.textContent;
  let currentPrice = parseInt(currentPriceText.split(" ")[2]);
  let newPrice = currentPrice + priceIncrement;

  finalePrice.textContent = "Final price: " + newPrice + "dh";
}
function remElement(x, y) {
  let v = document.getElementById("insideburger");
  let elementToRemove = document.getElementById(x);
  let counterElement = document.querySelector(".counter-" + x);
  let currentValue = parseInt(counterElement.textContent);

  if (elementToRemove) {
    v.removeChild(elementToRemove);
    if (currentValue > 0) {
      counterElement.textContent = currentValue - 1;
      updatePrixFinal(y);
    }
  }
}
function removeAll() {
  let counters = document.querySelectorAll(
    ".counter-ketchup, .counter-mayo, .counter-mustard, .counter-biggy, .counter-beef, .counter-turkey, .counter-fish, .counter-chicken, .counter-swiss, .counter-american, .counter-cheedar, .counter-mozarella,.counter-lettuce, .counter-tomato, .counter-onion, .counter-pickles"
  );
  counters.forEach((counter) => {
    counter.textContent = "0";
  });

  let container = document.getElementById("insideburger");
  container.innerHTML = "";
  let finalePrice = document.querySelector(".Final-price");
  finalePrice.textContent = "Final price: " + 0 + "dh";
}
