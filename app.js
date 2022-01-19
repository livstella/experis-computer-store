import { bankFunction } from "./src/bank.js";
import { buyFunction } from "./src/buy.js";
import { loanFunction } from "./src/loan.js";
let computerArray=[]

//Function for loan-button
document.getElementById("loan-button").onclick = loanFunction
  
  
//Function for work-button
  document.getElementById("work-button").onclick = function() {
  let workBalance=document.getElementById("work-balance").innerText
  document.getElementById("work-balance").innerText = Number(workBalance)+100     
  }
  
//Function for bank-button
  document.getElementById("bank-button").onclick = bankFunction
  
//Fetch and append data to select tag

  fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
   .then(function(response){
      return response.json()
   })
   .then(function(norComputer){
    for (let computer of norComputer) {
      computerArray.push(computer)
    }
    computerArray.forEach(function(item){
      let currentItem=document.createElement('option')
      currentItem.innerText=item.title
      document.getElementById("computers").appendChild(currentItem)
    })
  
   })
   .catch(function(error){
     console.log(error)
   })
  

//Add information on selected computer to DOM
   document.getElementById("computers").onchange=function(){
//Gets selected computer
     let selectedvalue = document.getElementById("computers").value

//Filters computerArray and returns all data for the selected computer
     const selectedComputer=computerArray.filter(computerArray => computerArray.title==selectedvalue)
     
//Sets ids from html to the data for selected computer
     document.getElementById("description-computer").innerText=("Description: " + selectedComputer[0].description)
     document.getElementById("price-computer").innerText=(selectedComputer[0].price)

//Generates a 'li' element for each spec of the selected computer
     selectedComputer[0].specs.forEach(function(item){
     let currentItem=document.createElement('li')
     currentItem.innerText=item
     document.getElementById("specs-computer").appendChild(currentItem)
     })

//Sets image-computer scr to the url specified in the api
     let image=document.getElementById('image-computer')
     image.src = `https://noroff-komputer-store-api.herokuapp.com/${selectedComputer[0].image}`;
     console.log(image.src)
   }


// Function for buy-button. compares the price for selected computer to bank balance 
   document.getElementById("buy-button").onclick = buyFunction
    
    
  
  
   
  

