const input = document.querySelector(".container__input");
const inputBtn = document.querySelector(".container__add");
const ul = document.querySelector(".container__ul");

input.focus();

function converter(num) {
    const matrix = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let str = '';

    for (let key in matrix) {
        while(num >= matrix[key]){
            str += key;
            num -= matrix[key];
        }
    }
    return str;
}

inputBtn.addEventListener("click", () => {
    let romennum = input.value
    if (romennum <= 0 || romennum > 3999){
        alert("Please enter a valid number (1-3999)")
        input.value = "";
        input.focus();
    }else{
        converter(romennum)
        ul.innerHTML += `<li>${romennum} is ${converter(romennum)} in romen numeral expression.</li>`
        input.value = "";
        input.focus();
    }
})

input.addEventListener("keydown", function(e){
    if (e.keyCode == 13){
        inputBtn.click();
    }
})