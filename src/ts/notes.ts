const contentBox = (document.getElementsByClassName(
  "contentBox"
  )! as unknown) as HTMLDivElement;
const notesForm = document.getElementById("form") as HTMLFormElement;
const noteTitle = document.getElementById("title") as HTMLInputElement;
const noteContent = document.getElementById("content") as HTMLTextAreaElement;
const noteBtn = document.getElementById('noteBtn') as HTMLButtonElement
  
  const dateRef = new Date;
class Note{
  constructor(){
    const userNote:typeNote = {
      title: noteTitle as unknown as string,
      content: noteContent as unknown as string,
      date: new Date(),//new Date() => Tue Feb 05 2019 12:05:22 GMT+0530 (IST)  
  }

  async function deleteNote(){
    
  }
  function saveNote(){

  }
  function updateNote(){

  }
};

// Create Note Form Submit Event Listener
noteBtn.addEventListener<"submit">("submit", new Note());

// Date const for timestamp and date


function createNote(){
  console.log(`${noteTitle} : ${noteContent} : ${new Date()}`)
}


type typeNote = {
  title: string,
  content: string,
  date: Date//new Date() => Tue Feb 05 2019 12:05:22 GMT+0530 (IST)  
}
