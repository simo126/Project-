function AddElement(x) {
  let v = document.getElementById("insideburger");
  v.innerHTML += "<div id=" + x + "> </div>";
}
function remElement(x) {
  let v = document.getElementById("insideburger");
  let elementToRemove = document.getElementById(x);

  if (elementToRemove) {
    v.removeChild(elementToRemove);
  }
}
function removeAll() {
  let container = document.getElementById("insideburger");
  insideburger.innerHTML = "";
}
