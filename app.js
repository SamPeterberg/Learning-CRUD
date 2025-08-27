
let note = document.getElementById("note")
let add = document.getElementById("submit")
let notesContainer = document.getElementById("notesContainer");
let notes = {}


function success() {
    
        Swal.fire({
          title: "✔ Success!",
          text: "Your Note Has been Added",
          icon: "success",
          confirmButtonText: "OK",
        });
}

function error(){
    Swal.fire({
      title: "❌ Alert!",
      text: "Please write a Note",
      icon: "error",
      confirmButtonText: "OK",
    });
}


add.addEventListener("click", (e)=>{
    e.preventDefault()
    if(note.value=="" || note.value==" "){
        error()
    }else{
        success()
        note.value = ""
        
    }
})

