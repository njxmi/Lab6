function fahrToCelsius(temp) {
	return ((temp - 32) * (5/9));
}
var result = fahrToCelsius(212);
//var result = [212, 32, 65]
console.log(result);

function celsiusToFahr(temp) {
  return ((temp * 1.8) + 32);
}
var result = celsiusToFahr(100);
console.log(result);

