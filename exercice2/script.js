const code = prompt("Enter a code:")
// Zip codes conditions
if (code.length !== 5 || code.indexOf(" ") !== -1 ||isNaN(code)) {
console.log("error");

}else{
console.log("success");
}

//zip codes using Regex
if (/^\d{5}$/.test(code)) {
console.log("error");
}else{
console.log("error")
}