
let note = document.getElementById("note").value
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
      text: "Please write a Valid Note",
      icon: "error",
      confirmButtonText: "OK",
    });
}


add.addEventListener("click", (e)=>{
    e.preventDefault()
    if(note=="" || note==" " || typeof(note)==Number){
        error()
    }else{
        success()
        note.value = ""

    }
})

