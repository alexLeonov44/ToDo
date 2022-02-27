export const setNotesInLocalStorage=(todos)=>{
    localStorage.setItem('duckNote', JSON.stringify(todos));
  }
