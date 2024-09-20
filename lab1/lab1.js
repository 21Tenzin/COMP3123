//COMP 3123 LAB EXERCISE 1

// Question 1
var givenString = "the quick brown fox"
var words = givenString.split("");
for (let i=0;i<words.length;i++)
{ 
	words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
var capitalizedString = words.join("");
console.log(capitalizedString);

// Question 2
var num1 = 1000;
var num2 = 510;
var num3 = 440;
var largest = Math.max(num1, num2, num3);
console.log(largest);
console.log(Math.max (1,0,1));
console.log(Math.max (0,-10,-20));
console.log(Math.max (1000,510,440));


// Question 3
function right(s)
{
	if (s.length >1)
		return s.slice(-3) + s.slice(0,-3);
	return s;
}
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));


//Question 4
function angle_Type(a)
{
	if (a>0 && a<90)
		return a = "Acute angle";
	else if (a ==90)
		return a = "Right angle";
	else if (a>90 && a<180)
		return a = "Obtuse angle";
	else
		return a = "Straight angle";
}
console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))

