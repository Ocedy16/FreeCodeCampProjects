function Palindrome(){
    var result = document.getElementById("result")
    var pal = document.getElementById("text-input").value;
    if (pal=="" || pal == null){
        alert("Please input a value")
        return;
    }
    var pal2 = "";

    for (var i = 0; i<pal.length; i++){
        if (pal[i].match(/[a-zA-Z0-9]/)){
            pal2 += pal[i].toLowerCase();
        }
    }
    for (var j = 0; j < pal2.length; j++) {
        if (pal2[j] != pal2[pal2.length-j-1]){
            result.textContent = pal+" is not a palindrome";
            return;
        }
    }
    result.textContent = pal+" is a palindrome";
}