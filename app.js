//Jquery drag and drop

$(document).ready(function() {
    let color = "#2596F3";
    colorBorder();
  
    // Render bottom border for input field
    function colorBorder() {
      $("input[type=text]").css("border-bottom", "2px solid" + color + "");
    }
 
  
    // Delete card
    $(document).on("click", ".newCard > button", function() {
      $(this)
        .parent()
        .fadeOut(250, function() {
          $(this).remove();
        });
    });
  
  
    $(function() {
      $("#todoColumn, #doingColumn, #doneColumn")
        .sortable({
          connectWith: ".list-body"
        })
        .disableSelection();
    });
  });
  

  /*
  **************************************************************** 
  *Modal for task options
   */

const openOptionsButtons = document.querySelectorAll("[data-options-target]");
const closeOptionsButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay"); 

openOptionsButtons.forEach(button => {
    button.addEventListener("click", () => {
        const options = document.querySelector(button.dataset.optionsTarget)
        openOptions(options)
    })
})

overlay.addEventListener('click', () => {
    const options = document.querySelectorAll('.options.active')
    options.forEach(options => {
      closeOptions(options)
    })
  })

closeOptionsButtons.forEach(button => {
    button.addEventListener("click", () => {
        const options = button.closest(".options")
        closeOptions(options)
    })
})

function openOptions(options) {
    if (options == null) return
    options.classList.add("active")
    overlay.classList.add("active")
}

function closeOptions(options) {
    if (options == null) return
    options.classList.remove("active")
    overlay.classList.remove("active")
}

 /*
  **************************************************************** 
  * Adding tasks to the columns
  */



//Modal save button function.

 saveBtn.onclick = function () {
     //Attributes for the task cards.
   const Title = inpTitle.value;
   const Description = inpDesc.value;
   const Date = inpDate.value;
   const Prio = inpPrio.value;
   const Lars = inpLars.value;
   const Sondre = inpSondre.value;
   const Frida = inpFrida.value;
   const Sofie = inpSofie.value;

     //Generating random IDs for each dom object to prevent objects from being added the wrong cards.

     let rndmCardId = Math.random();
     let rndmTitleId = Math.random();
     let rndmDescId = Math.random();
     let rndmTrashBtnId = Math.random();
     let rndmTrashSpanId = Math.random();
     let rndmDateId = Math.random();
     let rndmPriId = Math.random();
     let rndmLarsId = Math.random();
     let rndmSondreId = Math.random();
     let rndmFridaId = Math.random();
     let rndmSofieId = Math.random();

     

     //Creating the task card.
     let newCard = document.createElement("div");
     newCard.classList.add("newCard");
     newCard.setAttribute("id", rndmCardId)
     
     //Title of the created card.
     let newTitle = document.createElement("h2");
     newTitle.setAttribute("id", rndmTitleId);
     newTitle.setAttribute("contenteditable", "true");
     
     //Description for the card
     let newDesc = document.createElement("p");
     newDesc.setAttribute("id", rndmDescId)
     
     //Creating the trash button to remove task cards.
     let trashBtn = document.createElement("button")
     trashBtn.setAttribute("id", rndmTrashBtnId);
     
     let trash = document.createElement("span");
     trash.setAttribute("id",rndmTrashSpanId)
     
     let trashIcon = document.createElement("img")
     trashIcon.setAttribute("src", "images/trash.png")
     trashIcon.setAttribute("height", "25px");
     
     //Date on when task is due.
     let newDate = document.createElement("p");
     newDate.setAttribute("id", rndmDateId);
     
     //Sets the priority for the task card.
     let newPrio = document.createElement("p");
     newPrio.setAttribute("id", rndmPriId);
     
     //Select who of the hardcoded groupmembers to add to the task card.
     let newLars = document.createElement("i");
     newLars.setAttribute("id", rndmLarsId);
     
     let newSondre = document.createElement("i");
     newSondre.setAttribute("id", rndmSondreId);
     
     let newFrida = document.createElement("i");
     newFrida.setAttribute("id", rndmFridaId);
     
     let newSofie = document.createElement("i");
     newSofie.setAttribute("id", rndmSofieId);

     


//If title input field is empty the following alert box will popup. Else the card will be created.
if (Title.length == 0){
    alert("You need a title");
}else{          
        //Creates the new card and place it in the "todoColumn" div. adds title and description.
        document.getElementById("todoColumn").appendChild(newCard);
        document.getElementById(rndmCardId).appendChild(newTitle);
        document.getElementById(rndmTitleId).innerHTML = Title;
        document.getElementById(rndmCardId).appendChild(newDesc);
        document.getElementById(rndmDescId).innerHTML = Description;
      

        //Adds priority on task.
        document.getElementById(rndmCardId).appendChild(newPrio);
        document.getElementById(rndmPriId).innerHTML = Prio;
      
        //If checkbox on name of group member is checked the group member will be added to the task.
        if(inpLars.checked == true){
            document.getElementById(rndmCardId).appendChild(newLars);
            document.getElementById(rndmLarsId).innerHTML = Lars;
            document.getElementById(rndmLarsId).style.fontSize = "15px";

        }
      
        if(inpSondre.checked == true){
            document.getElementById(rndmCardId).appendChild(newSondre);
            document.getElementById(rndmSondreId).innerHTML = Sondre;
            document.getElementById(rndmSondreId).style.fontSize = "15px";

        }
 
        if(inpFrida.checked == true){
            document.getElementById(rndmCardId).appendChild(newFrida);
            document.getElementById(rndmFridaId).innerHTML = Frida;
            document.getElementById(rndmFridaId).style.fontSize = "15px";

        }
 
        if(inpSofie.checked == true){
            document.getElementById(rndmCardId).appendChild(newSofie);
            document.getElementById(rndmSofieId).innerHTML = Sofie;
            document.getElementById(rndmSofieId).style.fontSize = "15px";

        }
 
        //Adds date to task card.
        document.getElementById(rndmCardId).appendChild(newDate);
        document.getElementById(rndmDateId).innerHTML = Date;
        document.getElementById(rndmDateId).style.fontSize = "10px";
      
        //Adds the trash/remove button to the task card.
        document.getElementById(rndmCardId).appendChild(trashBtn);
        document.getElementById(rndmTrashBtnId).appendChild(trash);
        document.getElementById(rndmTrashSpanId).appendChild(trashIcon);
}


     
 }




