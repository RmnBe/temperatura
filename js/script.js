'use strict';
var output = document.getElementById('greeter-output');
output.innerHTML = 'Naciśnij przycisk żeby obliczyć temperaturę' + '<br><br>' + output.innerHTML; 
var button = document.getElementById('greeter-button');
var tempC;

button.addEventListener('click', function(){
tempC = window.prompt('Podaj temperaturę w stopniach Celsjusza');
if (isNaN(tempC)) {output.innerHTML = 'Podaj poprawną liczbę' + '<br><br>' + output.innerHTML}
else {
	var tempF = Math.round(tempC * 1.8 +32)
	output.innerHTML = 'Temperatura <font size="5"><b>'+tempC+'</b></font> w stopniach Celsjusza to <font size="5"><b>'+tempF+'</b></font> w stopniach Fahrenheita'}
	if(tempF < 32){
		output.innerHTML = output.innerHTML + ' a woda jest zamarznięta.';}
	else if(tempF > 32 && tempF < 212){
		output.innerHTML = output.innerHTML + ' a woda jest w stanie ciekłym.';}
	else if(tempF == 212){
		output.innerHTML = output.innerHTML + ' a woda właśnie zaczyna się gotować.';}
	else if(tempF == 32){
		output.innerHTML = output.innerHTML + ' a woda właśnie zaczyna zamarzać.';}
	else if(tempF>212){
		output.innerHTML = output.innerHTML + ' a woda występuje w postaci pary wodnej.';}
}); 

var button2 = document.getElementById('greeter-button2');
var tempF2;
button2.addEventListener('click', function(){
tempF2 = window.prompt('Podaj temperaturę w stopniach Fahrenheita');
if (isNaN(tempF2)) {output.innerHTML = 'Podaj poprawną liczbę' + '<br><br>' + output.innerHTML}
else {
	var tempC2 = Math.round((5 / 9) * (tempF2 - 32))
	output.innerHTML = 'Temperatura <font size="5"><b>'+tempF2+'</b></font> w stopniach Fahrenheita to <font size="5"><b>'+tempC2+'</b></font> w stopniach Celsjusza'}
	if(tempF2 < 32){
		output.innerHTML = output.innerHTML + ' a woda jest zamarznięta.';}
	else if(tempF2 > 32 && tempF2 < 212){
		output.innerHTML = output.innerHTML + ' a woda jest w stanie ciekłym.';}
	else if(tempF2 == 212){
		output.innerHTML = output.innerHTML + ' a woda właśnie zaczyna się gotować.';}
	else if(tempF2 == 32){
		output.innerHTML = output.innerHTML + ' a woda właśnie zaczyna zamarzać.';}
	else if(tempF2>212){
		output.innerHTML = output.innerHTML + ' a woda występuje w postaci pary wodnej.';}
});

