var quotes = [
  "The journey of a thousand miles begins with one step.",
  "Life is what happens when youre busy making other plans.",
  "When the going gets tough, the tough get going.",
  "You must be the change you wish to see in the world",
  "You only live once, but if you do it right, once is enough.",
];
function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
  document.getElementById("quoteDisplay").style.borderColor = "red";
  let hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("quoteDisplay").style.backgroundColor = hex;
  let buk = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("quoteDisplay").style.borderColor = buk;
  let duk = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("quoteDisplay").style.color = duk;
  let s = Math.floor(10 + Math.random() * 90);
  document.getElementById("quoteDisplay").style.fontSize = s;

  document.getElementById("quoteDisplay").style.fontFamily = listValue;
}

function calculate() {
  var values = document.getElementById("box1").value.split(/,/g);
  var sum = values.reduce(function (a, b) {
    return parseInt(a) + parseInt(b);
  });
  document.querySelector("#max").innerHTML = values.max();
  document.querySelector("#min").innerHTML = values.min();
  document.querySelector("#sum").innerHTML = sum;
  document.querySelector("#avg").innerHTML = sum / values.length;
  document.querySelector("#reverse").innerHTML = values.reverse().join(",");
}

Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

Array.prototype.min = function () {
  return Math.min.apply(null, this);
};
