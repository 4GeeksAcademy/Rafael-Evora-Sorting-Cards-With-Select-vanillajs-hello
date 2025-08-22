import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //------CARD CODE---------------
  function randomCard () {
    const cardContainer = document.getElementById("card-container");

    if (cardContainer.children.length >= 10) {
      alert("Maximum amount of cards reached!");
      return;
    }
    
    let allSuits = ["♦", "♥", "♣", "♠"];

    let allNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

    let randomSuitIndex = Math.floor(Math.random() * allSuits.length);
    let randomNumberIndex = Math.floor(Math.random() * allNumbers.length);

    const valueMap = {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:10, J:11, Q:12, K:13, A:14}
    
    let randomSuit = allSuits[randomSuitIndex];
    let randomNumber = allNumbers[randomNumberIndex]
    
    let randomCard = randomSuit + randomNumber;
    
    const color = (randomSuit === "♦" || randomSuit === "♥")? "red" : "black";
    
    
    //create card part--------------------
    const cardGeneral = document.createElement("div");
    cardGeneral.className = "cardGeneral";
    
    const cardTop = document.createElement("div");
    cardTop.className = "cardTop";
    cardTop.textContent = randomNumber;
    
    const cardCenter = document.createElement("div");
    cardCenter.className = "cardCenter";
    cardCenter.textContent = randomSuit;
    
    const cardBottom = document.createElement("div");
    cardBottom.className = "cardBottom";
    cardBottom.textContent = randomNumber;
    
    cardTop.style.color = color;
    cardCenter.style.color = color;
    cardBottom.style.color = color;
    
    cardGeneral.appendChild(cardTop);
    cardGeneral.appendChild(cardCenter);
    cardGeneral.appendChild(cardBottom);
    
    
    
    //------------------------------------
    
    //introducing card through DOM-------
    cardGeneral.dataset.value = valueMap[randomNumber];
    let numericValue = valueMap[randomNumber];
    

    document.getElementById("card-container").appendChild(cardGeneral);
    document.getElementById("middle-page").appendChild(cardContainer);
    
    const cards = document.querySelectorAll('.cardGeneral');
    const sortedCards = Array.from(cards).sort((a,b) => a.dataset.value - b.dataset.value);
    
    
    
    //------------------------------------
    
    
    
    
    
    console.log(randomCard);
  }
    //--------------------------------

  

    document.getElementById("draw").addEventListener("click", randomCard);


  randomCard();

  

};


