function main() {
    var number = "";
    var newNumber = "";
    var operator = "";
    var total = 0;
    var result = $("#result");
    result.text("0");

    var testLength = function (number) {
        if (number.length > 20) {
            result.text(number.substr(number.length - 19, 19));
            if (number.length > 25) {
                number = "";
                result.text("Err");
            }
        }
    };

    $(".numbers > button").click(function () {
        number += $(this).text();
        result.text(number);
        testLength(number);
    });
    $(".operators > button").not("#equals,#decimal").click(function () {
        operator = $(this).text();
        if (operator === "√") {
            total = (Math.sqrt(parseFloat(number))).toString();
            result.text(total);
        } else {
            newNumber = number;
            number = "";
            result.text("0");
        }
    });
    $("#percent").click(function () {
        total = (parseFloat(newNumber) / 100).toString();
        result.text(total);
    });
    $("#decimal").click(function () {
        var numOfDecs = 0;
        for (var i = 0; i < number.length; i++) {
            if (i === ".") {
                numOfDecs++;
            }
        }
        if (numOfDecs === 0) {
            number += ".";
            result.text(number);
        }
    });
    $("#clear,#clearall").click(function () {
        number = "";
        result.text("0");
        if ($(this).attr("id") === "clearall") {
            newNumber = "";
        };
    });
    $("#equals").click(function () {
        var a = parseFloat(newNumber);
        var b = parseFloat(number);
        switch (operator) {
            case "+":
                total = (a + b).toString();
                break;
            case "-":
                total = (a - b).toString();
                break;
            case "×":
                total = (a * b).toString();
                break;
            case "÷":
                total = (a / b).toString();
                break;
            default:
                result = "ERR"
        }
        result.text(total);
        testLength(total)
        number = "";
        newNumber = "";
    })

};


$(document).ready(main);