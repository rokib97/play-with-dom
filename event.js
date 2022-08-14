function makeRed() {
  document.body.style.backgroundColor = "red";
}

const greenBtn = document.getElementById("green-btn");
greenBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});
