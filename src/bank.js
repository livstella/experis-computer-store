export function bankFunction(){
    console.log(42)
    if(document.getElementById("loan-balance").innerText==0){
        let bankBalance=document.getElementById("bank-balance").innerText
        let workBalance=document.getElementById("work-balance").innerText
        let loanBalance=document.getElementById("loan-balance").innerText
        document.getElementById("bank-balance").innerText = Number(bankBalance)+ Number(workBalance)
        document.getElementById("work-balance").innerText =0
    }else{
      document.getElementById("loan-balance").innerText-=Number(document.getElementById("work-balance").innerText)*0.1
      document.getElementById("bank-balance").innerText=Number(document.getElementById("work-balance").innerText)*0.9+Number(document.getElementById("bank-balance").innerText)
      document.getElementById("work-balance").innerText=0
      if(Math.sign(Number(document.getElementById("loan-balance").innerText))==-1){
        document.getElementById("bank-balance").innerText=Number(document.getElementById("bank-balance").innerText)+Number(document.getElementById("loan-balance").innerText*-1)
        document.getElementById("loan-balance").innerText=0  
        document.getElementById("repay-button").remove("repay-button")
        
    }else if(  document.getElementById("loan-balance").innerText==0){
      document.getElementById("repay-button").remove("repay-button")
    }
  
    }
}