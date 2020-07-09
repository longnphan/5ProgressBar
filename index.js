function startBar() {
  let width = 0;
  let fill = setInterval(fillBar, 1000 / 60);

  function fillBar() {
    if (width >= 100) {
      clearInterval(fill);
    } else {
      width++;
      document.querySelector(".status-update").style.width = width + "%";
    }
  }
}
