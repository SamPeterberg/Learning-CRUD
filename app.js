var note = document.getElementById("noteInput");
var notes = []




  function addNote() {
    if(note.value =="" || note.value ==" "){
      error()
    }else{
      notes.push(note.value);
      console.log(notes)
      noteInput.value = "";
      showNote()
    }
  }
  
  function showNote() {
  var notesList = document.getElementById("notesLists");
  notesList.innerHTML = "  "
  for (let i = 0; i < notes.length; i++) {
      notesList.innerHTML += `<li id="note">
                <span>${notes[i]}
                </span>
            </li>`;    
  }
  let deleteBtn = document.createElement("button") 
  deleteBtn.textContent = "Delete"
  deleteBtn.addEventListener("click",()=>{
    console.log("hi")
  })
}

  function error(){
    Swal.fire({
        title: "❌ Alert!",
        text: "Please write a Valid Note",
        icon: "error",
        confirmButtonText: "OK",
      });
    }

//  let remove = document.getElementById("del")
//  remove.addEventListener("click",()=>{
//   console.log("gi")
//  })