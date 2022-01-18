document.getElementById("loan-button").onclick = function() {

  if (document.getElementById("loan-balance").innerText !=0){ alert("You cannot take a loan while you´re still paying off one")
  }else{
  
  
      let loanPromt = prompt("How much would you like to loan?");
     if (Number(loanPromt) > Number(document.getElementById("bank-balance").innerText)*2) {
          alert("You cannot loan more than double you bank balance")
        }else{
          alert("You've got a loan")
          document.getElementById("loan-balance").innerText =Number(loanPromt)
          document.getElementById("bank-balance").innerText =Number(document.getElementById("bank-balance").innerText)+Number(loanPromt)
        }
      
      }
  }
  
  
  
  //Function for workbutton
  document.getElementById("work-button").onclick = function() {
     let workBalance=document.getElementById("work-balance").innerText
     document.getElementById("work-balance").innerText = Number(workBalance)+100
     
  }
  
  //Function for bankbutton
  document.getElementById("bank-button").onclick = function() {
  
      let bankBalance=document.getElementById("bank-balance").innerText
      let workBalance=document.getElementById("work-balance").innerText
      document.getElementById("bank-balance").innerText = Number(bankBalance)+ Number(workBalance)
  
      document.getElementById("work-balance").innerText =0
  }
  
  
  //Fetch and append data to select tag
  let computerArray=[]
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
     image=document.getElementById('image-computer')
     image.src = `https://noroff-komputer-store-api.herokuapp.com/${selectedComputer[0].image}`;
   }

    //Buys button. Gets the number value of the price for selected computer. 
   document.getElementById("buy-button").onclick = function() {
    let bankBalance=Number(document.getElementById("bank-balance").innerText)
    let computerPrice=Number(document.getElementById("price-computer").innerText)

     if (bankBalance>=computerPrice){
       alert("You got yourself a new computer")
       document.getElementById("bank-balance").innerText =0
     }else(
       alert("You do not have enough money in the bank")
     )
    
    
    }
  
   
  
