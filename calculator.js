function getNum7(){
	document.calc.output.value += "7";
}
function getNum8(){
	document.calc.output.value += "8";
}
function getNum9(){
	document.calc.output.value += "9";
}
function getNum4(){
	document.calc.output.value += "4";
}
function getNum5(){
	document.calc.output.value += "5";
}
function getNum6(){
	document.calc.output.value += "6";
}
function getNum1(){
	document.calc.output.value += "1";
}
function getNum2(){
	document.calc.output.value += "2";
}
function getNum3(){
	document.calc.output.value += "3";
}
function getNum0(){
	document.calc.output.value += "0";
}
function runPoint(){
	document.calc.output.value += ".";
}
function runMultiply(){
	document.calc.output.value += "*";
}
function runDivide(){
	document.calc.output.value += "/";
}
function runMinus(){
	document.calc.output.value += "-";
}
function runPlus(){
	document.calc.output.value += "+";
}
function compute(){
	var compute = eval(document.calc.output.value);
	document.calc.output.value = compute;
}
function backSpace(){
	calc.output.value = calc.output.value.slice(0,- 1);
}