$(document).ready(function() {
    let color = "#2596F3";
    colorBorder();
  
    // Render bottom border for input field
    function colorBorder() {
      $("input[type=text]").css("border-bottom", "2px solid" + color + "");
    }
 /* 
    // Define card
    function card(color, text) {
      return (
        `<div class="newCard d-flex flex-column" style="background-color:` +
        color +
        `">
              <p>` +
        text +
        `</p>
              <button>
                  <span> <img src="images/trash.png" height="25px"> </span>
              </button>
          </div>`
      );
    }
  */
  /*  // Add new card
    $("input[type=text]").keypress(function(event) {
      if (event.which === 13) {
        let text = $(this).val();
        $(this).val("");
        $(this)
          .next(".list-body")
          .append(card(color, text));
      }
    });
*/
  
    // Delete card
    $(document).on("click", ".newCard > button", function() {
      $(this)
        .parent()
        .fadeOut(250, function() {
          $(this).remove();
        });
    });
  /*
    // Toggle input field
    $("header").on("click", "button", function() {
      $(this)
        .children()
        .toggleClass("oi-chevron-top oi-chevron-bottom");
      $("input[type=text]").slideToggle();
    }); 
  
    // Toggle chosen color
    $(".color").on("click", function() {
      color = $(this).val();
      $(".oi-check").removeClass("oi-check");
      colorBorder();
      $(this)
        .children()
        .addClass("oi-check");
    }); */
  
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



 saveBtn.onclick = function () {
   const Title = inpTitle.value;
   const Description = inpDesc.value;
   const Date = inpDate.value;
   const Prio = inpPrio.value;
   const Lars = inpLars.value;
   const Sondre = inpSondre.value;
   const Frida = inpFrida.value;
   const Sofie = inpSofie.value;




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

     

     
     let newCard = document.createElement("div");
     newCard.classList.add("newCard");
     newCard.setAttribute("id", rndmCardId)
     
     let newTitle = document.createElement("h2");
     newTitle.setAttribute("id", rndmTitleId);
     newTitle.setAttribute("contenteditable", "true");
     
     let newDesc = document.createElement("p");
     newDesc.setAttribute("id", rndmDescId)
     
     let trashBtn = document.createElement("button")
     trashBtn.setAttribute("id", rndmTrashBtnId);
     
     let trash = document.createElement("span");
     trash.setAttribute("id",rndmTrashSpanId)
     
     let trashIcon = document.createElement("img")
     trashIcon.setAttribute("src", "images/trash.png")
     trashIcon.setAttribute("height", "25px");
     
     let newDate = document.createElement("p");
     newDate.setAttribute("id", rndmDateId);
     
     let newPrio = document.createElement("p");
     newPrio.setAttribute("id", rndmPriId);
     
     let newLars = document.createElement("p");
     newLars.setAttribute("id", rndmLarsId);
     
     let newSondre = document.createElement("p");
     newSondre.setAttribute("id", rndmSondreId);
     
     let newFrida = document.createElement("p");
     newFrida.setAttribute("id", rndmFridaId);
     
     let newSofie = document.createElement("p");
     newSofie.setAttribute("id", rndmSofieId);

     



if (Title.length == 0){
    alert("You need a title");
}else{          document.getElementById("todoColumn").appendChild(newCard);
     document.getElementById(rndmCardId).appendChild(newTitle);
     document.getElementById(rndmTitleId).innerHTML = Title;
     document.getElementById(rndmCardId).appendChild(newDesc);
     document.getElementById(rndmDescId).innerHTML = Description;
      

      
      document.getElementById(rndmCardId).appendChild(newPrio);
      document.getElementById(rndmPriId).innerHTML = Prio;
      
      if(inpLars.checked == true){
            document.getElementById(rndmCardId).appendChild(newLars);
            document.getElementById(rndmLarsId).innerHTML = Lars;
            document.getElementById(rndmLarsId).style.fontSize = "10px";

      }
      
      if(inpSondre.checked == true){
          document.getElementById(rndmCardId).appendChild(newSondre);
          document.getElementById(rndmSondreId).innerHTML = Sondre;
          document.getElementById(rndmSondreId).style.fontSize = "10px";

      }
 
      if(inpFrida.checked == true){
          document.getElementById(rndmCardId).appendChild(newFrida);
          document.getElementById(rndmFridaId).innerHTML = Frida;
          document.getElementById(rndmFridaId).style.fontSize = "10px";

      }
 
      if(inpSofie.checked == true){
          document.getElementById(rndmCardId).appendChild(newSofie);
          document.getElementById(rndmSofieId).innerHTML = Sofie;
          document.getElementById(rndmSofieId).style.fontSize = "10px";

      }
 
      
     document.getElementById(rndmCardId).appendChild(newDate);
     document.getElementById(rndmDateId).innerHTML = Date;
      document.getElementById(rndmDateId).style.fontSize = "10px";
      
     document.getElementById(rndmCardId).appendChild(trashBtn);
     document.getElementById(rndmTrashBtnId).appendChild(trash);
     document.getElementById(rndmTrashSpanId).appendChild(trashIcon);
}


     

     
     JSON.parse(localStorage.getItem("newCard"));
     localStorage.setItem("data", JSON.stringify(newCard));
     
 }




