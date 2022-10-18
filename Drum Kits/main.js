const kits = ["crash", "kick", "snare", "birds"];
const container = document.querySelector(".container");
kits.forEach((kit) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = kit;
  container.appendChild(btn);
  const audioEl = document.createElement("audio");
  audioEl.src = "sounds/" + kit + ".mp3";
  container.appendChild(audioEl);
  btn.addEventListener("click", () => {
    audioEl.play();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === kit.slice(0, 1)) {
      audioEl.play();
      btn.style.transform = "scale(0.9)";
      setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 100);
    }
  });
});
