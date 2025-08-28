
let add = document.getElementById("submit")
let notesContainer = document.getElementById("notesContainer");
let notes = []

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
  let noteInput = document.getElementById("note");
  let note = noteInput.value;
    if(note =="" || note ==" "){
        error()
    }else{
      notes.push(note);
      
      noteInput.value = "";
    }
})

