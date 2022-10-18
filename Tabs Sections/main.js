const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const textContent = document.querySelectorAll(".content");
tabs.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("live");
    });
    event.target.classList.add("live");
    textContent.forEach((text) => {
      text.classList.remove("live");
    });
    const element = document.getElementById(id);
    console.log(element);
    element.classList.add("live");
  }
});
