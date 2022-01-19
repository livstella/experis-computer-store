export function loanFunction(){
    let loanBalance=document.getElementById("loan-balance").innerText;
    let bankBalance=document.getElementById("bank-balance").innerText
  
    //Checks for existing loan
    if (loanBalance !=0){ alert("You cannot take a loan while you´re still paying off one")
    }else{
    
    //If no existing loan, number entered in the promt is added to bank and loan balance
        let loanPromt = prompt("How much would you like to loan?");
       if (Number(loanPromt) > Number(bankBalance)*2) {
            alert("You cannot loan more than double you bank balance")
          }else{
            document.getElementById("loan-balance").innerText =Number(loanPromt)
            document.getElementById("bank-balance").innerText =Number(document.getElementById("bank-balance").innerText)+Number(loanPromt)
          }
        
        }
     //Adds repay-button
     let repayButton=document.createElement('button')
     document.getElementById("repay-button-area").append(repayButton)
     repayButton.innerText="Repay Loan"
     repayButton.id="repay-button"
  
     //Function for repaying
     document.getElementById("repay-button").onclick = function(){
      let loanBalance=Number(document.getElementById("loan-balance").innerText)
      let bankBalance=Number(document.getElementById("bank-balance").innerText)
  
      document.getElementById("bank-balance").innerText-=loanBalance   
      document.getElementById("loan-balance").innerText=0
      document.getElementById("repay-button").remove("repay-button")
     }

}