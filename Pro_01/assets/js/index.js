function AdCalc(string) {
    const display = document.getElementById('idisplay');
    const operadores = ['+', '-', '*', '/']

    if(operadores.includes(display.value.slice(-1)) && operadores.includes (string)) {
        display.value = display.value.slice(0, -1) + string
    } else {
        display.value += string
    }
}
    //string === 'Clear' ? display.value = '' : 

function Calc() {
    const display = document.getElementById('idisplay');
    const hist = document.getElementsByClassName('historico')[0];
    hist.innerHTML = `<p>${display.value}</p>`
    display.value = eval(display.value)
    
}

function Limp() {
    const display = document.querySelector('#idisplay')
    let texto = display.value
       
    texto = texto.slice(0, -1)
    display.value = texto;

}