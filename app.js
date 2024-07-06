// console.log("2"+"7");
// alert("Load");

// var name = "Fasih";
// console.log(name);

var eng = +prompt("Enter english marks");
var Math = +prompt("Enter Math marks");
var phy = +prompt("Enter Physics marks");
var isl = +prompt("Enter Islamiat marks");

var obtained_marks = eng + Math + phy + isl;
console.log("Your obtained marks are: "+ obtained_marks);

var percentage= obtained_marks/400 *100;
console.log("Your Percenatge is: "+ percentage+"%");
