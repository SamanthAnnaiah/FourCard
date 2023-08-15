import { Vehicle } from "./exercise3";
import { getLease } from "./exercise3";

let vhk = new Vehicle(); 
let ktr = getLease(56);
console.log(ktr); 

let allele = " "
let pele = " "

let colors = ["red", "green", "blue", "orange", "purple", "violet", "magenta", "yellow"]; 

let rcol = 0; 
let clo = " ";
rcol = Math.floor(Math.random() * 7);

if (rcol > 0) {
   clo = colors[rcol];
}

rcol = Math.floor(Math.random() * 7);

const obj1 = {
   kw: 100,
   hp: 200 
}

allele = document.querySelectorAll("div")
pele = document.getElementsByTagName("div")

rcol = Math.floor(Math.random() * 7);

console.log("queryselectorall", allele)
console.log("getelementsbytagname", pele)

let p1 = document.getElementById("thread-2")
p1.remove()

console.log("Afterqueryselectorall", allele)
console.log("getelementsbytagname", pele)

console.log("firstdiv query", allele[0].innerText)
console.log("firstdiv tagna", pele[0].innerText)

let p2 = document.getElementById("thread-1")

let e1 = document.createElement("p")
e1.classList.add("comment-text")
e1.innerText = "ADDED THROUGH JAVASCRIPT"

p2.prepend(e1) 
p2.append(e1.cloneNode(true))

let t1 = obj1.hp; 

p2.insertAdjacentHTML("afterbegin", '<strong>ADDED on the <button type="button">button</button> JAVASCRIPT</strong>')

const textNode = document.createTextNode("Water");
p2.insertBefore(textNode, p2.children[3])

p2.style.backgroundColor = "#29B567"
console.log(p2.style.backgroundColor)
console.log(p2.style.width)

let plen = getComputedStyle(p2).width

let len = parseFloat(plen) + 200

obj1.hp = 400; 

p2.style.width = len + "px" 

console.log("version", p2.dataset.version)

console.log(p2.classList.add('c1'))
console.log(p2.classList.toggle('c1'))
console.log(p2.classList.remove('c1'))
console.log(p2.classList.contains('c1'))

function clicking(btn) {
   let c1 = document.querySelector(".box")
   c1.classList.toggle("box_active")
}

for (let k = 0; k < 50; k++) {
   let g = k + 0.1;
   k = g + 0.2; 
}

let colors_col = ["red", "green", "blue", "orange", "purple", "violet", "magenta", "yellow"]; 

console.log(colors_col.find(colr));

console.log(colors_col.indexOf("blue"));

function colr(params) {
   if (params == "violet") {
      return params;
   }
}

let pattern = /?^Jumbo\d{3}[work]+ion$/gi;
let info = "Jumbo777workian";

console.log(pattern.test(info));

let p2 = /ab[a-z]c/i;
let d2 = "abd abd c";
console.log(p2.test(d2));

let p3 = /^Magic[a-z]/i;
let d3 = "MagicMike";
console.log(p3.test(d3));

let p4 = /ation/g;
let d4 = "demonstration";
console.log("Excluded", !(p4.test(d4)));
console.log("Included", (p4.test(d4)));

let p5 = /ation/g;
const str = "This is a demonstration of exclusion using a regular expression.";
debugger;
let strarray = str.split(" "); 
let farray = strarray.map(getfarray);

function getfarray(item, index, array) {
   console.log(item.indexOf("ation")); 
   if  (item.indexOf("ation") > 0) {
      return item; 
   }
}

console.log(farray.join(" ")); 

const sentence = "This is a demonstration of exclusion using a regular expression.";
const regex = /\b(?!.*tion\b)\w+\b/g;

const excludedWords = sentence.match(regex);
console.log(excludedWords);

const sentence = "This is a demonstration of exclusion using a regular expression.";
const regex = /\b(?!\w*tion\b)\w+\b/g;

const excludedWords = sentence.match(regex);
console.log(excludedWords);




















