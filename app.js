document.getElementById("loan-button").onclick = function() {
    let loanPromt = prompt("How much would you like to loan?");

    if (Number(loanPromt) < Number(document.getElementById("bank-balance").innerHTML)) {
        alert("You've got a loan")
        document.getElementById("bank-balance").innerHTML =Number(document.getElementById("bank-balance").innerHTML)+Number(loanPromt)
      }else{
          alert("You cannot loan more than double you bank balance")
      }
    
   
}



//Function for workbutton
document.getElementById("work-button").onclick = function() {
   let workBalance=document.getElementById("work-balance").innerHTML
   document.getElementById("work-balance").innerHTML = Number(workBalance)+100
   
}

//Function for bankbutton
document.getElementById("bank-button").onclick = function() {

    let bankBalance=document.getElementById("bank-balance").innerHTML
    let workBalance=document.getElementById("work-balance").innerHTML
    document.getElementById("bank-balance").innerHTML = Number(bankBalance)+ Number(workBalance)

    document.getElementById("work-balance").innerHTML =0
}