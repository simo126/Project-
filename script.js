/*function AddElement(x) {
  let v = document.getElementById("insideburger");
  v.innerHTML += "<div id=" + x + "> </div>";
}
function remElement(x) {
  let v = document.getElementById("insideburger");
  let elementToRemove = document.getElementById(x);

  if (elementToRemove) {
    v.removeChild(elementToRemove);
  }
  
}*/

function AddElement(x, y) {
  let v = document.getElementById("insideburger");
  let counterElement = document.querySelector(".counter-" + x);
  let currentValue = parseInt(counterElement.textContent);
  if (currentValue < 3) {
    v.innerHTML += `<div id="${x}"></div>`;
    counterElement.textContent = currentValue + 1;
    updateFinalPrice(y);
  }
}
function updateFinalPrice(priceIncrement) {
  let finalPriceElement = document.querySelector(".Final-price");
  let currentPriceText = finalPriceElement.textContent;
  let currentPrice = parseInt(currentPriceText.split(" ")[2]); // Extract current price value
  let newPrice = currentPrice + priceIncrement; // Calculate new price

  finalPriceElement.textContent = "Final price: " + newPrice + "dh";
}
function remElement(x) {
  let v = document.getElementById("insideburger");
  let elementToRemove = document.getElementById(x);
  let counterElement = document.querySelector(".counter-" + x);
  let currentValue = parseInt(counterElement.textContent);

  if (elementToRemove) {
    v.removeChild(elementToRemove);
    if (currentValue > 0) {
      counterElement.textContent = currentValue - 1;
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
  let finalPriceElement = document.querySelector(".Final-price");
  finalPriceElement.textContent = "Final price: " + 0 + "dh";
}
