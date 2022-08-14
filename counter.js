let count = 0;

function plusOne() {
  count++;
  const counter = document.getElementById("count");
  counter.innerText = count;
}

// const plusBtn = document.getElementById("plus-btn");
// plusBtn.addEventListener("click", function () {
//   //   count = count + 1;
//   count++;
//   const counter = document.getElementById("count");
//   counter.innerText = count;

//   //   document.getElementById("count").innerText = count;
// });

const minusBtn = document.getElementById("minus-btn");
minusBtn.addEventListener("click", function () {
  //   count = count - 1;
  count--;
  const counter = document.getElementById("count");
  counter.innerText = count;

  //   document.getElementById("count").innerText = count;
});
