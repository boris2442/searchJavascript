//prendre ce que l'utilisateur saisie
//comparer a chaque matiere disponible
//si il ya une matiere contanant le caractere entré,
//affiche les
// si non , cache les

// application de la logique
//

const input = document.querySelector("input");

const professors = document.querySelectorAll(".professor");
// console.log(professors, input)

input.addEventListener("input", (e) => {
  let valueInput = e.target.value;
  // console.log(valueInput);

  professors.forEach((professor) => {
  
        if(professor.textContent.toLowerCase().indexOf(valueInput.toLowerCase())>=0){
      professor.style.display = "";
    } else {
      professor.style.display = "none";
    }
  });
});
