export function bankFunction(){
    let bankBalance=Number(document.getElementById("bank-balance").innerText)
    let workBalance=Number(document.getElementById("work-balance").innerText)
    let loanBalance=Number(document.getElementById("loan-balance").innerText)


    if(loanBalance==0){        
        document.getElementById("bank-balance").innerText = bankBalance+ workBalance
        document.getElementById("work-balance").innerText =0
    }else{
      document.getElementById("loan-balance").innerText-=workBalance*0.1
      document.getElementById("bank-balance").innerText=workBalance*0.9+bankBalance
      document.getElementById("work-balance").innerText=0
      if(Math.sign(Number(document.getElementById("loan-balance").innerText))==-1){
        document.getElementById("bank-balance").innerText=bankBalance+Number(document.getElementById("loan-balance").innerText*-1)
        document.getElementById("loan-balance").innerText=0  
        document.getElementById("repay-button").remove("repay-button")
        
    }else if(document.getElementById("loan-balance").innerText==0){
      document.getElementById("repay-button").remove("repay-button")
    }
  
    }
}