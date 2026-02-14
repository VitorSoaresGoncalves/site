const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const progress = document.getElementById("progress");

playBtn.addEventListener("click", () => {
  if(audio.paused){
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
});

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

// 
//
document.addEventListener("DOMContentLoaded", function() {

  const canvases = document.querySelectorAll(".scratchCanvas");

  canvases.forEach(canvas => {

    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // camada rosa
    ctx.fillStyle = "#ff8fec";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000000";
    ctx.font = "bold 10px 'Playwrite AT'";
    ctx.textAlign = "center";
    ctx.shadowColor = "pink";
    ctx.shadowBlur = 5;
    ctx.fillText("Raspe aqui 💖", canvas.width / 2, canvas.height / 2);

    ctx.globalCompositeOperation = "destination-out";

    // 🔥 DESKTOP - raspa só passando o mouse
    canvas.addEventListener("mousemove", (e) => {

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ctx.beginPath();
      ctx.arc(x, y, 25, 0, Math.PI * 2);
      ctx.fill();
    });

    // 🔥 CELULAR - raspa arrastando o dedo
    canvas.addEventListener("touchmove", (e) => {
      e.preventDefault();

      const rect = canvas.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const y = e.touches[0].clientY - rect.top;

      ctx.beginPath();
      ctx.arc(x, y, 25, 0, Math.PI * 2);
      ctx.fill();
    });

  });

});


