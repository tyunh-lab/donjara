const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");
function getRandomInt() {
  return Math.floor(Math.random() * 5 + 1);
}
toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});

var id_zero = 150,
  id_one = 150,
  id_two = 150,
  id_three = 150;

const num0 = document.getElementById("num0"),
  num1 = document.getElementById("num1"),
  num2 = document.getElementById("num2"),
  num3 = document.getElementById("num3");

id_zero = 150;
id_one = 150;
id_two = 150;
id_three = 150;

function ClickPlusEvent(i) {
  if (i == 0) {
    id_zero++;
    id_zero = id_zero < 10 ? "0" + id_zero : id_zero;
    num0.innerText = id_zero;
  } else if (i == 1) {
    id_one++;
    id_one = id_one < 10 ? "0" + id_one : id_one;
    num1.innerText = id_one;
  } else if (i == 2) {
    id_two++;
    id_two = id_two < 10 ? "0" + id_two : id_two;
    num2.innerText = id_two;
  } else if (i == 3) {
    id_three++;
    id_three = id_three < 10 ? "0" + id_three : id_three;
    num3.innerText = id_three;
  }
}
function ClickMinusEvent(i) {
  if (i == 0) {
    if (id_zero > 1) {
      id_zero--;
      id_zero = id_zero < 10 ? "0" + id_zero : id_zero;
      num0.innerText = id_zero;
    }
  } else if (i == 1) {
    if (id_one > 1) {
      id_one--;
      id_one = id_one < 10 ? "0" + id_one : id_one;
      num1.innerText = id_one;
    }
  } else if (i == 2) {
    if (id_two > 1) {
      id_two--;
      id_two = id_two < 10 ? "0" + id_two : id_two;
      num2.innerText = id_two;
    }
  } else if (i == 3) {
    if (id_three > 1) {
      id_three--;
      id_three = id_three < 10 ? "0" + id_three : id_three;
      num3.innerText = id_three;
    }
  }
}

const plus0 = document.querySelector("#plus0"),
  plus1 = document.querySelector("#plus1"),
  plus2 = document.querySelector("#plus2"),
  plus3 = document.querySelector("#plus3"),
  muins0 = document.querySelector("#minus0"),
  muins1 = document.querySelector("#minus1"),
  muins2 = document.querySelector("#minus2"),
  muins3 = document.querySelector("#minus3"),
  dicebutton = document.querySelector("#dicebutton"),
  dice0 = document.querySelector("#dice0");
var dicedate0 = 1,
  dicedate1 = 1;

plus0.addEventListener("click", () => {
  ClickPlusEvent(0);
});
plus1.addEventListener("click", () => {
  ClickPlusEvent(1);
});
plus2.addEventListener("click", () => {
  ClickPlusEvent(2);
});
plus3.addEventListener("click", () => {
  ClickPlusEvent(3);
});
muins0.addEventListener("click", () => {
  ClickMinusEvent(0);
});
muins1.addEventListener("click", () => {
  ClickMinusEvent(1);
});
muins2.addEventListener("click", () => {
  ClickMinusEvent(2);
});
muins3.addEventListener("click", () => {
  ClickMinusEvent(3);
});
dicebutton.addEventListener("click", () => {
  dicedate0 = getRandomInt();
  dicedate1 = getRandomInt();
  dice0.innerHTML = dicedate0 + "+" + dicedate1 + "=" + (dicedate0 + dicedate1);
});
console.log(getRandomInt());
