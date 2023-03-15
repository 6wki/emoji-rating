const stars = document.querySelectorAll(".fa-star");
const emojise = document.querySelectorAll(".fa-regular");
const clr = ["#E21818", "#F94A29", "#F99417", "#BFDB38", "#03C988"];
const str = document.querySelector(".rating-container");
const emc = document.querySelector(".emoji-container");

stars.forEach((ele, ind) => {
  ele.addEventListener("click", () => {
    upodato(ind);
  });
});

function upodato(ind) {
  stars.forEach((stt, inox) => {
    if (inox < ind + 1) {
      stt.classList.add("active");
    } else {
      stt.classList.remove("active");
    }
  });
  emojise.forEach((emj) => {
    emj.style.visibility = "visible";
    emj.style.transform = `translateX(-${ind * 48}px`;
    emj.style.color = clr[ind];
  });
  emc.style.transform = "translateY(0)";
  str.style.transform = "translateY(0)";
  emj.style.transform = "rotate(0)";
}
