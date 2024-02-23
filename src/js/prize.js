const boxes = document.querySelectorAll(".prize__box");
const popup = document.getElementById("ohhh");
const closeButton = document.getElementById("close-button");

let isOpened = false;

function openPopup() {
  popup.classList.add("active");
}

function closePopup() {
  popup.classList.remove("active");
}

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    box.classList.add("open");
    if (isOpened === false) {
      openPopup();
      isOpened = true;
      console.log(isOpened);
    } else {
      window.location.href = "felicidades.html";
    }
  });
});

closeButton.addEventListener("click", function () {
  closePopup();
});
