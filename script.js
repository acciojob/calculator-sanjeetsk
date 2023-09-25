//your code here
let input = document.getElementById('input');

let value = "";
function buttonClick(e) {
    const clickedButton = e.target.innerHTML;
    value += clickedButton;
    input.value = value;
}

function buttonClear() {
    value = "";
    input.value = ""
}

function buttonDel() {
    if(value != ""){
        value = value.toString();
        const newString = value.slice(0, -1);
        value=newString;
        input.value = value;
    }
    else{
        setTimeout(() => input.value="No input", 1500);
    }
}

function buttonAns() {
    try{
        let ans = eval(value)
        value = ans;
        input.value = ans;
    }
    catch{
        input.value = "Invalid Input"
        setTimeout(() => value="", 1500);
    }
}

