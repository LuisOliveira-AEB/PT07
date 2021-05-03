document.getElementById("btn").onclick = function(){
  var num = prompt("Enter number");
    while (num != null) {
        num = parseInt(num);
    	if (num > 0) {
            alert(num + " is positive");
        } else if (num < 0) {
            alert(num + " is negative");
        } else {
            alert(num + " is zero");
        }
    	break
    }
}
