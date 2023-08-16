const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  let leftPosition = e.pageX;
  let topPosition = e.pageY;

  cursor.style.left = leftPosition + "px";
  cursor.style.top = topPosition + "px";
})

