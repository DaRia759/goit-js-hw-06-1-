
const textInput = document.getElementById("validation-input");;
    // setFocusBtn: document.querySelector("#validation-input"),
    // removeFocusBtn: document.querySelector("#validation-input"),




    textInput.addEventListener("blur", () => {
  
    if (textInput.value.length === Number(textInput.dataset.length)) {
      


        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {



        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
        
    };
});


  

