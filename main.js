window.onload = () => {
    const calc = new Calculator()

    add.onclick = () => result.innerHTML = calc.summ(Number(first_number.value), Number(second_number.value))
    sub.onclick = () => result.innerHTML = calc.sub(Number(first_number.value), Number(second_number.value))
    mul.onclick = () => result.innerHTML = calc.mult(Number(first_number.value), Number(second_number.value))
    div.onclick = () => result.innerHTML = calc.div(Number(first_number.value), Number(second_number.value))
}

class Calculator {
    summ = (a, b) => a + b

    sub = (a, b) => a - b

    mult = (a, b) => a * b

    div = (a, b) => b != 0 ? a / b : NaN
}
