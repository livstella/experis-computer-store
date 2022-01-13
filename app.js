document.getElementById("loan-button").onclick = function() {
    document.getElementById("bank-balance").innerHTML ="42"
}



//Function for workbutton
document.getElementById("work-button").onclick = function() {
   let workBalance=document.getElementById("work-balance").innerHTML
   document.getElementById("work-balance").innerHTML = parseInt(workBalance,10)+100
   
}

//Function for bankbutton
document.getElementById("bank-button").onclick = function() {

    let bankBalance=document.getElementById("bank-balance").innerHTML
    let workBalance=document.getElementById("work-balance").innerHTML
    document.getElementById("bank-balance").innerHTML = parseInt(bankBalance,10)+ parseInt(workBalance,10)

    document.getElementById("work-balance").innerHTML =0
}