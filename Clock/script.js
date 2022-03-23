const clock = document.getElementById('clock');

setInterval(() => {
  let time = new Date().toLocaleTimeString();
  clock.innerHTML = time;
}, 1000)