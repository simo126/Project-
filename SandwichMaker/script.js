//to add ingredients to the burger and and adding its value to the final price
function AddElement(x, y) {
  let v = document.getElementById("insidesandwich");
  let counterElement = document.querySelector(".counter-" + x);
  let currentValue = parseInt(counterElement.textContent);
  if (currentValue < 3) {
    v.innerHTML += `<div id="${x}"></div>`;
    counterElement.textContent = currentValue + 1;
    updatePrixFinal(y);
  } else {
    alert(
      "We are sorry but you cant add more than 3 ingredients!" + "\u{1F622}"
      //alert the customer that he cant get more than 3 elements from one ingredient
      //purpose to not make the sandwich so much big its illogical having a 36 piece of meat in one sandwich hhhh
    );
  }
}
//to update the Finale Price
function updatePrixFinal(priceIncrement) {
  let finalePrice = document.querySelector(".final");
  let currentPriceText = finalePrice.textContent;
  let currentPrice = parseInt(currentPriceText.split(" ")[0]);
  let newPrice = currentPrice + priceIncrement;

  finalePrice.textContent = newPrice + " dh";
}
//to remove any ingredient you want from the burger and also reducing the price of it.
function remElement(x, y) {
  let v = document.getElementById("insidesandwich");
  let elementToRemove = document.getElementById(x);
  let counterElement = document.querySelector(".counter-" + x);
  let currentValue = parseInt(counterElement.textContent);

  if (elementToRemove) {
    v.removeChild(elementToRemove);
    if (currentValue > 0) {
      counterElement.textContent = currentValue - 1;
      updatePrixFinal(y);
    }
  } else {
    alert("You cant remove something that doesnt exist!" + "\u{1F604}");
    //alerrt the client because you cant go below wero ingredients
  }
}
//to remove all elements inside of the burger and make the price of the sandwich equal 0
function removeAll() {
  let counters = document.querySelectorAll(
    ".counter-ketchup, .counter-mayo, .counter-mustard, .counter-biggy, .counter-beef, .counter-turkey, .counter-fish, .counter-chicken, .counter-swiss, .counter-american, .counter-cheedar, .counter-mozarella,.counter-lettuce, .counter-tomato, .counter-onion, .counter-pickles"
  );
  counters.forEach((counter) => {
    counter.textContent = "0";
  });

  let container = document.getElementById("insidesandwich");
  container.innerHTML = "";
  let finalePrice0 = document.querySelector(".prix.final");
  finalePrice0.textContent = "0 dh";
}
