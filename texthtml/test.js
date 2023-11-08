const image = document.getElementsByTagName("img");
const img_left = document.getElementsByClassName("img_left")[0];
let selectedImage = null;

Array.from(image).forEach(function (list_img) {
  list_img.addEventListener("click", () => {
    if (list_img === selectedImage) {
      list_img.style.border = "none";
      selectedImage = null;
      img_left.innerHTML = "";
    } else {
      if (selectedImage) {
        selectedImage.style.border = "none";
      }
      list_img.style.border = "1px solid black";
      selectedImage = list_img;
      var img_change = `<img src="${list_img.src}" alt="" />`;
      img_left.innerHTML = img_change;
    }
  });
});
