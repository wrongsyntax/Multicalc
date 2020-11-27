standardType = document.getElementById("standard");
tipType = document.getElementById("tip");
cf = document.getElementById("c-f");
heron = document.getElementById("heron");

standardType.addEventListener("click", function() { changeCalc("standard") });
tipType.addEventListener("click", function() { changeCalc("tip") });
cf.addEventListener("click", function() { changeCalc("c <-> f") });
heron.addEventListener("click", function() { changeCalc("heron") });

calculator = document.getElementById("calc")

let currentCalc = 1

let answer = "1 + 1";
let previousCalc = "2";

function changeCalc(type) {
    let equalBtn;
    if (type === "standard") {
        calculator.innerHTML = `
            <p id="previousCalc">${previousCalc}</p>
            <p id=\"answer\">${answer}</p>
            <div class="calcGrid">
                <div><img id="clear" src="img/Clear_Btn.png" alt="clear"></div>
                <div><img id="delete" src="img/Delete_Btn.png" alt="delete"></div>
                <div><img id="plusminus" src="img/Plus-Minus_Btn.png" alt="plus/minus"></div>
                <div><img id="percent" src="img/Percent_Btn.png" alt="percent"></div>
                <div id="seven" class="numBtn">7</div>
                <div id="eight" class="numBtn">8</div>
                <div id="nine" class="numBtn">9</div>
                <div><img id="divide" src="img/Divide_Btn.png" alt="divide"></div>
                <div id="four" class="numBtn">4</div>
                <div id="five" class="numBtn">5</div>
                <div id="six" class="numBtn">6</div>
                <div><img id="multiply" src="img/Multiply_Btn.png" alt="multiply"></div>
                <div id="one" class="numBtn">1</div>
                <div id="two" class="numBtn">2</div>
                <div id="three" class="numBtn">3</div>
                <div><img id="subtract" src="img/Subtract_Btn.png" alt="subtract"></div>
                <div id="zero" class="numBtn">0</div>
                <div id="decimal" class="numBtn">.</div>
                <div><img id="equal" src="img/Equal_Btn@2x.png" alt="equal"></div>
                <div><img id="add" src="img/Add_Btn.png" alt="add"></div>
            </div>
        `;
        equalBtn = document.getElementById("equal");
        equalBtn.addEventListener("click", doCalculation);
    } else if (type === "tip") {
        calculator.innerHTML = `
            
        `;
    }
    currentCalc = type;
}


function doCalculation() {
    // Do the calculation
}
