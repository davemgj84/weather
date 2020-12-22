const show = (data) => {
  if (data !== undefined) {
    const info = document.getElementById("info-container");
    info.style.opacity = 1;
  }
};

export default show;
