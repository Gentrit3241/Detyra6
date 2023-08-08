const sideDiv = document.querySelector(".sideDiv");


//First Div
const firstDiv = document.querySelector(".firstDiv");


const nameInput = document.querySelector(".name")

const emailInput = document.querySelector(".email")

const phoneInput = document.querySelector(".phone")



// secondDiv
const secondDiv = document.querySelector(".secondDiv");


const arcade = document.querySelector(".arcade");

const arcadeT = document.querySelector(".arcade h3");

const arcadeTick = document.querySelector(".arcade .tick");


const advanced = document.querySelector(".advanced");
// console.log(advanced);
const advancedT = document.querySelector(".advanced h3");
// console.log(advancedT);
const advancedTick = document.querySelector(".advanced .tick");
// console.log(advancedTick);

const pro = document.querySelector(".pro");
// (pro);
const proT = document.querySelector(".pro h3");
// (proT);
const proTick = document.querySelector(".pro .tick");
// (proTick);

const bill = document.querySelector(".secondDiv .bill");
// console.log(bill)
const monthly = document.querySelector(".secondDiv .bill .monthly");
// console.log(monthly)
const yearly = document.querySelector(".secondDiv .bill .yearly");
// console.log(yearly)


// thirdDiv
const thirdDiv = document.querySelector(".thirdDiv");
// console.log(thirdDiv)

const games = document.querySelector(".games");
// console.log(games);
const gamesT = document.querySelector(".games h4");
// console.log(gamesT);
const gamesTick = document.querySelector(".games .tick");
// console.log(gamesTick);

const storage = document.querySelector(".storage");
// console.log(storage);
const storageT = document.querySelector(".storage h4");
// console.log(storageT);
const storageTick = document.querySelector(".storage .tick");
// console.log(storageTick);

const profile = document.querySelector(".profile");
// console.log(profile);
const profileT = document.querySelector(".profile h4");
// console.log(profileT);
const profileTick = document.querySelector(".profile .tick");
// console.log(profileTick);


// Fourth Div
const fourthDiv = document.querySelector(".fourthDiv");
// console.log(fourthDiv)

const planSelected = document.querySelector(".plan")
// console.log(planSelected)

const addOnsSelected = document.querySelector(".addOnsSelected")
// console.log(addOnsSelected)

const addOnsSelectedT = document.querySelector(".addOnsSelected .select");
// console.log(addOnsSelectedT)
const addOnsSelectedT1 = document.querySelector(".addOnsSelected .doubleTap");
// console.log(addOnsSelectedT1)

const total = document.querySelector(".total");
// console.log(total)

const month = document.querySelector(".month")
// console.log(month);
const year = document.querySelector(".year")
// console.log(year);


// Fifth Div
const fifthDiv = document.querySelector(".fifthDiv")
// console.log(fifthDiv)
const cardInput = document.querySelector(".fifthDiv .cardInfo input:nth-child(1)")
// console.log(cardInput)
const MYInput = document.querySelector(".fifthDiv .cardInfo input:nth-child(2)")
// console.log(MYInput)
const CSCInput = document.querySelector(".fifthDiv .cardInfo input:nth-child(3)")
// console.log(CSCInput)


const endDiv = document.querySelector(".endDiv");
// console.log(endDiv)



const circle1 = document.querySelector(".sideDiv div:nth-child(1) .circle");
// console.log(circle1)
const circle2 = document.querySelector(".sideDiv div:nth-child(2) .circle");
// console.log(circle2)
const circle3 = document.querySelector(".sideDiv div:nth-child(3) .circle");
// console.log(circle3)
const circle4 = document.querySelector(".sideDiv div:nth-child(4) .circle");
// console.log(circle4)
const circle5 = document.querySelector(".sideDiv div:nth-child(5) .circle");
// console.log(circle5)

const nextStep1 = document.querySelector(".firstDiv button");
// console.log(nextStep1)
const nextStep2 = document.querySelector(".secondDiv button:nth-child(2)");
// console.log(nextStep2)
const nextStep3 = document.querySelector(".thirdDiv button:nth-child(2)");
// console.log(nextStep3)
const nextStep4 = document.querySelector(".fourthDiv button:nth-child(2)");
// console.log(nextStep4)
const confirmButton = document.querySelector(".fifthDiv button:nth-child(2)");
// console.log(confirmButton)



const goBack2 = document.querySelector(".secondDiv button:nth-child(1)")
// console.log(goBack2)
const goBack3 = document.querySelector(".thirdDiv button:nth-child(1)")
// console.log(goBack3)
const goBack4 = document.querySelector(".fourthDiv button:nth-child(1)")
// console.log(goBack4)
const goBack5 = document.querySelector(".fifthDiv button:nth-child(1)")
// console.log(goBack5)




const messageDiv = document.querySelector(".messageDiv");
// console.log(messageDiv)
const messageDiv2 = document.querySelector(".messageDiv2");
// console.log(messageDiv2)
const messageDiv3 = document.querySelector(".messageDiv3");
// console.log(messageDiv3)

function hideMessage() {
  messageDiv.classList.add("hidden");
}

function showMessage() {
  messageDiv.classList.remove("hidden");
}
function hideMessage2() {
  messageDiv2.classList.add("hidden");
}

function showMessage2() {
  messageDiv2.classList.remove("hidden");
}
function hideMessage3() {
  messageDiv3.classList.add("hidden");
}

function showMessage3() {
  messageDiv3.classList.remove("hidden");
}

function isValidEmail(email) {
    var emailRegex = /^.+@.+\..+$/;
    return emailRegex.test(email);
  }

function isValidPhoneNumber(phoneNumber) {
    var phoneRegex = /^\+\s?\d{3}\s\d{2}\s\d{3}\s\d{3}$/;
    
    return phoneRegex.test(phoneNumber);
}

function isValidName(name) {
    var nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/;
    return nameRegex.test(name);
  }
  function isValidCard(card) {
    const cardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11})$/;

    return cardRegex.test(card);
  }
  function isValidMY(my) {
    const monthYearRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    return monthYearRegex.test(my);
  }
  function isValidCSC(csc) {
    const cscRegex = /^\d{3,4}$/;

    return cscRegex.test(csc);
  }


  



nextStep1.addEventListener("click", ()=> {

    nameInput.style.border = "";
    emailInput.style.border = "";
    phoneInput.style.border = "";

    const isValid = isValidEmail(emailInput.value);
    const isValidP = isValidPhoneNumber(phoneInput.value);
    const isValidN = isValidName(nameInput.value);

    if (isValidN === false) {
        nameInput.style.border = "1px solid red";
        nameInput.value = null;
    }
    if (isValid === false) {
        emailInput.style.border = "red 1px solid";
        emailInput.value = null;
    }
    if (isValidP === false) {
        phoneInput.style.border = "red 1px solid";
        phoneInput.value = null;
    }


    if (isValidN === false || isValid === false || isValidP === false) {
        showMessage();
        setTimeout(hideMessage, 3000);
      } else {
        hideMessage();
        secondDiv.style.display = "block";
        firstDiv.style.display = "none";
        circle1.style.color = "white";
        circle1.style.backgroundColor = "rgba(69, 133, 85, 1)";
        circle2.style.color = "rgba(69, 133, 85, 1)";
        circle2.style.backgroundColor = "white";


      


      
      }
})






goBack2.addEventListener("click", ()=> {
    secondDiv.style.display = "none";
    firstDiv.style.display = "block";
    circle1.style.color = "rgba(69, 133, 85, 1)";
    circle1.style.backgroundColor = "white";
    circle2.style.color = "white";
    circle2.style.backgroundColor = "rgba(69, 133, 85, 1)";
})


nextStep2.addEventListener("click", ()=> {
    if ((arcade.classList.contains("test") || advanced.classList.contains("test") || pro.classList.contains("test")) && (monthly.classList.contains("test") || yearly.classList.contains("test"))) {
    thirdDiv.style.display = "block";
    secondDiv.style.display = "none";
    circle2.style.color = "white";
    circle2.style.backgroundColor = "rgba(69, 133, 85, 1)";
    circle3.style.color = "rgba(69, 133, 85, 1)";
    circle3.style.backgroundColor = "white";
    } else {
        showMessage2();
        setTimeout(hideMessage2, 2500)
    }
})




/* nextStep2.addEventListener("click", ()=> {
    thirdDiv.style.display = "block";
    secondDiv.style.display = "none";
    circle2.style.color = "white";
    circle2.style.backgroundColor = "rgba(69, 133, 85, 1)";
    circle3.style.color = "rgba(69, 133, 85, 1)";
    circle3.style.backgroundColor = "white";
}) */
goBack3.addEventListener("click", ()=> {
    thirdDiv.style.display = "none";
    secondDiv.style.display = "block";
    circle2.style.color = "rgba(69, 133, 85, 1)";
    circle2.style.backgroundColor = "white";
    circle3.style.color = "white";
    circle3.style.backgroundColor = "rgba(69, 133, 85, 1)";
})
let totalCost = 0;
nextStep3.addEventListener("click", ()=> {
    fourthDiv.style.display = "block";
    thirdDiv.style.display = "none";
    circle3.style.color = "white";
    circle3.style.backgroundColor = "rgba(69, 133, 85, 1)";
    circle4.style.color = "rgba(69, 133, 85, 1)";
    circle4.style.backgroundColor = "white";
  
    let totalCost = 0;
    if (arcade.classList.contains("test")) {
      totalCost = totalCost + 9;
    }
    if (advanced.classList.contains("test")) {
      totalCost = totalCost + 12;
    }
    if (pro.classList.contains("test")) {
      totalCost = totalCost + 15;
    }
    if (games.classList.contains("ickk")) {
      totalCost = totalCost + 1;
    }
    if (storage.classList.contains("ickk")) {
      totalCost = totalCost + 2;
    }
    if (profile.classList.contains("ickk")) {
      totalCost = totalCost + 2;
    }


    if (monthly.classList.contains("test")) {
      // nothing
    } else {
      totalCost = totalCost*12;
    }
    
    



    total.textContent = "Total: " + totalCost.toFixed(2) + "$"


})
goBack4.addEventListener("click", ()=> {
    fourthDiv.style.display = "none";
    thirdDiv.style.display = "block";
    circle4.style.color = "white";
    circle4.style.backgroundColor = "rgba(69, 133, 85, 1)";
    circle3.style.color = "rgba(69, 133, 85, 1)";
    circle3.style.backgroundColor = "white";
})


nextStep4.addEventListener("click", ()=> {
    fifthDiv.style.display = "block";
    fourthDiv.style.display = "none";
    circle5.style.color = "rgba(69, 133, 85, 1)";
    circle5.style.backgroundColor = "white";
    circle4.style.color = "white";
    circle4.style.backgroundColor = "rgba(69, 133, 85, 1)";
    // fourthDiv.style.pointerEvents = "none";
    // fourthDiv.style.opacity = "0.8"
    // sideDiv.style.opacity = "0.8"

})




goBack5.addEventListener("click", ()=> {
  fifthDiv.style.display = "none";
  fourthDiv.style.display = "block";
  circle4.style.color = "rgba(69, 133, 85, 1)";
  circle4.style.backgroundColor = "white";
  circle5.style.color = "white";
  circle5.style.backgroundColor = "rgba(69, 133, 85, 1)";
})

// DATA SAVING

const dataObj = {};
// console.log(dataObj)

const paymentDataObj = {};


confirmButton.addEventListener("click", ()=> {

  const isValidC = isValidCard(cardInput.value);
  const isValidMonthYear = isValidMY(MYInput.value);
  const isValidCSC1 = isValidCSC(CSCInput.value);

  
  if (isValidC === false) {
    cardInput.style.border = "1px solid red";
    cardInput.value = null;
} else {
  // console.log(true)
  cardInput.style.border = "";
}

  if (isValidMonthYear === false) {
    MYInput.style.border = "1px solid red";
    MYInput.value = null;
} else {
  // console.log(true)
  MYInput.style.border = "";
}

  if (isValidCSC1 === false) {
    CSCInput.style.border = "1px solid red";
    CSCInput.value = null;
} else {
  // console.log(true)
  CSCInput.style.border = "";
}

if (isValidC === false || isValidMonthYear === false || isValidCSC1 === false) {
  console.log("Data not filled or false")
  showMessage3();
  setTimeout(hideMessage3, 2500)

} else {
  endDiv.style.display = "flex";
  fifthDiv.style.pointerEvents = "none";
  fifthDiv.style.opacity = "0.8";
  sideDiv.style.opacity = "0.8";

  setTimeout(()=> {
    endDiv.style.display = "none"
    fifthDiv.style.pointerEvents = "";
    fifthDiv.style.opacity = "1"
    sideDiv.style.opacity = "1"
  }, 5000); 


  

  // data saving!!
  dataObj.Name = nameInput.value;
  dataObj.Email = emailInput.value;
  dataObj.Phone = phoneInput.value;
  if (arcade.classList.contains("test")) {
    dataObj.Plan = arcadeT.textContent
  }
  if (advanced.classList.contains("test")) {
    dataObj.Plan = advancedT.textContent
  }
  if (pro.classList.contains("test")) {
    dataObj.Plan = proT.textContent
  }

  // billing
  if (monthly.classList.contains("test")) {
    dataObj.Billing = monthly.textContent
  }
  if (yearly.classList.contains("test")) {
    dataObj.Billing = yearly.textContent
  }


  // AddOns
  let addOnss = [];
  if (games.classList.contains("ickk")) {
  addOnss.push(gamesT.textContent);
  }
  if (profile.classList.contains("ickk")) {
  addOnss.push(profileT.textContent);
  }
  if (storage.classList.contains("ickk")) {
  addOnss.push(storageT.textContent);
  }
  dataObj.AddOns = addOnss;

  // TotalCost


  let totalCost = 0;
  if (arcade.classList.contains("test")) {
    totalCost = totalCost + 9;
  }
  if (advanced.classList.contains("test")) {
    totalCost = totalCost + 12;
  }
  if (pro.classList.contains("test")) {
    totalCost = totalCost + 15;
  }
  if (games.classList.contains("ickk")) {
    totalCost = totalCost + 1;
  }
  if (storage.classList.contains("ickk")) {
    totalCost = totalCost + 2;
  }
  if (profile.classList.contains("ickk")) {
    totalCost = totalCost + 2;
  }

  if (yearly.classList.contains("test")) {
  totalCost = totalCost*12; // year
  }

  dataObj.TotalCost = totalCost.toFixed(2) + "$";

  console.table(dataObj)



  // payment data saving

  paymentDataObj.cardNumber = cardInput.value;
  paymentDataObj.monthYear = MYInput.value;
  paymentDataObj.cscData = CSCInput.value;

  console.table(paymentDataObj)

 



}


})




arcade.addEventListener("click", ()=> {

    planSelected.innerHTML = "<h5>Double-Tap to change your plan (redirect to step 2)</h5>"
    arcade.classList.add("test")
    pro.classList.remove("test")
    advanced.classList.remove("test")

    arcadeT.style.color = "white"
    arcade.style.backgroundColor = "rgba(69, 133, 85, 1)"
    arcadeTick.style.color = "white"
    arcade.style.pointerEvents = "none"
    advanced.style.pointerEvents = ""
    pro.style.pointerEvents = ""
    advancedT.style.color = ""
    advanced.style.backgroundColor = ""
    advancedTick.style.color = ""
    proT.style.color = ""
    pro.style.backgroundColor = ""
    proTick.style.color = ""

    const div = document.createElement("div");
    planSelected.append(div);
    div.textContent = arcadeT.textContent;

    let touchStartTime = 0;
    const doubleTapDelay = 300; // Adjust this value to set the maximum delay between taps
    
    div.addEventListener("click", function(event) {
      let currentTime = new Date().getTime();
      
      if (currentTime - touchStartTime < doubleTapDelay) {
        // Double-tap detected
        div.remove();
        arcadeT.style.color = ""
        arcade.style.backgroundColor = ""
        arcadeTick.style.color = ""
        arcade.style.pointerEvents = ""

        fourthDiv.style.display = "none";
        secondDiv.style.display = "block";
        circle2.style.color = "rgba(69, 133, 85, 1)";
        circle2.style.backgroundColor = "white";
        circle4.style.color = "";
        circle4.style.backgroundColor = "";

        arcade.classList.remove("test")
        // Add your code here
      
        event.preventDefault(); // Prevent zoom or other behaviors
      }
      
      touchStartTime = currentTime;
    });


})
advanced.addEventListener("click", ()=> {

    planSelected.innerHTML = "<h5>Double-Tap to change your plan (redirect to step 2)</h5>"
    advanced.classList.add("test")
    arcade.classList.remove("test")
    pro.classList.remove("test")

    advancedT.style.color = "white"
    advanced.style.backgroundColor = "rgba(69, 133, 85, 1)"
    advancedTick.style.color = "white"
    arcade.style.pointerEvents = ""
    advanced.style.pointerEvents = "none"
    pro.style.pointerEvents = ""
    proT.style.color = ""
    pro.style.backgroundColor = ""
    proTick.style.color = ""
    arcadeT.style.color = ""
    arcade.style.backgroundColor = ""
    arcadeTick.style.color = ""

    const div = document.createElement("div");
    planSelected.append(div);
    div.textContent = advancedT.textContent;



    let touchStartTime = 0;
    const doubleTapDelay = 300; // Adjust this value to set the maximum delay between taps
    
    div.addEventListener("click", function(event) {
      let currentTime = new Date().getTime();
      
      if (currentTime - touchStartTime < doubleTapDelay) {
        // Double-tap detected
        div.remove();
        advancedT.style.color = ""
        advanced.style.backgroundColor = ""
        advancedTick.style.color = ""
        advanced.style.pointerEvents = ""

        fourthDiv.style.display = "none";
        secondDiv.style.display = "block";
        circle2.style.color = "rgba(69, 133, 85, 1)";
        circle2.style.backgroundColor = "white";
        circle4.style.color = "";
        circle4.style.backgroundColor = "";

        advanced.classList.remove("test")
        // Add your code here
      
        event.preventDefault(); // Prevent zoom or other behaviors
      }
      
      touchStartTime = currentTime;
    });


})
pro.addEventListener("click", ()=> {

    planSelected.innerHTML = "<h5>Double-Tap to change your plan (redirect to step 2)</h5>"
    pro.classList.add("test")
    arcade.classList.remove("test")
    advanced.classList.remove("test")

    proT.style.color = "white"
    pro.style.backgroundColor = "rgba(69, 133, 85, 1)"
    proTick.style.color = "white"
    arcade.style.pointerEvents = ""
    advanced.style.pointerEvents = ""
    pro.style.pointerEvents = "none"
    advancedT.style.color = ""
    advanced.style.backgroundColor = ""
    advancedTick.style.color = ""
    arcadeT.style.color = ""
    arcade.style.backgroundColor = ""
    arcadeTick.style.color = ""

    const div = document.createElement("div");
    planSelected.append(div);
    div.textContent = proT.textContent;


    let touchStartTime = 0;
    const doubleTapDelay = 300; // Adjust this value to set the maximum delay between taps
    
    div.addEventListener("click", function(event) {
      let currentTime = new Date().getTime();
      
      if (currentTime - touchStartTime < doubleTapDelay) {
        // Double-tap detected
        div.remove();
        proT.style.color = ""
        pro.style.backgroundColor = ""
        proTick.style.color = ""
        pro.style.pointerEvents = ""

        fourthDiv.style.display = "none";
        secondDiv.style.display = "block";
        circle2.style.color = "rgba(69, 133, 85, 1)";
        circle2.style.backgroundColor = "white";
        circle4.style.color = "";
        circle4.style.backgroundColor = "";

        pro.classList.remove("test")
        // Add your code here
      
        event.preventDefault(); // Prevent zoom or other behaviors
      }
      
      touchStartTime = currentTime;
    });


    
})


monthly.addEventListener("click", ()=> {

    monthly.classList.add("test")
    yearly.classList.remove("test")

    monthly.style.color = "white";
    monthly.style.backgroundColor = "rgba(69, 133, 85, 1)"
    monthly.style.pointerEvents = "none"
    yearly.style.pointerEvents = ""
    yearly.style.color = "";
    yearly.style.backgroundColor = ""

    // year.style.display = "none"
    // month.style.display = ""
    month.style.color = "black";
    month.style.pointerEvents = "none"
    year.style.pointerEvents = ""
    year.style.color = "";
})
yearly.addEventListener("click", ()=> {

    monthly.classList.remove("test")
    yearly.classList.add("test")


    yearly.style.color = "white";
    yearly.style.backgroundColor = "rgba(69, 133, 85, 1)"
    yearly.style.pointerEvents = "none"
    monthly.style.pointerEvents = ""
    monthly.style.color = "";
    monthly.style.backgroundColor = ""

    // month.style.display = "none"
    // year.style.display = ""
    year.style.color = "black";
    year.style.pointerEvents = "none"
    month.style.pointerEvents = ""
    month.style.color = "";
})
month.addEventListener("click", ()=> {

    monthly.classList.add("test")
    yearly.classList.remove("test")


    yearly.style.color = "";
    yearly.style.backgroundColor = ""
    yearly.style.pointerEvents = ""
    monthly.style.pointerEvents = "none"
    monthly.style.color = "white";
    monthly.style.backgroundColor = "rgba(69, 133, 85, 1)"

    // month.style.display = "none"
    // year.style.display = ""
    year.style.color = "";
    year.style.pointerEvents = ""
    month.style.pointerEvents = "none"
    month.style.color = "black";

    let totalCost = 0;
    if (arcade.classList.contains("test")) {
      totalCost = totalCost + 9;
    }
    if (advanced.classList.contains("test")) {
      totalCost = totalCost + 12;
    }
    if (pro.classList.contains("test")) {
      totalCost = totalCost + 15;
    }
    if (games.classList.contains("ickk")) {
      totalCost = totalCost + 1;
    }
    if (storage.classList.contains("ickk")) {
      totalCost = totalCost + 2;
    }
    if (profile.classList.contains("ickk")) {
      totalCost = totalCost + 2;
    }



    total.textContent = "Total: " + totalCost.toFixed(2) + "$"
})


year.addEventListener("click", ()=> {

  monthly.classList.remove("test")
  yearly.classList.add("test")


  yearly.style.color = "white";
  yearly.style.backgroundColor = "rgba(69, 133, 85, 1)"
  yearly.style.pointerEvents = "none"
  monthly.style.pointerEvents = ""
  monthly.style.color = "";
  monthly.style.backgroundColor = ""

  // month.style.display = "none"
  // year.style.display = ""
  year.style.color = "black";
  year.style.pointerEvents = "none"
  month.style.pointerEvents = ""
  month.style.color = "";

  let totalCost = 0;
  if (arcade.classList.contains("test")) {
    totalCost = totalCost + 9;
  }
  if (advanced.classList.contains("test")) {
    totalCost = totalCost + 12;
  }
  if (pro.classList.contains("test")) {
    totalCost = totalCost + 15;
  }
  if (games.classList.contains("ickk")) {
    totalCost = totalCost + 1;
  }
  if (storage.classList.contains("ickk")) {
    totalCost = totalCost + 2;
  }
  if (profile.classList.contains("ickk")) {
    totalCost = totalCost + 2;
  }

    totalCost = totalCost*12; // year


  total.textContent = "Total: " + totalCost.toFixed(2) + "$"

})








games.addEventListener("click", ()=> {


    

    gamesTick.classList.toggle("tickk");
    gamesT.classList.toggle("tickk");
    games.classList.toggle("ickk");

    if (gamesT.classList.contains("tickk")) {

        addOnsSelectedT.style.display = "none"
        addOnsSelectedT1.style.display = "inline"

    const div = document.createElement("div");
    addOnsSelected.append(div);
    div.textContent = gamesT.textContent;
    div.classList.add("gamer1")

    let touchStartTime = 0;
    const doubleTapDelay = 300; // Adjust this value to set the maximum delay between taps
    
    div.addEventListener("click", function(event) {
      let currentTime = new Date().getTime();
      
      

      if (currentTime - touchStartTime < doubleTapDelay) {
        // Double-tap detected
        div.remove();
        gamesTick.classList.remove("tickk");
        gamesT.classList.remove("tickk");
        games.classList.remove("ickk");


        let totalCost = 0;
        if (arcade.classList.contains("test")) {
          totalCost = totalCost + 9;
        }
        if (advanced.classList.contains("test")) {
          totalCost = totalCost + 12;
        }
        if (pro.classList.contains("test")) {
          totalCost = totalCost + 15;
        }
        if (games.classList.contains("ickk")) {
          totalCost = totalCost + 1;
        }
        if (storage.classList.contains("ickk")) {
          totalCost = totalCost + 2;
        }
        if (profile.classList.contains("ickk")) {
          totalCost = totalCost + 2;
        }
    
    
        if (monthly.classList.contains("test")) {
          // nothing
        } else {
          totalCost = totalCost*12;
        }
    
    
        total.textContent = "Total: " + totalCost.toFixed(2) + "$"
    




        if (addOnsSelected.querySelectorAll("div").length === 0) {
            addOnsSelectedT.style.display = "";
            addOnsSelectedT1.style.display = "none"
        }
        // Add your code here
      
        event.preventDefault(); // Prevent zoom or other behaviors
      }
      
      touchStartTime = currentTime;
    });

    } else {
        let element = document.querySelector(".gamer1")
        element.remove();

        if (addOnsSelected.querySelectorAll("div").length === 0) {
            addOnsSelectedT.style.display = "";
            addOnsSelectedT1.style.display = "none"
        }

    }



})
storage.addEventListener("click", ()=> {



    storageTick.classList.toggle("tickk");
    storageT.classList.toggle("tickk");
    storage.classList.toggle("ickk");

    if (storageT.classList.contains("tickk")) {

        addOnsSelectedT.style.display = "none"
        addOnsSelectedT1.style.display = "inline"


    const div = document.createElement("div");
    addOnsSelected.append(div);
    div.textContent = storageT.textContent;
    div.classList.add("gamer2")

    let touchStartTime = 0;
    const doubleTapDelay = 300; // Adjust this value to set the maximum delay between taps
    
    div.addEventListener("click", function(event) {
      let currentTime = new Date().getTime();
      
      if (currentTime - touchStartTime < doubleTapDelay) {
        // Double-tap detected
        div.remove();
        storageTick.classList.remove("tickk");
        storageT.classList.remove("tickk");
        storage.classList.remove("ickk");



        let totalCost = 0;
        if (arcade.classList.contains("test")) {
          totalCost = totalCost + 9;
        }
        if (advanced.classList.contains("test")) {
          totalCost = totalCost + 12;
        }
        if (pro.classList.contains("test")) {
          totalCost = totalCost + 15;
        }
        if (games.classList.contains("ickk")) {
          totalCost = totalCost + 1;
        }
        if (storage.classList.contains("ickk")) {
          totalCost = totalCost + 2;
        }
        if (profile.classList.contains("ickk")) {
          totalCost = totalCost + 2;
        }
    
    
        if (monthly.classList.contains("test")) {
          // nothing
        } else {
          totalCost = totalCost*12;
        }
    
    
        total.textContent = "Total: " + totalCost.toFixed(2) + "$"
    




        if (addOnsSelected.querySelectorAll("div").length === 0) {
            addOnsSelectedT.style.display = "";
            addOnsSelectedT1.style.display = "none"
        }
        // Add your code here
      
        event.preventDefault(); // Prevent zoom or other behaviors
      }
      
      touchStartTime = currentTime;
    });

    } else {
        let element = document.querySelector(".gamer2")
        element.remove();

        if (addOnsSelected.querySelectorAll("div").length === 0) {
            addOnsSelectedT.style.display = "";
            addOnsSelectedT1.style.display = "none"
        }
    }

})
profile.addEventListener("click", ()=> {

    // console.log("ASdasd")



    profileTick.classList.toggle("tickk");
    profileT.classList.toggle("tickk");
    profile.classList.toggle("ickk");

    if (profileT.classList.contains("tickk")) {

        addOnsSelectedT.style.display = "none"
        addOnsSelectedT1.style.display = "inline"

    const div = document.createElement("div");
    addOnsSelected.append(div);
    div.textContent = profileT.textContent;
    div.classList.add("gamer3")


    let touchStartTime = 0;
    const doubleTapDelay = 300; // Adjust this value to set the maximum delay between taps
    
    div.addEventListener("click", function(event) {
      let currentTime = new Date().getTime();
      
      if (currentTime - touchStartTime < doubleTapDelay) {
        // Double-tap detected
        div.remove();
        profileTick.classList.remove("tickk");
        profileT.classList.remove("tickk");
        profile.classList.remove("ickk");



        let totalCost = 0;
        if (arcade.classList.contains("test")) {
          totalCost = totalCost + 9;
        }
        if (advanced.classList.contains("test")) {
          totalCost = totalCost + 12;
        }
        if (pro.classList.contains("test")) {
          totalCost = totalCost + 15;
        }
        if (games.classList.contains("ickk")) {
          totalCost = totalCost + 1;
        }
        if (storage.classList.contains("ickk")) {
          totalCost = totalCost + 2;
        }
        if (profile.classList.contains("ickk")) {
          totalCost = totalCost + 2;
        }
    
    
    
        if (monthly.classList.contains("test")) {
          // nothing
        } else {
          totalCost = totalCost*12;
        }
    
        total.textContent = "Total: " + totalCost.toFixed(2) + "$"
    




        if (addOnsSelected.querySelectorAll("div").length === 0) {
            addOnsSelectedT.style.display = "";
            addOnsSelectedT1.style.display = "none"
        }
        // Add your code here
      
        event.preventDefault(); // Prevent zoom or other behaviors
      }
      
      touchStartTime = currentTime;
    });
    
    } else {
        let element = document.querySelector(".gamer3")
        element.remove();


        if (addOnsSelected.querySelectorAll("div").length === 0) {
            addOnsSelectedT.style.display = "";
            addOnsSelectedT1.style.display = "none"
        }

    }

})








/* 

total payment??

name email number class??? */
