//this function basically takes a parameter (e) and its work is whatever value we add to show in textbox//
function valueButton(e){
    calculatorform.screen.value += e.value;
}
//this function is to clear the values inside the textbox when we click on clear button//
function Clear(){
    calculatorform.screen.value = null;
}

//This function is to perform basic calculations and show the result in the textbox here I have taken a function eval which basically evaluates the values and shows the result//
function Calculate(){
    calculatorform.screen.value = eval(calculatorform.screen.value)
}