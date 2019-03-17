'use strict';
var output = document.getElementById('greeter-output');
output.innerHTML = 'Naciśnij przycisk żeby obliczyć temperaturę' + '<br><br>' + output.innerHTML; 
var button = document.getElementById('greeter-button');
var tempC;

button.addEventListener('click', function(){
tempC = window.prompt('Podaj temperaturę w stopniach Celsjusza');
if (isNaN(tempC)) {output.innerHTML = 'Podaj poprawną liczbę' + '<br><br>' + output.innerHTML}
else {
	var tempF = tempC * 1.8 +32
	output.innerHTML = 'Temperatura '+tempC+' w stopniach Celsjusza to '+tempF+' w stopniach Fahrenheita'}
	if(tempF < 32){
		output.innerHTML = output.innerHTML + ' a woda jest zamarznięta.';}
	else if(tempF > 32 && tempF < 212){
		output.innerHTML = output.innerHTML + ' a woda jest w stanie ciekłym.';}
	else if(tempF == 212){
		output.innerHTML = output.innerHTML + ' a woda właśnie zaczyna się gotować.';}
	else if(tempF == 32){
		output.innerHTML = output.innerHTML + ' a woda właśnie zaczyna zamarzać';}
	else {
		output.innerHTML = output.innerHTML + ' a woda występuje w postaci pary wodnej.';}
}); 

/*
var output2 = document.getElementById('greeter-output2');
output2.innerHTML = 'Naciśnij przycisk żeby obliczyć temperaturę' + '<br><br>' + output2.innerHTML;
var button2 = document.getElementById('greeter-button2');
var tempF2;
button2.addEventListener('click', function(){
tempF2 = window.prompt('Podaj temperaturę w stopniach Fahrenheita');
if (isNaN(tempF2)) {output2.innerHTML = 'Podaj poprawną liczbę' + '<br><br>' + output2.innerHTML}
else {
	var tempC2 = (5 / 9) (tempF2 - 32)
	output2.innerHTML = 'Temperatura '+tempF2+' w stopniach Fahrenheita to '+tempC2' w stopniach Celsjusza'}
	if(tempF2 < 32){
		output.innerHTML = output.innerHTML + ' a woda jest zamarznięta.';}
	else if(tempF2 > 32 && tempF < 212){
		output.innerHTML = output.innerHTML + ' a woda jest w stanie ciekłym.';}
	else if(tempF2 == 212){
		output.innerHTML = output.innerHTML + ' a woda właśnie zaczyna się gotować.';}
	else if(tempF2 == 32){
		output.innerHTML = output.innerHTML + ' a woda właśnie zaczyna zamarzać';}
	else {
		output.innerHTML = output.innerHTML + ' a woda występuje w postaci pary wodnej.';}
});
*/
