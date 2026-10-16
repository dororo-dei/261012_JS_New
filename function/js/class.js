// window.addEventListener("load", () => {
//     (defer를 기입하지 않으면 여기 안에 자바스크립트 내용을 담아서 작성하면된다)
// });
// console.log("hi");
const open = document.querySelector("#open");
const detail = document.querySelector("#detail");
const closeBtn = document.querySelector("#close");
// console.log(open);
open.addEventListener("click", () => {
  detail.style.display = "block";
  open.style.display = "none";
//   open.style.backgroundColor = "yellow";
//   closeBtn.style.backgroundColor = "red";
});
closeBtn.addEventListener("click", () => {
  detail.style.display = "none";
  open.style.display = "block";
});
