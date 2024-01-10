const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const errMsg = document.querySelector(".err-msg");
const successMsg = document.querySelector(".success-msg");
console.log(inputs);

console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((n) => {
    if (!n.value) {
      errMsg.classList.remove("d-none");
      if (!successMsg.classList.contains("d-none")) {
        successMsg.classList.add("d-none");
      }
    }
    if (n.value) {
      successMsg.classList.remove("d-none");
      if (!errMsg.classList.contains("d-none")) {
        errMsg.classList.add("d-none");
      }
    }
  });
});
