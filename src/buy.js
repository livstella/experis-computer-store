export function buyFunction(){
    let bankBalance=Number(document.getElementById("bank-balance").innerText)
    let computerPrice=Number(document.getElementById("price-computer").innerText)

 if (bankBalance>=computerPrice){
   alert("You got yourself a new computer")
   document.getElementById("bank-balance").innerText =0
 }else(
   alert("You do not have enough money in the bank")
 )

}