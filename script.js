let decrease = document.querySelector(".color");
let increase = document.getElementById("color1");

let button = document.getElementById("span"),
  count = 0;
increase.onclick = function () {
  count += 1;
  button.innerHTML = count;
  button.style.color = "green";
};
let button1 = document.getElementById("span"),
  count1 = 0;
decrease.onclick = function () {
  count -= 1;
  button1.innerHTML = count;
  button1.style.color = "red";
};

let img1 = document.getElementsByClassName("img1");
let img2 = document.getElementsByClassName("img2");
let img3 = document.getElementsByClassName("img3");
let img4 = document.getElementsByClassName("img4");

img1.onclick(img1.src = img1);
img2.onclick(img1.src = img2);
img3.onclick(img1.src = img3);
img4.onclick(img1.src = img4);
