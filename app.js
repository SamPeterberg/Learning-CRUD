var note = document.getElementById("noteInput");
let notes = []




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
  var notesList = document.getElementById("notesList");
  notesList.innerHTML = "  "
  for (let i = 0; i < notes.length; i++) {
      notesList.innerHTML = `<li id="note">
                <span>${notes[i]}
                </span>
            </li>`;    
  }
}

  function error(){
    Swal.fire({
        title: "❌ Alert!",
        text: "Please write a Valid Note",
        icon: "error",
        confirmButtonText: "OK",
      });
    }